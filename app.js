// --- CONFIGURATION & STATE ---
const CONFIG = {
    storageKey: 'fr_easy_data',
    animDuration: 300
};

let state = {
    levels: [],
    stories: [],
    progress: {}
};

// --- INITIALIZATION ---
function initApp() {
    loadData();
    router.init();
}

function loadData() {
    try {
        const savedData = localStorage.getItem(CONFIG.storageKey);
        if (savedData) {
            const parsed = JSON.parse(savedData);
            // Merge saved progress with initial structure if needed
            state = { ...parsed };

            // Ensure data integrity if INITIAL_DATA was updated
            if (typeof INITIAL_DATA !== 'undefined') {
                if (!state.levels || state.levels.length === 0) state.levels = INITIAL_DATA.levels;
                if (!state.stories || state.stories.length === 0) state.stories = INITIAL_DATA.stories;
            }
        } else if (typeof INITIAL_DATA !== 'undefined') {
            state = JSON.parse(JSON.stringify(INITIAL_DATA));
            state.progress = {};
        }
    } catch (e) {
        console.error("Error loading data", e);
        if (typeof INITIAL_DATA !== 'undefined') {
            state = JSON.parse(JSON.stringify(INITIAL_DATA));
        }
    }
}

function saveData() {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
}

// --- LOGIC: PROGRESSION ---
const Logic = {
    isStoryUnlocked(storyId, levelId) {
        const levelStories = state.stories.filter(s => s.level_id === levelId);
        const storyIndex = levelStories.findIndex(s => s.id === storyId);
        if (storyIndex <= 0) return true; // First story always unlocked

        const previousStory = levelStories[storyIndex - 1];
        const prog = state.progress[previousStory.id];
        return prog && prog.vocab && prog.comp && prog.gram;
    },

    updateProgress(storyId, type) {
        if (!state.progress[storyId]) {
            state.progress[storyId] = { vocab: false, comp: false, gram: false };
        }
        state.progress[storyId][type] = true;
        saveData();
    },

    resetProgress() {
        if (confirm('Êtes-vous sûr de vouloir réinitialiser votre progression ?')) {
            state.progress = {};
            saveData();
            router.navigate('home');
        }
    }
};

// --- ROUTING ---
const router = {
    currentView: 'home',
    params: {},

    init() {
        // Handle browser back button
        window.onpopstate = (event) => {
            if (event.state) {
                this.currentView = event.state.view;
                this.params = event.state.params;
                this.render();
            } else {
                this.navigate('home');
            }
        };
        this.render();
    },

    navigate(view, params = {}) {
        this.currentView = view;
        this.params = params;
        window.history.pushState({ view, params }, '', `#${view}`);
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    render() {
        const container = document.getElementById('app-container');
        // Simple fade out/in effect could be added here
        container.classList.add('opacity-0', 'transition-opacity', 'duration-200');

        setTimeout(() => {
            Renderer.render(container, this.currentView, this.params);
            container.classList.remove('opacity-0');
        }, 200);
    }
};

// --- RENDERER ---
const Renderer = {
    render(container, view, params) {
        switch (view) {
            case 'home': this.home(container); break;
            case 'stories': this.stories(container, params); break;
            case 'read': this.read(container, params); break;
            case 'vocab': this.vocabGame(container, params); break;
            case 'quiz_comp': this.quiz(container, params, 'comprehension'); break;
            case 'quiz_gram': this.quiz(container, params, 'grammar'); break;
            default: this.home(container);
        }
    },

    home(container) {
        container.innerHTML = `
            <div class="text-center mb-10 animate-fade-in-down">
                <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 tracking-tight">Bienvenue ! 👋</h1>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">Choisissez votre niveau pour commencer l'aventure et maîtriser le français pas à pas.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                ${state.levels.map(level => `
                    <div onclick="router.navigate('stories', {levelId: ${level.id}})" 
                         class="group relative bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2">
                        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${this.getGradient(level.color)}"></div>
                        
                        <div class="${level.color} w-24 h-24 rounded-2xl flex items-center justify-center text-white text-4xl mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas ${level.icon}"></i>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">${level.title_fr}</h3>
                        <span class="text-xl text-blue-500 font-bold block mb-4 rtl font-arabic" dir="rtl">${level.title_ar}</span>
                        
                        <div class="flex items-center justify-between mt-6 text-sm text-slate-500 border-t border-slate-100 pt-4">
                            <span>${state.stories.filter(s => s.level_id === level.id).length} Histoires</span>
                            <span class="group-hover:translate-x-1 transition-transform"><i class="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-16 text-center">
                 <button onclick="Logic.resetProgress()" class="text-sm text-slate-400 hover:text-red-500 transition-colors underline decoration-dotted">Réinitialiser la progression</button>
            </div>
        `;
    },

    stories(container, params) {
        const level = state.levels.find(l => l.id === params.levelId);
        const stories = state.stories.filter(s => s.level_id === params.levelId);

        container.innerHTML = `
            <div class="mb-8 flex items-center gap-4">
                <button onclick="router.navigate('home')" class="p-3 bg-white hover:bg-slate-100 rounded-xl shadow-sm transition-all hover:shadow-md text-slate-600">
                    <i class="fas fa-arrow-left text-lg"></i>
                </button>
                <div>
                    <h2 class="text-3xl font-bold text-slate-800">${level.title_fr}</h2>
                    <p class="text-blue-600 text-lg font-arabic" dir="rtl">${level.title_ar}</p>
                </div>
            </div>

            <div class="grid gap-4">
                ${stories.length > 0 ? stories.map((story, idx) => {
            const unlocked = Logic.isStoryUnlocked(story.id, level.id);
            const prog = state.progress[story.id] || { vocab: false, comp: false, gram: false };
            const allDone = prog.vocab && prog.comp && prog.gram;

            return `
                        <div onclick="${unlocked ? `router.navigate('read', {storyId: ${story.id}})` : ''}" 
                             class="relative bg-white p-5 rounded-2xl border-2 ${unlocked ? (allDone ? 'border-green-100' : 'border-white') : 'border-slate-100 bg-slate-50 opacity-70 cursor-not-allowed'} shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-5 group">
                            
                            <div class="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl font-bold transition-colors ${unlocked
                    ? (allDone ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white')
                    : 'bg-slate-200 text-slate-400'
                }">
                                ${unlocked ? (allDone ? '<i class="fas fa-check"></i>' : idx + 1) : '<i class="fas fa-lock"></i>'}
                            </div>

                            <div class="flex-grow">
                                <h3 class="text-xl font-bold text-slate-800 ${unlocked ? 'group-hover:text-blue-700' : ''} transition-colors">${story.title_fr}</h3>
                                <p class="text-slate-500 font-arabic text-lg" dir="rtl">${story.title_ar}</p>
                                <div class="mt-2 flex items-center gap-2">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                        <i class="fas fa-spell-check mr-1.5"></i> ${story.vocabulary ? story.vocabulary.length : 0} Mots
                                    </span>
                                </div>
                            </div>

                            ${unlocked ? `
                                <div class="hidden sm:flex flex-col items-end gap-2">
                                    <div class="flex gap-1">
                                        ${this.badge(prog.vocab, 'Vocab')}
                                        ${this.badge(prog.comp, 'Comp')}
                                        ${this.badge(prog.gram, 'Gram')}
                                    </div>
                                </div>
                                <i class="fas fa-chevron-right text-slate-300 ml-2 group-hover:translate-x-1 transition-transform"></i>
                            ` : ''}
                        </div>
                    `;
        }).join('') : `<div class="p-12 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 text-slate-400">Aucune histoire disponible.</div>`}
            </div>
        `;
    },

    read(container, params) {
        const story = state.stories.find(s => s.id === params.storyId);
        if (!story) { router.navigate('home'); return; }

        const p = state.progress[story.id] || { vocab: false, comp: false, gram: false };
        const wordCount = story.vocabulary ? story.vocabulary.length : 0;

        container.innerHTML = `
            <div class="mb-6 flex justify-between items-center sticky top-20 z-10 pointer-events-none">
                <button onclick="router.navigate('stories', {levelId: ${story.level_id}})" class="pointer-events-auto px-4 py-2 bg-white/90 backdrop-blur shadow-md rounded-full text-slate-700 hover:text-blue-600 hover:scale-105 transition-all font-medium flex items-center gap-2">
                    <i class="fas fa-arrow-left"></i> Retour
                </button>
            </div>
            
            <div class="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden mb-8 border border-slate-100">
                 <!-- Header Image or Pattern could go here -->
                <div class="h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                <div class="p-8 lg:p-12">
                    <h1 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-10 text-center leading-tight">${story.title_fr}</h1>
                    
                    <div class="prose prose-lg max-w-none">
                        <div class="text-2xl leading-relaxed text-slate-700 font-medium tracking-wide">${story.text_fr}</div>
                    </div>

                    <div id="translation" class="hidden mt-10 pt-10 border-t-2 border-slate-100 animate-fade-in-up">
                        <div class="text-2xl leading-relaxed text-blue-700 font-arabic text-right" dir="rtl">${story.text_ar}</div>
                    </div>
                </div>

                <div class="bg-slate-50/50 p-6 text-center border-t border-slate-100">
                    <button onclick="UI.toggleTranslation()" class="px-8 py-3 bg-white border border-slate-200 text-blue-600 rounded-xl font-bold hover:bg-blue-50 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mx-auto shadow-sm">
                        <i class="fas fa-language text-xl"></i> 
                        <span>Voir la traduction / ترجمة</span>
                    </button>
                </div>
            </div>

            <!-- Activities Section -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${this.activityCard('Vocabulaire', wordCount + ' mots', 'vocab', p.vocab, story.id, 'fa-spell-check', 'blue')}
                ${this.activityCard('Compréhension', 'Quiz', 'quiz_comp', p.comp, story.id, 'fa-question-circle', 'orange')}
                ${this.activityCard('Grammaire', 'Règles', 'quiz_gram', p.gram, story.id, 'fa-graduation-cap', 'purple')}
            </div>
        `;
    },

    vocabGame(container, params) {
        // ... (Similar structure to original but cleaner DOM)
        const storyId = params.storyId;
        const story = state.stories.find(s => s.id === storyId);
        const vocab = story.vocabulary || [];
        if (!vocab.length) { router.navigate('read', { storyId }); return; }

        let currentIdx = 0;
        let isProcessing = false;

        const renderQ = () => {
            const word = vocab[currentIdx];
            // Safe random options generation
            const otherWords = vocab.filter(v => v.ar !== word.ar);
            const randomDistractors = otherWords.sort(() => 0.5 - Math.random()).slice(0, 2).map(v => v.ar);
            const options = [word.ar, ...randomDistractors].sort(() => 0.5 - Math.random());

            container.innerHTML = `
                <div class="max-w-xl mx-auto">
                    ${this.header(currentIdx + 1, vocab.length, storyId)}
                    
                    <div class="bg-white p-10 rounded-[2.5rem] shadow-2xl text-center mb-8 relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
                        <p class="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Traduisez ce mot</p>
                        <h2 class="text-5xl font-black text-slate-800 mb-2">${word.fr}</h2>
                    </div>

                    <div class="space-y-4">
                        ${options.map(opt => `
                            <button onclick="app.checkVocab(this, '${opt.replace(/'/g, "\\'")}', '${word.ar.replace(/'/g, "\\'")}', ${storyId}, ${currentIdx}, ${vocab.length})" 
                                    class="vocab-btn w-full p-6 bg-white border-2 border-white shadow-lg shadow-slate-200/50 rounded-2xl text-2xl font-bold text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:scale-[1.02] active:scale-95 transition-all font-arabic" dir="rtl">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        };

        // Expose function to global scope properly via 'app' object or handle internally
        // We'll attach transient handlers to 'app'
        app.checkVocab = (btn, selected, correct, sId, cIdx, total) => {
            if (isProcessing) return;
            isProcessing = true;

            const isCorrect = selected === correct;
            UI.showFeedback(btn, isCorrect);

            if (!isCorrect) {
                // Highlight correct
                document.querySelectorAll('.vocab-btn').forEach(b => {
                    if (b.innerText.trim() === correct) b.classList.add('!bg-green-100', '!border-green-500', '!text-green-700');
                });
            }

            setTimeout(() => {
                if (isCorrect) {
                    currentIdx++;
                    if (currentIdx >= total) {
                        Logic.updateProgress(sId, 'vocab');
                        UI.showSuccess("Master Class !", "Vocabulaire maîtrisé avec succès.", sId);
                    } else {
                        renderQ();
                    }
                } else {
                    renderQ(); // Retry or Next? Original said retry same question until right, keeping it simple
                }
                isProcessing = false;
            }, isCorrect ? 800 : 1500);
        };

        renderQ();
    },

    quiz(container, params, type) {
        const storyId = params.storyId;
        const story = state.stories.find(s => s.id === storyId);
        const questions = story[type] || [];
        if (!questions.length) { router.navigate('read', { storyId }); return; }

        let currentIdx = 0;
        let isProcessing = false;

        const renderQ = () => {
            const q = questions[currentIdx];
            const isGrammar = type === 'grammar';

            container.innerHTML = `
                <div class="max-w-2xl mx-auto">
                    ${this.header(currentIdx + 1, questions.length, storyId)}
                    
                    <div class="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl mb-6 relative border border-slate-100">
                        <div class="absolute top-6 right-8">
                             ${isGrammar && q.rule_fr ? `<button onclick="UI.showHelp(\`${q.rule_fr.replace(/`/g, "\\`").replace(/"/g, "&quot;")}\`, \`${q.rule_ar.replace(/`/g, "\\`").replace(/"/g, "&quot;")}\`)" class="text-purple-500 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-full text-sm font-bold transition-colors"><i class="fas fa-lightbulb mr-2"></i>Aide</button>` : ''}
                        </div>
                        <p class="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">${isGrammar ? 'Grammaire' : 'Compréhension'}</p>
                        <h2 class="text-3xl font-bold text-slate-800 leading-snug">${isGrammar ? q.text.replace(/\.{5}/g, '<span class="inline-block w-16 border-b-2 border-slate-300 mx-2"></span>') : q.q}</h2>
                    </div>

                    <div class="grid gap-4">
                        ${q.options.map((opt, idx) => `
                            <button onclick="app.checkQuiz(this, ${idx}, ${isGrammar ? `'${q.missing.replace(/'/g, "\\'")}'` : q.correct}, ${storyId}, '${type}', ${currentIdx}, ${questions.length})" 
                                    class="quiz-btn w-full p-5 bg-white border-2 border-transparent shadow-md rounded-2xl text-lg font-medium text-slate-700 hover:border-blue-400 hover:shadow-lg transition-all flex justify-between items-center group">
                                <span>${opt}</span>
                                <i class="fas fa-chevron-right text-slate-200 group-hover:text-blue-500 transition-colors"></i>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        };

        app.checkQuiz = (btn, idx, correct, sId, qType, cIdx, total) => {
            if (isProcessing) return;
            isProcessing = true;

            const q = questions[currentIdx];
            const isGrammar = qType === 'grammar';
            const isCorrect = isGrammar ? (q.options[idx] === correct) : (idx === correct);

            UI.showFeedback(btn, isCorrect);

            if (!isCorrect) {
                document.querySelectorAll('.quiz-btn').forEach((b, i) => {
                    let isThisCorrect = isGrammar ? (q.options[i] === correct) : (i === correct);
                    if (isThisCorrect) b.classList.add('!bg-green-100', '!border-green-500', '!text-green-800');
                });
            }

            setTimeout(() => {
                if (isCorrect) { // Only advance on correct? Original allows passing. Let's force correct.
                    currentIdx++;
                    if (currentIdx >= total) {
                        Logic.updateProgress(sId, qType === 'grammar' ? 'gram' : 'comp');
                        UI.showSuccess("Excellent !", `${isGrammar ? 'Grammaire' : 'Compréhension'} validée avec succès.`, sId);
                    } else {
                        renderQ();
                    }
                } else {
                    renderQ();
                }
                isProcessing = false;
            }, isCorrect ? 800 : 2000);
        };

        renderQ();
    },

    // --- HELPER COMPONENTS ---
    header(current, total, storyId) {
        return `
            <div class="mb-8 flex justify-between items-center px-2">
                <button onclick="router.navigate('read', {storyId: ${storyId}})" class="text-slate-500 hover:text-slate-800 font-medium transition-colors">
                    <i class="fas fa-times text-xl align-middle mr-1"></i> <span class="align-middle">Quitter</span>
                </button>
                <div class="flex items-center gap-3">
                    <div class="w-full bg-slate-200 rounded-full h-2 w-32">
                        <div class="bg-blue-600 h-2 rounded-full transition-all duration-500" style="width: ${(current / total) * 100}%"></div>
                    </div>
                    <span class="font-bold text-blue-600 text-sm">${current} / ${total}</span>
                </div>
            </div>
        `;
    },

    activityCard(title, subtitle, route, isDone, storyId, icon, color) {
        // Color mapping
        const colors = {
            blue: 'text-blue-500 group-hover:text-blue-600',
            orange: 'text-orange-500 group-hover:text-orange-600',
            purple: 'text-purple-500 group-hover:text-purple-600',
            green: 'text-green-500' // for done state
        };

        return `
            <button onclick="router.navigate('${route}', {storyId: ${storyId}})" 
                    class="group relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center border-[3px] ${isDone ? 'border-green-100' : 'border-transparent hover:border-blue-50'}">
                
                ${isDone ? '<div class="absolute top-4 right-4 text-green-500"><i class="fas fa-check-circle text-xl"></i></div>' : ''}
                
                <div class="w-16 h-16 rounded-2xl ${isDone ? 'bg-green-50' : 'bg-slate-50 group-hover:bg-blue-50'} flex items-center justify-center mb-4 transition-colors">
                    <i class="fas ${icon} ${isDone ? colors.green : colors[color]} text-2xl transition-colors"></i>
                </div>
                
                <span class="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors">${title}</span>
                <span class="text-sm font-medium ${isDone ? 'text-green-600' : 'text-slate-400'} mt-1 uppercase tracking-wide">
                    ${isDone ? 'Terminé' : subtitle}
                </span>
            </button>
        `;
    },

    badge(isDone, name) {
        return `
            <span class="w-2.5 h-2.5 rounded-full ${isDone ? 'bg-green-500 shadow-sm shadow-green-300' : 'bg-slate-200'}" title="${name}"></span>
        `;
    },

    getGradient(tailwindBg) {
        // Map simple bg colors to gradients
        const map = {
            'bg-green-500': 'from-green-400 to-emerald-600',
            'bg-blue-500': 'from-blue-400 to-indigo-600',
            'bg-purple-500': 'from-purple-400 to-violet-600'
        };
        return map[tailwindBg] || 'from-slate-400 to-slate-600';
    }
};

// --- UI UTILITIES ---
const UI = {
    toggleTranslation() {
        const el = document.getElementById('translation');
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    },

    showFeedback(btn, isCorrect) {
        // Reset base classes
        btn.className = btn.className.replace(/border-\w+-\d+/g, '').replace(/bg-\w+-\d+/g, '').replace(/text-\w+-\d+/g, '');
        // Add specific feedback
        if (isCorrect) {
            btn.classList.add('!bg-green-500', '!border-green-600', '!text-white', 'scale-105', 'shadow-lg', 'shadow-green-200');
            btn.innerHTML += ' <i class="fas fa-check ml-2"></i>';
        } else {
            btn.classList.add('!bg-red-500', '!border-red-600', '!text-white', 'shake');
            btn.innerHTML += ' <i class="fas fa-times ml-2"></i>';
        }
    },

    showModal(content) {
        const modal = document.getElementById('modal-container');
        const contentDiv = document.getElementById('modal-content');
        contentDiv.innerHTML = content;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    },

    closeModal() {
        const modal = document.getElementById('modal-container');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    },

    showSuccess(title, msg, sId) {
        this.showModal(`
            <div class="p-10 text-center">
                <div class="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <i class="fas fa-check text-4xl"></i>
                </div>
                <h2 class="text-3xl font-extrabold text-slate-900 mb-2">${title}</h2>
                <p class="text-slate-600 mb-8 text-lg">${msg}</p>
                <button onclick="UI.closeModal(); router.navigate('read', {storyId: ${sId}})" 
                        class="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 hover:scale-[1.02] transition-all text-lg shadow-xl shadow-slate-200">
                    Continuer
                </button>
            </div>
        `);
    },

    showHelp(fr, ar) {
        this.showModal(`
            <div class="p-8">
                <div class="flex items-center gap-3 mb-6">
                    <div class="p-3 bg-yellow-100 text-yellow-600 rounded-xl"><i class="fas fa-lightbulb text-xl"></i></div>
                    <h2 class="text-2xl font-bold text-slate-800">Coup de pouce</h2>
                </div>
                <div class="space-y-4">
                    <div class="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-500">
                        <p class="text-slate-700 font-medium text-lg leading-relaxed">${fr}</p>
                    </div>
                    <div class="p-6 bg-slate-50 rounded-2xl border-r-4 border-purple-500 text-right" dir="rtl">
                        <p class="text-slate-700 font-medium text-lg leading-relaxed font-arabic">${ar}</p>
                    </div>
                </div>
                <button onclick="UI.closeModal()" class="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors">
                    J'ai compris !
                </button>
            </div>
        `);
    }
};

// Global App Object
const app = {
    checkVocab: null,
    checkQuiz: null
};

// Start
window.addEventListener('load', initApp);
