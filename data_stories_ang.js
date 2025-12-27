const INITIAL_DATA = {
    levels: [
        { id: 1, title_en: 'Implementation Basics', title_fr: 'Bases de l’implémentation', icon: 'fa-rocket', color: 'bg-blue-500' },
        { id: 2, title_en: 'System & Configuration', title_fr: 'Système et Configuration', icon: 'fa-cogs', color: 'bg-purple-500' },
        { id: 3, title_en: 'Extensions & Integration', title_fr: 'Extensions et Intégration', icon: 'fa-plug', color: 'bg-green-500' }
    ],
    stories: [
        {
            id: 1,
            level_id: 1,
            title_en: "1-Understanding ERP Scope",
            title_fr: "1-Comprendre le périmètre de l'ERP",
            text_en: "An organization needs to choose the right scope for its business. Whether it is product-centric for manufacturing or service-centric for plumbing, SAP S/4HANA Cloud provides pre-defined Best Practices. The project team must identify which lines of business (LoB) are required.",
            text_fr: "Une organisation doit choisir le bon périmètre pour son activité. Qu'il s'agisse d'une approche centrée sur le produit pour la fabrication ou centrée sur le service pour la plomberie, SAP S/4HANA Cloud fournit des meilleures pratiques prédéfinies. L'équipe projet doit identifier les lignes de métier (LoB) nécessaires.",
            video_url: "https://www.youtube.com/watch?v=X18JGqYaT8g",
            vocabulary: [
                { en: "Scope", fr: "Périmètre / Étendue" },
                { en: "Product-centric", fr: "Centré sur le produit" },
                { en: "Service-centric", fr: "Centré sur le service" },
                { en: "Lines of Business (LoB)", fr: "Lignes de métier / Domaines fonctionnels" },
                { en: "Manufacturing", fr: "Fabrication / Production" },
                { en: "Sourcing and Procurement", fr: "Achats et Approvisionnement" }
            ],
            // Intégration des questions 1, 2, 3, 5, 6, 7
            comprehension: [
                {
                    q: "An organization designs and builds automobiles. What scope do they require?",
                    options: ["Finance-led administrative ERP", "Product-centric industries", "Service-centric industries"],
                    correct: [0, 1], // A and B
                    type: "multiple",
                    explanation: "Pour une entreprise automobile, le périmètre 'Product-centric' est essentiel pour la gestion de la production, avec le 'Finance-led' comme base."
                },
                {
                    q: "Which line of business includes scheduling and running production?",
                    options: ["Asset Management", "Manufacturing", "Supply Chain"],
                    correct: 1,
                    type: "single",
                    explanation: "Le domaine 'Manufacturing' est responsable de la planification et de l'exécution des processus de production."
                }
            ],
            grammar: [
                {
                    text: "An organization ..... automobiles.",
                    missing: "builds",
                    options: ["build", "builds", "building"],
                    rule_en: "The present simple for a third person singular (An organization) ends with -s.",
                    rule_fr: "Le présent simple pour une troisième personne du singulier se termine par -s."
                },
                {
                    text: "Which lines of business ..... included?",
                    missing: "are",
                    options: ["is", "are", "am"],
                    rule_en: "We use 'are' because 'lines of business' is plural.",
                    rule_fr: "On utilise 'are' car 'lines of business' est au pluriel."
                }
            ]
        },
        {
            id: 2,
            level_id: 1,
            title_en: "2-The Fit-to-Standard Process",
            title_fr: "2-Le processus Fit-to-Standard",
            text_en: "During the Explore phase, experts demonstrate business processes in the Starter System. The goal is to avoid heavy customization. The Customer Executive Sponsors build the business case, while Project Managers set up the project in SAP Cloud ALM.",
            text_fr: "Pendant la phase Explore, les experts démontrent les processus métier dans le système Starter. L'objectif est d'éviter les personnalisations lourdes. Les sponsors exécutifs du client construisent le dossier commercial, tandis que les chefs de projet configurent le projet dans SAP Cloud ALM.",
            video_url: "https://www.youtube.com/watch?v=X18JGqYaT8g",
            vocabulary: [
                { en: "Requirements", fr: "Exigences / Besoins" },
                { en: "Workshops", fr: "Ateliers" },
                { en: "Executive Sponsor", fr: "Sponsor exécutif" },
                { en: "Starter System", fr: "Système de démarrage (démo)" },
                { en: "Customization", fr: "Personnalisation / Spécifique" }
            ],
            // Intégration des questions 8, 9, 10, 12, 26, 31, 32
            comprehension: [
                {
                    q: "In which workshop are business processes demonstrated in the Starter System?",
                    options: ["Design workshops", "Fit-to-Standard Analysis workshops", "Testing workshops"],
                    correct: 1,
                    type: "single",
                    explanation: "L'objectif principal des ateliers 'Fit-to-Standard' est de démontrer les standards dans le système Starter."
                },
                {
                    q: "Who builds the business case to purchase SAP S/4HANA Cloud?",
                    options: ["Customer IT Contact", "Customer Executive Sponsors", "Partner Project Team"],
                    correct: 1,
                    type: "single",
                    explanation: "Les sponsors exécutifs sont responsables de la justification stratégique et financière (Business Case)."
                }
            ],
            grammar: [
                {
                    text: "Who ..... responsible for setting up the project?",
                    missing: "is",
                    options: ["is", "are", "be"],
                    rule_en: "We use 'is' with the interrogative pronoun 'Who' when asking about a singular responsibility.",
                    rule_fr: "On utilise 'is' avec le pronom interrogatif 'Who' pour une question portant sur un sujet singulier."
                }
            ]
        },
        {
            id: 3,
            level_id: 2,
            title_en: "3-Landscape and Upgrades",
            title_fr: "3-Environnements et Mises à jour",
            text_en: "SAP S/4HANA Cloud Public Edition follows a strict upgrade calendar. Major upgrades are released in February and August. The Test System is always upgraded first to allow regression testing before the Production System goes live.",
            text_fr: "SAP S/4HANA Cloud Public Edition suit un calendrier de mise à jour strict. Les mises à jour majeures sortent en février et août. Le système de Test est toujours mis à jour en premier pour permettre des tests de régression avant la mise en production.",
           video_url: "https://www.youtube.com/watch?v=X18JGqYaT8g",
            vocabulary: [
                { en: "Upgrade", fr: "Mise à jour / Montée de version" },
                { en: "Landscape", fr: "Paysage système" },
                { en: "Tenant", fr: "Client / Environnement" },
                { en: "Release", fr: "Version / Sortie" },
                { en: "Regression Testing", fr: "Tests de régression" }
            ],
            // Intégration des questions 11, 14, 15, 17, 21
            comprehension: [
                {
                    q: "In which months are upgrades released for Public Edition?",
                    options: ["February and May", "February and August", "August and November"],
                    correct: 1,
                    type: "single",
                    explanation: "Les versions majeures sortent en Février (ex: 2402) et Août (ex: 2408)."
                },
                {
                    q: "Which system is upgraded first?",
                    options: ["Starter System", "Test System", "Production System"],
                    correct: 1,
                    type: "single",
                    explanation: "Le système de Test est mis à jour environ 2 semaines avant la Production pour sécuriser le déploiement."
                }
            ],
            grammar: [
                {
                    text: "The system is ..... in February.",
                    missing: "upgraded",
                    options: ["upgrade", "upgraded", "upgrading"],
                    rule_en: "Passive voice: 'is' + past participle (upgraded).",
                    rule_fr: "Voix passive : 'is' + participe passé (upgraded)."
                }
            ]
        },
        {
    id: 4,
    level_id: 1,
    title_en: "4-The Power of Self-Discipline",
    title_fr: "4-La puissance de l’autodiscipline",
    text_en: "Self-discipline is the key to success in life. It helps you stay focused, build good habits, and achieve your goals. When you control your actions and choices, you become stronger every day. Start small, stay consistent, and watch your dreams turn into reality.",
    text_fr: "L’autodiscipline est la clé du succès dans la vie. Elle vous aide à rester concentré, à construire de bonnes habitudes et à atteindre vos objectifs. Lorsque vous contrôlez vos actions et vos choix, vous devenez plus fort chaque jour. Commencez petit, soyez constant et regardez vos rêves devenir réalité.",
    video_url: "https://www.youtube.com/watch?v=X18JGqYaT8g",
    vocabulary: [
        { en: "Self-discipline", fr: "Autodiscipline" },
        { en: "Success", fr: "Succès" },
        { en: "Focused", fr: "Concentré" },
        { en: "Habits", fr: "Habitudes" },
        { en: "Goals", fr: "Objectifs" },
        { en: "Choices", fr: "Choix" },
        { en: "Consistent", fr: "Constant / Régulier" },
        { en: "Dreams", fr: "Rêves" },
        { en: "Reality", fr: "Réalité" }
    ],
    comprehension: [
        {
            q: "What is the key to success according to the text?",
            options: ["Talent", "Luck", "Self-discipline"],
            correct: 2,
            type: "single",
            explanation: "The text clearly says: 'Self-discipline is the key to success in life.'"
        },
        {
            q: "What does self-discipline help you do?",
            options: [
                "Stay focused and build good habits",
                "Become rich quickly",
                "Avoid making choices"
            ],
            correct: 0,
            type: "single",
            explanation: "Self-discipline helps you stay focused, build good habits, and achieve goals."
        },
        {
            q: "What happens when you control your actions and choices?",
            options: [
                "You become weaker",
                "You become stronger every day",
                "Nothing changes"
            ],
            correct: 1,
            type: "single",
            explanation: "Controlling actions and choices makes you stronger every day."
        }
    ],
    grammar: [
        {
            text: "Self-discipline is the key to ..... in life.",
            missing: "success",
            options: ["successful", "success", "succeed"],
            rule_en: "'Success' is a noun used after 'key to'.",
            rule_fr: "'Success' est un nom utilisé après l’expression 'key to'."
        },
        {
            text: "It helps you ..... focused.",
            missing: "stay",
            options: ["staying", "stays", "stay"],
            rule_en: "After 'help + object', we use the base form of the verb.",
            rule_fr: "Après 'help + complément', on utilise la base verbale."
        },
        {
            text: "When you control your actions, you ..... stronger.",
            missing: "become",
            options: ["becomes", "becoming", "become"],
            rule_en: "With 'you', the verb is used without 's'.",
            rule_fr: "Avec 'you', le verbe ne prend pas de 's'."
        }
    ]
}

    ]
};