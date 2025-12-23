Tu es un expert en développement web full-stack et en conception d’applications éducatives.

Je veux créer une application web responsive, parfaitement adaptée au mobile et desktop, destinée à l’apprentissage du français pour des arabophones.

1️⃣ Interface Admin

Créer une interface Admin qui permet de :

Créer, modifier et supprimer des niveaux (ex : Débutant, Intermédiaire, Avancé).

Pour chaque niveau, créer plusieurs histoires.

Chaque histoire contient :

Un texte en français

Sa traduction en arabe, invisible par défaut, affichée uniquement quand l’utilisateur clique sur un bouton « Traduire » (la traduction apparaît sous le texte français).

2️⃣ Vocabulaire interactif

Pour chaque histoire, permettre à l’admin d’ajouter une liste de vocabulaire :

Mot en français

Traduction en arabe

Côté utilisateur :

Exercice Français → Arabe : afficher un mot français, l’utilisateur choisit la bonne traduction arabe depuis une liste.

Exercice Arabe → Français : afficher le mot arabe, l’utilisateur choisit l’équivalent français.

3️⃣ Questions de compréhension (QCM)

Ajouter des questions de compréhension sous forme de QCM liées à chaque histoire.

Chaque question contient :

Énoncé

Plusieurs choix

Une seule bonne réponse

4️⃣ Règles de grammaire & conjugaison

Extraire des phrases réelles de l’histoire pour créer des QCM grammaticaux.

Exemple de phrase originale dans l’histoire :

Nous avons fini nos devoirs hier.

Générer des QCM comme :

Nous ….. nos devoirs hier (finir)

Nous avons fini ….. devoirs hier.

Chaque QCM représente une règle précise (conjugaison, accord, temps verbal…).

L’admin doit pouvoir ajouter manuellement la règle explicative :

En français

En arabe

Ajouter un bouton « Aide » côté utilisateur permettant d’afficher la règle en français + arabe.

5️⃣ Interface Utilisateur

Créer une interface User qui permet de :

Parcourir les niveaux

Choisir une histoire

Lire l’histoire avec option traduction

S’entraîner sur :

Vocabulaire

QCM de compréhension

QCM de grammaire avec bouton Aide

6️⃣ Données

Toutes les données doivent être stockées et manipulées dans des fichiers JSON

Structure claire et extensible (niveaux → histoires → vocabulaire → QCM → règles).

7️⃣ Contraintes techniques

Application responsive (mobile-first)

Interface claire, pédagogique et intuitive

Séparation claire entre Admin et User

👉 Génère :

L’architecture du projet

La structure JSON

Les écrans principaux (Admin & User)

Les bonnes pratiques UX/UI pour l’apprentissage des langues