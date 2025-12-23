
const INITIAL_DATA = {
            levels: [
                { id: 1, title_fr: 'Débutant', title_ar: 'مبتدئ', icon: 'fa-seedling', color: 'bg-green-500' },
                { id: 2, title_fr: 'Intermédiaire', title_ar: 'متوسط', icon: 'fa-tree', color: 'bg-blue-500' },
                { id: 3, title_fr: 'Avancé', title_ar: 'متقدم', icon: 'fa-mountain', color: 'bg-purple-500' }
            ],
            stories: [
                {
                    id: 1,
                    level_id: 1,
                    title_fr: "Le petit déjeuner de Sarah",
                    title_ar: "فطور سارة",
                    text_fr: "Le matin, Sarah mange une pomme rouge. Elle boit un jus d'orange frais avec son frère. Ils sont très heureux avant d'aller à l'école.",
                    text_ar: "في الصباح، سارة تأكل تفاحة حمراء. تشرب عصير برتقال طازج مع أخيها. هما سعيدان جداً قبل الذهاب إلى المدرسة.",
                    vocabulary: [
                        { fr: "Pomme", ar: "تفاحة" },
                        { fr: "Matin", ar: "صباح" },
                        { fr: "Heureux", ar: "سعيد" },
                        { fr: "École", ar: "مدرسة" },
                        { fr: "manger", ar: "أكل" },
                        { fr: "boire", ar: "شرب" },
                        { fr: "frère", ar: "أخ" },
                        { fr: "jus d'orange", ar: "عصير برتقال" },
                        { fr: "rouge", ar: "أحمر" },
                        { fr: "frais", ar: "طازج" },
                        { fr: "avec", ar: "مع" },
                        { fr: "avant", ar: "قبل" },
                        { fr: "aller", ar: "ذهب" }
                    ],
                    comprehension: [
                        { q: "Que mange Sarah ?", options: ["Une poire", "Une pomme", "Un pain"], correct: 1 },
                        { q: "Avec qui est-elle ?", options: ["Son père", "Son frère", "Sa sœur"], correct: 1 }
                    ],
                    grammar: [
                        { 
                            text: "..... matin, Sarah mange une pomme.", 
                            missing: "Le", 
                            options: ["Le", "La", "Les"], 
                            rule_fr: "L'article défini 'Le' est utilisé devant un nom masculin singulier (Matin).",
                            rule_ar: "أداة التعريف 'Le' تستخدم قبل الاسم المذكر المفرد (Matin)."
                        },
                        { 
                            text: "Sarah ..... une pomme rouge.", 
                            missing: "mange", 
                            options: ["mange", "manges", "mangent"], 
                            rule_fr: "Le verbe 'manger' au présent avec 'Elle' se termine par -e.",
                            rule_ar: "فعل 'manger' في الحاضر مع الضمير 'Elle' ينتهي بـ -e."
                        },
                        { 
                            text: "Sarah mange ..... pomme rouge.", 
                            missing: "une", 
                            options: ["un", "une", "des"], 
                            rule_fr: "L'article indéfini 'une' est utilisé devant un nom féminin (Pomme).",
                            rule_ar: "أداة التنكير 'une' تستخدم قبل الاسم المؤنث (Pomme)."
                        },
                        { 
                            text: "..... boit un jus d'orange.", 
                            missing: "Elle", 
                            options: ["Il", "Elle", "Ils"], 
                            rule_fr: "On utilise 'Elle' pour remplacer un sujet féminin (Sarah).",
                            rule_ar: "نستخدم 'Elle' للتعويض عن فاعل مؤنث (سارة)."
                        },
                        { 
                            text: "Elle boit ..... jus d'orange.", 
                            missing: "un", 
                            options: ["un", "une", "le"], 
                            rule_fr: "'Un' est l'article indéfini masculin singulier (Jus).",
                            rule_ar: "'Un' هي أداة التنكير للمذكر المفرد (عصير)."
                        },
                        { 
                            text: "Elle boit un jus avec ..... frère.", 
                            missing: "son", 
                            options: ["mon", "son", "sa"], 
                            rule_fr: "'Son' est l'adjectif possessif pour 'son frère' (masculin).",
                            rule_ar: "'Son' هو صفة الملكية لـ 'أخوها' (مذكر)."
                        },
                        { 
                            text: "..... sont très heureux.", 
                            missing: "Ils", 
                            options: ["Il", "Ils", "Elles"], 
                            rule_fr: "'Ils' est le pronom sujet pluriel masculin.",
                            rule_ar: "'Ils' هو ضمير الفاعل للجمع المذكر."
                        },
                        { 
                            text: "Ils ..... très heureux.", 
                            missing: "sont", 
                            options: ["est", "êtes", "sont"], 
                            rule_fr: "Conjugaison du verbe 'Être' : Ils sont.",
                            rule_ar: "تصريف فعل الكينونة 'Être' مع الجمع: Ils sont."
                        },
                        { 
                            text: "Ils sont très .....", 
                            missing: "heureux", 
                            options: ["heureux", "heureuse", "heureuses"], 
                            rule_fr: "L'adjectif s'accorde avec le sujet 'Ils' (masculin pluriel). 'Heureux' ne change pas au pluriel.",
                            rule_ar: "الصفة تتبع الموصوف 'Ils' (جمع مذكر). كلمة 'Heureux' لا تتغير في الجمع."
                        },
                        { 
                            text: "Ils vont ..... l'école.", 
                            missing: "à", 
                            options: ["à", "au", "en"], 
                            rule_fr: "On utilise la préposition 'à' devant un lieu avec l'article défini (à l'école).",
                            rule_ar: "نستخدم حرف الجر 'à' قبل المكان مع أداة التعريف (à l'école)."
                        }
                    ]
                },
                {
                        id: 2,
                        level_id: 1,
                        title_fr: "Une journée au jardin",
                        title_ar: "يوم في الحديقة",

                        text_fr: "Aujourd'hui, il fait beau. Thomas va au jardin avec son petit chien. Il voit de grandes fleurs et un grand arbre. Il joue au ballon avec ses amis.",
                        text_ar: "اليوم، الجو جميل. توماس يذهب إلى الحديقة مع كلبه الصغير. يرى زهوراً كبيرة وشجرة كبيرة. يلعب بالكرة مع أصدقائه.",

                        vocabulary: [
                        { fr: "Aujourd'hui", ar: "اليوم" },
                        { fr: "Beau", ar: "جميل" },
                        { fr: "jardin", ar: "حديقة" },
                        { fr: "Chien", ar: "كلب" },
                        { fr: "Petit", ar: "صغير" },
                        { fr: "Voir", ar: "رأى" },
                        { fr: "Fleurs", ar: "زهور" },
                        { fr: "Arbre", ar: "شجرة" },
                        { fr: "Jouer", ar: "لعب" },
                        { fr: "Ballon", ar: "كرة" },
                        { fr: "Amis", ar: "أصدقاء" },
                        { fr: "Grand", ar: "كبير" }
                        ],

                        comprehension: [
                        {
                            q: "Avec qui Thomas va-t-il au jardin ?",options: ["Son chat", "Son chien", "Son frère"],
                            correct: 1
                        },
                        {
                            q: "Que voit-il dans le jardin ?",
                            options: ["Des voitures", "Des fleurs", "Des maisons"],
                            correct: 1
                        }
                        ],

                        grammar: [
                        {
                            text: "Aujourd'hui, ..... fait beau.",
                            missing: "il",
                            options: ["il", "elle", "ils"],
                            rule_fr: "On utilise le pronom impersonnel 'il' pour parler de la météo.",
                            rule_ar: "نستخدم الضمير غير الشخصي 'il' للتحدث عن الطقس."
                        },
                        {
                            text: "Thomas ..... au jardin.",
                            missing: "va",
                            options: ["vais", "vas", "va"],
                            rule_fr: "Le verbe 'aller' à la 3ème personne du singulier est 'va'.",
                            rule_ar: "فعل 'aller' مع المفرد الغائب يكون 'va'."
                        },
                        {
                            text: "Il va ..... jardin.",
                            missing: "au",
                            options: ["à la", "au", "aux"],
                            rule_fr: "'Au' = à + le devant un nom masculin.",
                            rule_ar: "'Au' هو دمج 'à + le' مع الاسم المذكر."
                        },
                        {
                            text: "Il va avec ..... petit chien.",
                            missing: "son",
                            options: ["mon", "ton", "son"],
                            rule_fr: "'Son' est l'adjectif possessif à la 3ème personne.",
                            rule_ar: "'Son' صفة ملكية للشخص الثالث."
                        },
                        {
                            text: "Thomas a un ..... chien.",
                            missing: "petit",
                            options: ["petit", "petite", "petits"],
                            rule_fr: "Accord avec le masculin singulier.",
                            rule_ar: "تطابق مع المذكر المفرد."
                        },
                        {
                            text: "Il voit ..... grandes fleurs.",
                            missing: "de",
                            options: ["des", "de", "les"],
                            rule_fr: "'Des' devient 'de' devant un adjectif.",
                            rule_ar: "'Des' تتحول إلى 'de' قبل الصفة."
                        },
                        {
                            text: "Il voit un grand .....",
                            missing: "arbre",
                            options: ["arbre", "arbres", "arbrisseau"],
                            rule_fr: "'Un' impose le singulier.",
                            rule_ar: "'Un' تدل على المفرد."
                        },
                        {
                            text: "Il ..... au ballon.",
                            missing: "joue",
                            options: ["joue", "joues", "jouent"],
                            rule_fr: "Avec 'il', le verbe se termine par -e.",
                            rule_ar: "مع 'Il' ينتهي الفعل بـ -e."
                        },
                        {
                            text: "Il joue avec ..... amis.",
                            missing: "ses",
                            options: ["son", "sa", "ses"],
                            rule_fr: "'Ses' est le possessif pluriel.",
                            rule_ar: "'Ses' صفة ملكية للجمع."
                        },
                        {
                            text: "Les fleurs sont .....",
                            missing: "grandes",
                            options: ["grand", "grande", "grandes"],
                            rule_fr: "Féminin pluriel.",
                            rule_ar: "مؤنث جمع."
                        }
                        ]
                    },
             ]
        };
