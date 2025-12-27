const CONFIG = {
    storageKey: 'fr_easy_data'
};

let state = {
    levels: [],
    stories: [],
    progress: {}
};

const Admin = {
    currentLevelId: null,

    init() {
        this.loadData();
        this.renderLevels();
    },

    loadData() {
        try {
            const savedData = localStorage.getItem(CONFIG.storageKey);
            if (savedData) {
                state = JSON.parse(savedData);
            } else if (typeof INITIAL_DATA !== 'undefined') {
                state = JSON.parse(JSON.stringify(INITIAL_DATA));
                state.progress = {};
            }
        } catch (e) {
            console.error("Error loading data", e);
        }
    },

    saveData() {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
        this.renderStories(); // Refresh View
        alert('Modifications enregistrées !');
    },

    renderLevels() {
        const list = document.getElementById('levels-list');
        list.innerHTML = state.levels.map(l => `
            <div onclick="Admin.selectLevel(${l.id})" 
                 class="p-3 rounded-lg cursor-pointer transition-colors flex items-center justify-between group ${this.currentLevelId === l.id ? 'bg-blue-50 ring-1 ring-blue-200' : 'hover:bg-slate-50'}">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center text-${l.color.replace('bg-', '').replace('-500', '')}-500">
                        <i class="fas ${l.icon}"></i>
                    </div>
                    <span class="font-medium text-slate-700">${l.title_fr}</span>
                </div>
                <i class="fas fa-chevron-right text-slate-300 text-xs ${this.currentLevelId === l.id ? 'text-blue-500' : ''}"></i>
            </div>
        `).join('');

        // Auto select first
        if (!this.currentLevelId && state.levels.length > 0) {
            this.selectLevel(state.levels[0].id);
        }
    },

    selectLevel(id) {
        this.currentLevelId = id;
        this.renderLevels(); // Re-render to update active state
        this.renderStories();
    },

    renderStories() {
        if (!this.currentLevelId) return;
        const stories = state.stories.filter(s => s.level_id === this.currentLevelId);
        const container = document.getElementById('stories-list');
        const title = document.getElementById('stories-title');

        const level = state.levels.find(l => l.id === this.currentLevelId);
        title.innerHTML = `<i class="fas fa-book text-blue-500"></i> Histoires - ${level.title_fr}`;

        if (stories.length === 0) {
            container.innerHTML = `<div class="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-slate-400">Aucune histoire dans ce niveau.</div>`;
            return;
        }

        container.innerHTML = stories.map(s => `
            <div class="bg-white p-4 rounded-xl border border-slate-100 flex justify-between items-center hover:shadow-md transition-shadow group">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                        ${s.id}
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800">${s.title_fr}</h4>
                        <p class="text-sm text-slate-500 font-arabic">${s.title_ar}</p>
                    </div>
                </div>
                <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onclick="Admin.editStory(${s.id})" class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Éditer"><i class="fas fa-edit"></i></button>
                    <button onclick="Admin.deleteStory(${s.id})" class="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="Supprimer"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `).join('');
    },

    // --- CRUD ---

    openStoryModal(storyId = null) {
        const isEdit = storyId !== null;
        let story = isEdit ? state.stories.find(s => s.id === storyId) : {
            id: Date.now(), // Simple ID gen
            level_id: this.currentLevelId,
            title_fr: '', title_ar: '',
            text_fr: '', text_ar: '',
            vocabulary: [], comprehension: [], grammar: []
        };

        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        modalTitle.innerText = isEdit ? 'Éditer l\'histoire' : 'Nouvelle Histoire';

        modalBody.innerHTML = `
            <form onsubmit="event.preventDefault(); Admin.saveStoryForm(${story.id})" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-1">Titre (FR)</label>
                        <input type="text" id="edit-title-fr" value="${story.title_fr.replace(/"/g, '&quot;')}" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required>
                    </div>
                    <div class="text-right" dir="rtl">
                        <label class="block text-sm font-medium text-slate-700 mb-1">Titre (AR)</label>
                        <input type="text" id="edit-title-ar" value="${story.title_ar.replace(/"/g, '&quot;')}" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required>
                    </div>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">Texte (FR)</label>
                    <textarea id="edit-text-fr" rows="4" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required>${story.text_fr}</textarea>
                </div>
                
                <div class="text-right" dir="rtl">
                    <label class="block text-sm font-medium text-slate-700 mb-1">Texte (AR)</label>
                    <textarea id="edit-text-ar" rows="4" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required>${story.text_ar}</textarea>
                </div>

                <div class="bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800">
                    <i class="fas fa-info-circle mr-2"></i> L'édition détaillée du Vocabulaire et des Quiz n'est pas encore disponible dans cette version rapide. Vous pouvez éditer le fichier JSON exporté pour plus de détails.
                </div>

                <div class="flex justify-end gap-3 pt-4">
                    <button type="button" onclick="Admin.closeModal()" class="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">Annuler</button>
                    <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Enregistrer</button>
                </div>
            </form>
        `;

        document.getElementById('admin-modal').classList.remove('hidden');
    },

    saveStoryForm(id) {
        const titleFr = document.getElementById('edit-title-fr').value;
        const titleAr = document.getElementById('edit-title-ar').value;
        const textFr = document.getElementById('edit-text-fr').value;
        const textAr = document.getElementById('edit-text-ar').value;

        const existingIdx = state.stories.findIndex(s => s.id === id);

        if (existingIdx !== -1) {
            // Update
            state.stories[existingIdx] = { ...state.stories[existingIdx], title_fr: titleFr, title_ar: titleAr, text_fr: textFr, text_ar: textAr };
        } else {
            // New is tricky without vocab/quiz logic, but let's add basic structure
            state.stories.push({
                id: id,
                level_id: this.currentLevelId,
                title_fr: titleFr, title_ar: titleAr,
                text_fr: textFr, text_ar: textAr,
                vocabulary: [], comprehension: [], grammar: []
            });
        }

        this.saveData();
        this.closeModal();
    },

    editStory(id) {
        this.openStoryModal(id);
    },

    deleteStory(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette histoire ?')) {
            state.stories = state.stories.filter(s => s.id !== id);
            this.saveData();
        }
    },

    closeModal() {
        document.getElementById('admin-modal').classList.add('hidden');
    },

    resetToDefault() {
        if (confirm('Attention : Cela effacera toutes vos modifications et restaurera les données initiales. Continuer ?')) {
            localStorage.removeItem(CONFIG.storageKey);
            location.reload();
        }
    },

    exportData() {
        const dataStr = "const INITIAL_DATA = " + JSON.stringify(state, null, 4) + ";";
        const blob = new Blob([dataStr], { type: "text/javascript" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "data_stories_fr_export.js";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
};

window.onload = () => Admin.init();
