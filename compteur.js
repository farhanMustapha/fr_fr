/**
 * Fichier : compteur.js
 * Rôle : Compte le nombre de mots de vocabulaire par histoire et affiche les statistiques.
 */

function afficherStatistiquesVocabulaire() {
    // On vérifie si l'objet 'state' existe (défini dans votre fichier principal)
    if (typeof state === 'undefined' || !state.stories) {
        console.error("Erreur : Les données SAP/Français ne sont pas accessibles.");
        return;
    }

    console.log("--- STATISTIQUES DU VOCABULAIRE PAR STORY ---");
    
    let totalMots = 0;

    state.stories.forEach((story) => {
        // On récupère la longueur du tableau vocabulary
        const nombreDeMots = story.vocabulary ? story.vocabulary.length : 0;
        totalMots += nombreDeMots;

        // Affichage clair du résultat par histoire
        console.log(`Story ID ${story.id} : [${story.title_fr}] -> ${nombreDeMots} mots enregistrés.`);
    });

    console.log("-------------------------------------------");
    console.log(`TOTAL GÉNÉRAL : ${totalMots} mots de vocabulaire.`);
    console.log("-------------------------------------------");
}

// Exécuter le comptage une fois que tout est chargé
// On peut aussi l'appeler manuellement dans la console en tapant : afficherStatistiquesVocabulaire()
window.addEventListener('load', () => {
    // Un petit délai pour s'assurer que state est bien initialisé par le script principal
    setTimeout(afficherStatistiquesVocabulaire, 500);
});