
const INITIAL_DATA = {
            levels: [
                { id: 1, title_fr: 'Débutant', title_ar: 'مبتدئ', icon: 'fa-seedling', color: 'bg-green-500' },
                { id: 2, title_fr: 'Intermédiaire', title_ar: 'متوسط', icon: 'fa-tree', color: 'bg-blue-500' },
                { id: 3, title_fr: 'Avancé', title_ar: 'متقدم', icon: 'fa-mountain', color: 'bg-purple-500' }
            ],
            stories: [

                               {
  id: 13,
  level_id: 3,
  title_fr: "13-Les temps du passé, du présent et du futur",
  title_ar: "الأزمنة: الماضي، الحاضر والمستقبل",

  text_fr: "Aujourd'hui, je vais au travail à pied car il fait beau. Hier, j'allais en voiture, mais il y avait trop de circulation. La semaine dernière, je suis allé voir un film avec des amis. Demain, j'irai en ville pour faire des courses. Si j'étais allé plus tôt, j'aurais évité les embouteillages. À l'avenir, j'irai plus souvent à pied pour éviter le stress de la circulation.",
  text_ar: "اليوم أذهب إلى العمل مشيًا لأن الطقس جميل. أمس، كنت أذهب بالسيارة، لكن كان هناك ازدحام كبير. الأسبوع الماضي، ذهبت لمشاهدة فيلم مع الأصدقاء. غدًا، سأذهب إلى المدينة للقيام بالتسوق. لو ذهبتُ أبكر، لكنتُ تجنبتُ الازدحام. في المستقبل، سأذهب أكثر مشيًا لتفادي ضغط الازدحام.",

  vocabulary: [
    { fr: "Aujourd'hui", ar: "اليوم" },
    { fr: "Hier", ar: "أمس" },
    { fr: "Demain", ar: "غدًا" },
    { fr: "La semaine dernière", ar: "الأسبوع الماضي" },
    { fr: "À l'avenir", ar: "في المستقبل" },
    { fr: "Circulation", ar: "حركة المرور" },
    { fr: "Embouteillages", ar: "الازدحام" },
    { fr: "Éviter", ar: "يتجنب" },
    { fr: "Stress", ar: "الضغط / التوتر" },
    { fr: "Faire des courses", ar: "التسوق" }
  ],

  comprehension: [
    {
      q: "Comment la personne va-t-elle au travail aujourd'hui ?",
      options: [
        "En voiture",
        "À pied",
        "En bus"
      ],
      correct: 1
    },
    {
      q: "Pourquoi allait-elle en voiture hier ?",
      options: [
        "Parce qu'il faisait beau",
        "Parce qu'il n'y avait pas de circulation",
        "C'était son habitude malgré la circulation"
      ],
      correct: 2
    },
    {
      q: "Que fera-t-elle demain ?",
      options: [
        "Regarder un film",
        "Aller au travail",
        "Faire des courses en ville"
      ],
      correct: 2
    }
  ],

  grammar: [
    {
      text: "Si j\'étais allé plus tôt, j'..... évité les embouteillages.",
      missing: "aurais",
      options: ["suis", "aurais", "avais"],

      rule_fr:
        "Cette phrase utilise le conditionnel passé, employé pour exprimer un regret ou une situation irréelle dans le passé.\n\n"
        + "🔹 Structure complète :\n"
        + "Si + plus-que-parfait → conditionnel passé\n\n"
        + "Dans l'exemple :\n"
        + "- « si j'étais allé » : plus-que-parfait\n"
        + "  → auxiliaire « être » à l'imparfait (étais) + participe passé (allé)\n"
        + "- « j'aurais évité » : conditionnel passé\n"
        + "  → auxiliaire « avoir » au conditionnel présent (aurais) + participe passé (évité)\n\n"
        + "👉 Pourquoi on utilise « étais allé » ?\n"
        + "Parce qu'on parle d'une action qui ne s'est PAS produite dans le passé. On imagine une autre réalité.\n\n"
        + "⚠️ Erreurs fréquentes :\n"
        + "- ❌ Si j'aurais été allé...\n"
        + "- ❌ Si je suis allé plus tôt...\n"
        + "Après « si », on n'utilise JAMAIS le conditionnel.\n\n"
        + "🔹 Autres exemples utiles :\n"
        + "- Si j'avais étudié, j'aurais réussi l'examen.\n"
        + "- Si nous étions partis plus tôt, nous aurions évité le retard.",

      rule_ar:
        "هذه الجملة تعبّر عن ندم أو فرضية غير حقيقية في الماضي.\n\n"
        + "🔹 القاعدة العامة:\n"
        + "Si + plus-que-parfait → conditionnel passé\n\n"
        + "في المثال:\n"
        + "- « si j'étais allé » : الماضي الأسبق\n"
        + "  → فعل مساعد في imparfait (étais) + اسم المفعول (allé)\n"
        + "- « j'aurais évité » : الشرط في الماضي\n"
        + "  → فعل مساعد في conditionnel (aurais) + اسم المفعول (évité)\n\n"
        + "👉 لماذا نستعمل « étais allé »؟\n"
        + "لأننا نتحدث عن حدث لم يقع فعلاً، بل نتصوره بطريقة مختلفة.\n\n"
        + "⚠️ أخطاء شائعة:\n"
        + "- ❌ Si j'aurais...\n"
        + "- ❌ Si je suis allé...\n"
        + "ممنوع استعمال conditionnel بعد « si ».\n\n"
        + "🔹 أمثلة إضافية:\n"
        + "- لو درستُ جيدًا، لكنتُ نجحتُ.\n"
        + "- لو خرجنا أبكر، لكنا تجنبنا التأخير."
    }
  ]
},
                {
                    id: 1,
                    level_id: 1,
                    title_fr: '1-Ma Famille',
                    title_ar: 'عائلتي',
                    text_fr: 'Bonjour, je m\'appelle Lucas. J\'aime ma famille. Mon père est grand et ma mère est gentille.',
                    text_ar: 'مرحباً، اسمي لوكاس. أنا أحب عائلتي. والدي طويل ووالدتي لطيفة.',
                    vocabulary: [
                        { fr: 'Bonjour', ar: 'مرحباً' },
                        { fr: 'Famille', ar: 'عائلة' },
                        { fr: 'Père', ar: 'أب' },
                        { fr: 'Mère', ar: 'أم' },
                        { fr: 'Grand', ar: 'ضخم' },
                        { fr: 'long', ar: 'طويل' },
                        { fr: 'longue', ar: 'طويلة' },
                        { fr: 'Gentille', ar: 'لطيفة' },
                        { fr: 'Gentil', ar: 'لطيف' },
                        { fr: 'Aimer', ar: 'يحب' },
                        { fr: 'S\'appeler', ar: 'يسمى' },
                        { fr: 'Je', ar: 'أنا' },
                        { fr: 'Tu', ar: 'أنت' },
                        { fr: 'Il/Elle', ar: 'هو/هي' },
                        { fr: 'belle', ar: 'جميلة' },
                        { fr: 'Mon', ar: 'لي / الخاص بي' },
                        { fr: 'Est', ar: 'يكون' },
                        { fr: 'mon livre', ar: 'كتابي' },
                        { fr: 'ma maison', ar: 'منزلي' },
                        { fr: 'tu es gentil', ar: 'أنت لطيف' },
                        { fr: 'elle est belle', ar: 'هي جميلة' }
                    ],
                    comprehension: [
                        { q: 'Qui s\'appelle Lucas ?', options: ['Le garçon', 'Le père', 'La mère'], correct: 0 },
                        { q: 'Comment est la mère ?', options: ['Grande', 'Gentille', 'Petite'], correct: 1 },
                        { q: 'Qui est grand ?', options: ['Le père', 'La mère', 'Le frère'], correct: 0 }
                    ],
                    grammar: [
                        { text: 'Je ___ Lucas.', options: ['suis', 'es', 'est'], missing: 'suis', rule_fr: 'Le verbe être au présent.', rule_ar: 'فعل الكينونة في المضارع.' },
                        { text: 'Mon père ___ grand.', options: ['suis', 'es', 'est'], missing: 'est', rule_fr: 'Le verbe être au présent (3ème personne).', rule_ar: 'فعل الكينونة للمفرد الغائب.' },
                        { text: 'Ma mère ___ gentille.', options: ['suis', 'es', 'est'], missing: 'est', rule_fr: 'Le verbe être au présent (3ème personne).', rule_ar: 'فعل الكينونة للمفرد الغائب.' },
                        { text: 'Tu ___ mon ami.', options: ['suis', 'es', 'est'], missing: 'es', rule_fr: 'Le verbe être au présent (2ème personne).', rule_ar: 'فعل الكينونة للمخاطب.' },
                        { text:'j\'aime ___ famille.', options: ['mon', 'ma', 'mes'], missing: 'ma', rule_fr: "L'adjectif possessif pour 'famille' (féminin singulier).", rule_ar: "صفة الملكية لـ 'famille' (مؤنث مفرد)." }
                    ]
                },
                {
                id: 2,
                level_id: 1,
                title_fr: "2-La lecture quotidienne",
                title_ar: "القراءة اليومية",

                text_fr: "La lecture quotidienne améliore le vocabulaire et la concentration. Lire quelques minutes par jour aide à mieux comprendre le monde, développer l’imagination et réduire le stress. Un livre peut devenir un ami fidèle et une source d’inspiration durable pour tous.",
                text_ar: "القراءة اليومية تُحسّن المفردات والتركيز. قراءة بضع دقائق يوميًا تساعد على فهم العالم بشكل أفضل، وتنمية الخيال، وتقليل التوتر. يمكن أن يصبح الكتاب صديقًا وفيًّا ومصدر إلهام دائم للجميع.",

                vocabulary: [
                    { fr: "lecture", ar: "قراءة" },
                    { fr: "nous", ar: "نحن" },
                    { fr: "quotidien", ar: "يومي" },
                    { fr: "vous", ar: "أنتم / أنتن" },
                    { fr: "améliore", ar: "يُحسّن" },
                    { fr: "et", ar: "و" },
                    { fr: "quotidienne", ar: "يومية" },
                    { fr: "vocabulaire", ar: "مفردات" },
                    { fr: "concentration", ar: "تركيز" },
                    { fr: "quelques minutes", ar: "بضع دقائق" },
                    { fr: "comprendre", ar: "يفهم" },
                    { fr: "monde", ar: "العالم" },
                    { fr: "imagination", ar: "الخيال" },
                    { fr: "réduire", ar: "يقلل" },
                    { fr: "stress", ar: "توتر" },
                    { fr: "livre", ar: "كتاب" },
                    { fr: "ami fidèle", ar: "صديق وفيّ" },
                    { fr: "source d’inspiration", ar: "مصدر إلهام" }
                ],

                comprehension: [
                    {
                    q: "Qu’est-ce que la lecture quotidienne améliore ?",
                    options: ["Le sport", "Le vocabulaire et la concentration", "La vitesse"],
                    correct: 1
                    },
                    {
                    q: "Combien de temps faut-il lire par jour ?",
                    options: ["Quelques minutes", "Plusieurs heures", "Une seule fois par mois"],
                    correct: 0
                    },
                    {
                    q: "Que développe la lecture ?",
                    options: ["La fatigue", "L’imagination", "La peur"],
                    correct: 1
                    },
                    {
                    q: "Que peut devenir un livre ?",
                    options: ["Un ennemi", "Un ami fidèle", "Un objet inutile"],
                    correct: 1
                    }
                ],
                grammar: [
                    {text: "La lecture ..... améliore le vocabulaire.", missing: "quotidienne", options: ["quotidien", "quotidienne", "quotidiens"], rule_fr: "L'adjectif 'quotidienne' s'accorde avec 'lecture' (féminin singulier).", rule_ar: "الصفة 'quotidienne' تتطابق مع 'lecture' (مؤنث مفرد)." },
                    {text: "Lire quelques ..... par jour aide à mieux comprendre.", missing: "minutes", options: ["minute", "minutes", "minuter"], rule_fr: "'Minutes' est au pluriel car il y a plusieurs minutes.", rule_ar: "'Minutes' في الجمع لأنه يوجد عدة دقائق." },
                    {text: "Un livre peut devenir ..... ami fidèle.", missing: "un", options: ["un", "une", "des"], rule_fr: "'Un' est l'article indéfini masculin singulier.", rule_ar: "'Un' هي أداة تنكير للمذكر المفرد." },
                ]
                },
                {
                    id: 3,
                    level_id: 1,
                    title_fr: "3-Le petit déjeuner de Sarah",
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
                        { fr: "aller", ar: "ذهب" },
                        { fr: "Elle/il", ar: "هي/هو" },
                        { fr: "Ils/Elles", ar: "هم/هن" },
                    
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
                        id: 4,
                        level_id: 1,
                        title_fr: "4-Une journée au jardin",
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
                        { fr: "Grand", ar: "كبير" },
                        { fr: "Petite", ar: "صغير" },
                        { fr: "Belle", ar: "جميل" },
                        { fr: "Grande", ar: "كبير" },
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
                    {
                    id: 5,
                    level_id: 1,
                    title_fr: "5-Sarah prépare un gâteau",
                    title_ar: "سارة تحضر كعكة",

                    text_fr: "Aujourd'hui, Sarah doit préparer un gâteau. Pour cela, il faut des œufs. Comme elle n'en a plus, elle va au marché. Ensuite, elle rentre à la maison et elle s'y installe pour cuisiner.",
                    text_ar: "اليوم، يجب على سارة تحضير كعكة. ولذلك، يلزم وجود بيض. بما أنه لم يعد لديها منه، تذهب إلى السوق. بعد ذلك، تعود إلى المنزل وتستقر هناك للطبخ.",

                    vocabulary: [
                        { fr: "Doit", ar: "يجب" },
                        { fr: "Préparer", ar: "تحضير" },
                        { fr: "Gâteau", ar: "كعكة" },
                        { fr: "Il faut", ar: "يجب / يلزم" },
                        { fr: "Oeufs", ar: "بيض" },
                        { fr: "En", ar: "منه (ضمير تعويضي)" },
                        { fr: "Marché", ar: "سوق" },
                        { fr: "Ensuite", ar: "بعد ذلك" },
                        { fr: "Maison", ar: "منزل" },
                        { fr: "Y", ar: "هناك (ضمير تعويضي للمكان)" },
                        { fr: "S'installer", ar: "يستقر / يجلس" },
                        { fr: "Cuisiner", ar: "طبخ" }
                    ],

                    comprehension: [
                        {
                            q: "Que doit faire Sarah ?",
                            options: ["Lire un livre", "Préparer un gâteau", "Dormir"],
                            correct: 1
                        },
                        {
                            q: "Où va-t-elle pour acheter des œufs ?",
                            options: ["Au cinéma", "Au parc", "Au marché"],
                            correct: 2
                        }
                    ],

                    grammar: [
                        {
                            text: "Sarah ..... préparer un gâteau.",
                            missing: "doit",
                            options: ["dois", "doit", "doivent"],
                            rule_fr: "Le verbe 'devoir' à la 3ème personne du singulier est 'doit'.",
                            rule_ar: "فعل 'devoir' مع المفرد الغائب يكون 'doit'."
                        },
                        {
                            text: "Pour cuisiner, il ..... des œufs.",
                            missing: "faut",
                            options: ["faut", "fais", "faut-il"],
                            rule_fr: "'Il faut' est une expression impersonnelle pour exprimer la nécessité.",
                            rule_ar: "'Il faut' تعبير غير شخصي للتعبير عن الضرورة."
                        },
                        {
                            text: "Elle a besoin d'œufs, elle ..... achète.",
                            missing: "en",
                            options: ["le", "la", "en"],
                            rule_fr: "On utilise 'en' pour remplacer une quantité ou un nom précédé de 'de'.",
                            rule_ar: "نستخدم 'en' لتعويض كمية أو اسم مسبوق بـ 'de'."
                        },
                        {
                            text: "Elle va à la maison et elle ..... reste.",
                            missing: "y",
                            options: ["y", "en", "le"],
                            rule_fr: "Le pronom 'y' remplace un lieu (à la maison).",
                            rule_ar: "الضمير 'y' يعوض مكاناً (في المنزل)."
                        },
                        {
                            text: "Tu ..... finir tes devoirs.",
                            missing: "dois",
                            options: ["dois", "doit", "devons"],
                            rule_fr: "Avec 'tu', le verbe devoir se termine par -s.",
                            rule_ar: "مع 'tu'، ينتهي فعل 'devoir' بـ -s."
                        },
                        {
                            text: "Il n'y a plus de lait, j'..... achète.",
                            missing: "en",
                            options: ["y", "en", "les"],
                            rule_fr: "Ici 'en' remplace 'du lait'.",
                            rule_ar: "هنا 'en' تعوض 'du lait'."
                        },
                        {
                            text: "Est-ce que tu vas au marché ? Oui, j'..... vais.",
                            missing: "y",
                            options: ["y", "en", "le"],
                            rule_fr: "'Y' remplace 'au marché'.",
                            rule_ar: "'Y' تعوض 'au marché' (إلى السوق)."
                        },
                        {
                            text: "Il ..... travailler pour réussir.",
                            missing: "faut",
                            options: ["faut", "doit", "va"],
                            rule_fr: "On utilise 'il faut' suivi d'un infinitif.",
                            rule_ar: "نستخدم 'il faut' متبوعاً بمصدر الفعل."
                        },
                        {
                            text: "Nous ..... partir maintenant.",
                            missing: "devons",
                            options: ["dois", "devons", "doivent"],
                            rule_fr: "Conjugaison de devoir avec 'nous'.",
                            rule_ar: "تصريف 'devoir' مع 'nous'."
                        },
                        {
                            text: "Des pommes ? J'..... ai beaucoup.",
                            missing: "en",
                            options: ["les", "en", "y"],
                            rule_fr: "'En' exprime la quantité ici.",
                            rule_ar: "'En' تعبر عن الكمية هنا."
                        }
                    ]


                    },
                    
                    //-------------
                    {
                    id: 6,
                    level_id: 1,
                    title_fr: "6-Le sac de Lina",
                    title_ar: "حقيبة لينا",

                    text_fr: "Lina a un sac bleu. Dans son sac, il y a un livre et un stylo. Elle prend le sac pour aller à l'école.",
                    text_ar: "لينا لديها حقيبة زرقاء. في حقيبتها يوجد كتاب وقلم. تأخذ الحقيبة للذهاب إلى المدرسة.",

                    vocabulary: [
                        { fr: "Sac", ar: "حقيبة" },
                        { fr: "Bleu", ar: "أزرق" },
                        { fr: "Livre", ar: "كتاب" },
                        { fr: "Stylo", ar: "قلم" },
                        { fr: "Prendre", ar: "أخذ" },
                        { fr: "Aller", ar: "ذهب" }
                    ],

                    comprehension: [
                        { q: "De quelle couleur est le sac ?", options: ["Rouge", "Bleu", "Vert"], correct: 1 },
                        { q: "Que contient le sac ?", options: ["Un ballon", "Un livre et un stylo", "Des fruits"], correct: 1 }
                    ],

                    grammar: [
                    {
                        text: "Lina a ..... sac bleu.",
                        missing: "un",
                        options: ["un", "une", "des"],
                        rule_fr: "\"Un\" est l’article indéfini masculin singulier.\n➡️ Sac = nom masculin\n➡️ On utilise \"un\" quand on parle de quelque chose de non précis.\nExemples :\n- un sac\n- un livre\nException : devant une voyelle → \"un\" reste inchangé.",
                        rule_ar: "\"Un\" هي أداة تنكير للمذكر المفرد.\n➡️ sac اسم مذكر\nتُستعمل عندما لا نحدد الشيء.\nأمثلة:\n- un sac\n- un livre"
                    },
                    {
                        text: "..... son sac, il y a un livre.",
                        missing: "Dans",
                        options: ["Dans", "Sur", "Avec"],
                        rule_fr: "\"Dans\" indique l’intérieur d’un objet ou d’un lieu.\nExemples :\n- Dans la maison\n- Dans le sac\n⚠️ Ne pas confondre avec \"sur\" (au-dessus).",
                        rule_ar: "\"Dans\" تعني داخل شيء.\nأمثلة:\n- داخل البيت\n- داخل الحقيبة"
                    }
                    ]
                    },
                    {
                    id: 7,
                    level_id: 2,
                    title_fr: "7-Le week-end de Karim",
                    title_ar: "عطلة كريم",

                    text_fr: "Samedi, Karim est allé au cinéma avec ses amis. Ils ont regardé un film intéressant et ont mangé du pop-corn.",
                    text_ar: "يوم السبت، ذهب كريم إلى السينما مع أصدقائه. شاهدوا فيلماً ممتعاً وأكلوا فشاراً.",
                    vocabulary: [
                        { fr: "Samedi", ar: "يوم السبت" },
                        { fr: "Cinéma", ar: "سينما" },
                        { fr: "Regarder", ar: "شاهد" },
                        { fr: "Film", ar: "فيلم" },
                        { fr: "Intéressant", ar: "ممتع" },
                        { fr: "Pop-corn", ar: "فشار" }
                    ],
                    comprehension: [
                        { q: "Où est allé Karim ?", options: ["Au parc", "Au cinéma", "Au musée"], correct: 1 },
                        { q: "Qu'ont-ils mangé ?", options: ["Des bonbons", "Du pop-corn", "Des fruits"], correct: 1 }
                    ],
                    grammar: [
                        {
                        text: "Karim est ..... au cinéma.",
                        missing: "allé",
                        options: ["aller", "allé", "allée"],
                        rule_fr: "Le passé composé avec \"être\" :\nêtre + participe passé.\n➡️ Aller se conjugue avec \"être\".\nAccord :\n- Karim (masculin singulier) → allé\nExemples :\n- Elle est allée\n- Ils sont allés",
                        rule_ar: "الماضي المركب مع être:\nêtre + اسم المفعول\nالفعل aller يأتي مع être\nويُطابق الفاعل:\n- كريم → allé"
                        }
                    ]
                    },
                    {
                    id: 8,
                    level_id: 3,
                    title_fr: "8-Un projet important",
                    title_ar: "مشروع مهم",

                    text_fr: "Si Marc avait plus de temps, il terminerait son projet plus rapidement, ce qui améliorerait ses résultats.",
                    text_ar: "لو كان لدى مارك وقت أكثر، لأنهِى مشروعه بسرعة أكبر، مما سيحسن نتائجه.",

                    vocabulary: [
                        { fr: "Projet", ar: "مشروع" },
                        { fr: "Terminer", ar: "أنهى" },
                        { fr: "Rapidement", ar: "بسرعة" },
                        { fr: "Améliorer", ar: "حسن" },
                        { fr: "Résultats", ar: "نتائج" },
                        { fr: "Si", ar: "لو / إذا" },
                        { fr: "Plus de", ar: "أكثر من" },
                        { fr: "Temps", ar: "وقت" }
                        ],
                    comprehension: [
                        {
                        q: "Que ferait Marc s'il avait plus de temps ?",    
                        options: [
                            "Il irait en vacances",
                            "Il terminerait son projet",
                            "Il améliorerait ses résultats"
                        ],
                        correct: 1
                    },
                    {
                        q: "Qu'est-ce que Marc aimerait faire s'il avait plus de temps ?",
                        options: [
                            "Il aimerait voyager",
                            "Il aimerait terminer son projet",
                            "Il aimerait améliorer ses résultats"
                        ],
                        correct: 1
                    }
                    ],
                    grammar: [
                    {
                        text: "Si Marc ..... plus de temps, il terminerait le projet.",
                        missing: "avait",
                        options: ["a", "avait", "aurait"],
                        rule_fr: "Structure du conditionnel :\nSi + imparfait → conditionnel présent\nExemples :\n- Si j'avais de l'argent, je voyagerais.\n⚠️ Jamais : si + conditionnel",
                        rule_ar: "قاعدة الشرط:\nSi + imparfait ثم conditionnel\nممنوع استعمال conditionnel بعد si"
                    }
                    ]
                    },
                    {
                    id: 9,
                    level_id: 1,
                    title_fr: "9-Pourquoi Amine dit « je parle »",
                    title_ar: "لماذا يقول أمين « je parle »",
                    text_fr: "Amine apprend le français. Chaque matin, il parle avec ses amis. Il regarde des vidéos et écoute la radio. Un jour, Amine remarque quelque chose. Il dit : je parle, je regarde, j’écoute. Il comprend alors une règle simple : quand on parle de ce qu’on fait maintenant, on utilise le présent. Les verbes comme parler, regarder et écouter finissent par -er. Avec je, on enlève -er et on ajoute -e. Amine pratique tous les jours, et le français devient plus facile.",
                    text_ar: "أمين يتعلم اللغة الفرنسية. كل صباح، يتكلم مع أصدقائه. يشاهد فيديوهات ويستمع إلى الراديو. في يوم من الأيام، لاحظ أمين شيئًا. قال: je parle، je regarde، j’écoute. ففهم قاعدة بسيطة: عندما نتحدث عما نفعله الآن، نستخدم الحاضر. الأفعال مثل parler وregarder وécouter تنتهي بـ -er. مع je نحذف -er ونضيف -e. يتدرّب أمين كل يوم، وتصبح الفرنسية أسهل.",

                    vocabulary: [
                        { fr: "Apprendre", ar: "يتعلم" },
                        { fr: "Parler", ar: "يتكلم" },
                        { fr: "Regarder", ar: "يشاهد" },
                        { fr: "Écouter", ar: "يستمع" },
                        { fr: "Matin", ar: "صباح" },
                        { fr: "Règle", ar: "قاعدة" },
                        { fr: "Présent", ar: "المضارع" },
                        { fr: "Verbe", ar: "فعل" },
                        { fr: "Maintenant", ar: "الآن" },
                        { fr: "Pratiquer", ar: "يتدرّب" },
                        { fr: "Facile", ar: "سهل" },
                        { fr: "Amis", ar: "أصدقاء" },
                        { fr: "Radio", ar: "راديو" },
                        { fr: "Remarque", ar: "لاحظ" },
                        { fr: "Quelque chose", ar: "شيئًا" },
                        { fr: "Alors", ar: "إذاً" },
                        { fr: "Simple", ar: "بسيطة" },
                        { fr: "Tous les jours", ar: "كل يوم" },
                        { fr: "Devient (devenir)", ar: "تصبح" },
                        { fr: "Finissent (finir)", ar: "تنتهي" }
                    ],

                    comprehension: [
                        {
                        q: "Qu’est-ce qu’Amine apprend ?",
                        options: ["L’anglais", "Le français", "L’arabe"],
                        correct: 1
                        },
                        {
                        q: "Quand utilise-t-on le présent ?",
                        options: [
                            "Pour parler du passé",
                            "Pour parler du futur",
                            "Pour parler de maintenant"
                        ],
                        correct: 2
                        }
                    ],

                    grammar: [
                        {
                        text: "Chaque matin, Amine ..... avec ses amis.",
                        missing: "parle",
                        options: ["parle", "parles", "parlent"],
                        rule_fr: "Avec le sujet 'Il', le verbe du 1er groupe au présent se termine par -e.",
                        rule_ar: "مع الضمير 'Il'، فعل المجموعة الأولى في الحاضر ينتهي بـ -e."
                        },
                        {
                        text: "Il ..... des vidéos.",
                        missing: "regarde",
                        options: ["regarde", "regardes", "regardent"],
                        rule_fr: "Le verbe 'regarder' au présent avec 'Il' prend la terminaison -e.",
                        rule_ar: "فعل 'regarder' في الحاضر مع 'Il' يأخذ النهاية -e."
                        },
                        {
                        text: "Il ..... la radio.",
                        missing: "écoute",
                        options: ["écoute", "écoutes", "écoutent"],
                        rule_fr: "Pour les verbes en -er, on enlève -er et on ajoute -e avec 'Il'.",
                        rule_ar: "في الأفعال المنتهية بـ -er نحذف -er ونضيف -e مع 'Il'."
                        },
                        {
                        text: "Je ..... français.",
                        missing: "parle",
                        options: ["parle", "parles", "parlent"],
                        rule_fr: "Avec 'Je', les verbes du 1er groupe au présent se terminent par -e.",
                        rule_ar: "مع 'Je' أفعال المجموعة الأولى في الحاضر تنتهي بـ -e."
                        },
                        {
                        text: "Les verbes ..... par -er.",
                        missing: "finissent",
                        options: ["finis", "finissent", "finissez"],
                        rule_fr: "Avec 'Les verbes' (pluriel), le verbe 'finir' se conjugue 'finissent'.",
                        rule_ar: "مع الجمع 'Les verbes' يُصرف الفعل 'finir' إلى 'finissent'."
                        }
                    ]
                    },
                    {
                        id: 10,
                        level_id: 1,
                        title_fr: "10-Le choix des jouets",
                        title_ar: "اختيار الألعاب",

                        text_fr: "Lucas regarde les ballons. Il aime ceux qui sont rouges. Le vendeur lui montre plusieurs modèles. Lucas préfère ceux-ci car ils brillent. Il laisse ceux-là sur l'étagère.",
                        text_ar: "لوكاس ينظر إلى الكرات. يحب تلك (الكرات) الحمراء. يظهر له البائع نماذج عديدة. يفضل لوكاس هذه (الكرات هنا) لأنها تلمع. ويترك تلك (الكرات هناك) على الرف.",

                        vocabulary: [
                            { fr: "Regarder", ar: "نظر" },
                            { fr: "Ballons", ar: "كرات / بالونات" },
                            { fr: "Ceux", ar: "الذين / تلك (للمذكر الجمع)" },
                            { fr: "Ceux-ci", ar: "هؤلاء / هذه (للقريب)" },
                            { fr: "Ceux-là", ar: "أولئك / تلك (للبعيد)" },
                            { fr: "Vendeur", ar: "بائع" },
                            { fr: "Briller", ar: "لمع" },
                            { fr: "Étagère", ar: "رف" }
                        ],

                        comprehension: [
                            {
                                q: "Quels ballons Lucas aime-t-il ?",
                                options: ["Ceux qui sont bleus", "Ceux qui sont rouges", "Ceux qui sont petits"],
                                correct: 1
                            },
                            {
                                q: "Pourquoi choisit-il ceux-ci ?",
                                options: ["Parce qu'ils brillent", "Parce qu'ils sont moins chers", "Parce qu'ils sont gros"],
                                correct: 0
                            }
                        ],

                        grammar: [
                            {
                                text: "Il n'aime pas tous les ballons, seulement ..... qui sont rouges.",
                                missing: "ceux",
                                options: ["celui", "ceux", "celles"],
                                rule_fr: "'Ceux' remplace un nom masculin pluriel (les ballons) suivi d'un complément.",
                                rule_ar: "نستخدم 'Ceux' لتعويض اسم مذكر جمع (الكرات) متبوع بتكملة."
                            },
                            {
                                text: "Regarde ces deux ballons : je préfère ..... (proche de moi).",
                                missing: "ceux-ci",
                                options: ["ceux-ci", "ceux-là", "celui-ci"],
                                rule_fr: "On utilise '-ci' pour désigner les objets les plus proches.",
                                rule_ar: "نستخدم الكسرة '-ci' للإشارة إلى الأشياء الأقرب للمتحدث."
                            },
                            {
                                text: "Il y a des livres ici, et il y a ..... sur la table là-bas.",
                                missing: "ceux-là",
                                options: ["ceux-ci", "ceux-là", "celui-là"],
                                rule_fr: "On utilise '-là' pour désigner les objets plus éloignés.",
                                rule_ar: "نستخدم '-là' للإشارة إلى الأشياء البعيدة."
                            },
                            {
                                text: "Parmi tous ces gâteaux, je choisis ..... au chocolat.",
                                missing: "ceux",
                                options: ["celui", "ceux", "ce"],
                                rule_fr: "'Ceux' s'utilise devant 'au', 'du' ou 'qui/que'.",
                                rule_ar: "تستخدم 'Ceux' قبل 'au' أو 'du' ou 'qui/que' للجمع المذكر."
                            }
                        ]
                    },
                    {
                    id: 11,
                    level_id: 1,
                    title_fr: "11-Samir et Amina au magasin",
                    title_ar: "سمير وأمينة في المتجر",

                    text_fr: "Samir et Amina vont au magasin. Samir veut acheter une montre. Il regarde le prix et la qualité. Après réflexion, il est sûr de son choix. Amina regarde aussi une montre, mais elle hésite encore. Elle n’est pas sûre et préfère demander l’avis du vendeur.",
                    text_ar: "يذهب سمير وأمينة إلى المتجر. يريد سمير شراء ساعة. ينظر إلى السعر والجودة. بعد التفكير، هو متأكد من اختياره. تنظر أمينة أيضاً إلى ساعة، لكنها ما زالت مترددة. هي غير متأكدة وتفضل أن تسأل البائع.",

                    vocabulary: [
                        { fr: "Magasin", ar: "متجر" },
                        { fr: "Montre", ar: "ساعة" },
                        { fr: "Choix", ar: "اختيار" },
                        { fr: "Sûr", ar: "متأكد (مذكر)" },
                        { fr: "Sûre", ar: "متأكدة (مؤنث)" },
                        { fr: "Hésiter", ar: "يتردد" },
                        { fr: "Vendeur", ar: "بائع" },
                        { fr: "Prix", ar: "سعر" },
                        { fr: "Qualité", ar: "جودة" },
                        { fr: "Réflexion", ar: "تفكير" },
                        { fr: "Avis", ar: "رأي" },
                        { fr: "Acheter", ar: "شراء" },
                        { fr: "Regarder", ar: "ينظر" },
                        { fr: "Préférer", ar: "يفضل" },
                        { fr: "Demander", ar: "يسأل" },
                        { fr: "Encore", ar: "ما زال" },
                        { fr: "Après", ar: "بعد" },
                        { fr : "aussi", ar: "أيضاً" },
                        { fr : "vendre", ar: "باع" },
                        { fr : "vendeuse", ar: "بائعة" },
                        { fr : "vendeur", ar: "بائع" }
                    ],

                    comprehension: [
                        {
                        q: "Où vont Samir et Amina ?",
                        options: ["À l’école", "Au magasin", "À la maison"],
                        correct: 1
                        },
                        {
                        q: "Qu’est-ce que Samir veut acheter ?",
                        options: ["Un téléphone", "Une montre", "Un livre"],
                        correct: 1
                        },
                        {
                        q: "Pourquoi Amina n’est-elle pas sûre ?",
                        options: [
                            "Parce qu’elle hésite encore",
                            "Parce qu’elle n’aime pas la montre",
                            "Parce qu’elle part"
                        ],
                        correct: 0
                        }
                    ],

                    grammar: [
                        {
                        text: "Samir est ..... de son choix.",
                        missing: "sûr",
                        options: ["sûr", "sûre"],
                        rule_fr: "‘Sûr’ s’utilise avec un sujet masculin.",
                        rule_ar: "تُستعمل ‘sûr’ مع المذكر."
                        },
                        {
                        text: "Amina n’est pas ..... .",
                        missing: "sûre",
                        options: ["sûr", "sûre"],
                        rule_fr: "‘Sûre’ est la forme féminine de ‘sûr’.",
                        rule_ar: "‘sûre’ هي الصيغة المؤنثة لـ ‘sûr’."
                        }
                    ]
                    },
                    {
                        id: 9,
                        level_id: 3,
                        title_fr: "9-Une décision importante chez PCM",
                        title_ar: "قرار مهم في شركة PCM",

                        text_fr: "Dans l'entreprise, il faut valider les factures. Hier, il a fallu beaucoup de temps pour finir le rapport. Le comptable dit : 'Il faudra être plus rapide demain'. Pour réussir, il faudrait automatiser le processus avec SAP.",
                        text_ar: "في الشركة، يجب (il faut) تفعيل الفواتير. بالأمس، استغرق الأمر (il a fallu) الكثير من الوقت لإنهاء التقرير. يقول المحاسب: 'سوف يلزم (il faudra) أن نكون أسرع غداً'. للنجاح، قد يلزم (il faudrait) أتمتة العملية باستخدام SAP.",

                        vocabulary: [
                            { fr: "Entreprise", ar: "شركة" },
                            { fr: "Facture", ar: "فاتورة" },
                            { fr: "Comptable", ar: "محاسب" },
                            { fr: "Rapport", ar: "تقرير" },
                            { fr: "Temps", ar: "وقت" },
                            { fr: "Valider", ar: "تفعيل / تصديق" },
                            { fr: "Finir", ar: "إنهاء" },
                            { fr: "Réussir", ar: "نجاح" },
                            { fr: "Rapide", ar: "سريع" },
                            { fr: "Demain", ar: "غداً" },
                            { fr: "Processus", ar: "عملية" },
                            { fr: "Hier", ar: "أمس" },
                            { fr: "Il faut", ar: "يجب (حاضر)" },
                            { fr: "Il a fallu", ar: "وجب (ماضي)" },
                            { fr: "Il faudra", ar: "سوف يجب (مستقبل)" },
                            { fr: "Il faudrait", ar: "ينبغي (شرط)" }
                        ],

                        comprehension: [
                            {
                                q: "Que faut-il faire dans l'entreprise ?",
                                options: ["Acheter des montres", "Valider les factures", "Partir en vacances"],
                                correct: 1
                            },
                            {
                                q: "Quand a-t-il fallu beaucoup de temps ?",
                                options: ["Aujourd'hui", "Demain", "Hier"],
                                correct: 2
                            },
                            {
                                q: "Quelle est la solution proposée ?",
                                options: ["Dormir", "Automatiser avec SAP", "Changer de bureau"],
                                correct: 1
                            }
                        ],

                        grammar: [
                            {
                                text: "Demain, il ..... finir le travail.",
                                missing: "faudra",
                                options: ["fallait", "faudra"],
                                rule_fr: "On utilise le futur 'faudra' pour une obligation à venir.",
                                rule_ar: "نستخدم صيغة المستقبل 'faudra' للالتزام القادم."
                            },
                            {
                                text: "Hier, il ..... payer le fournisseur.",
                                missing: "a fallu",
                                options: ["faut", "a fallu"],
                                rule_fr: "Le passé composé 'a fallu' exprime une obligation terminée.",
                                rule_ar: "يعبر الماضي المركب 'a fallu' عن التزام انتهى."
                            },
                            {
                                text: "Pour améliorer SAP, il ..... configurer les règles.",
                                missing: "faudrait",
                                options: ["faudrait", "faut"],
                                rule_fr: "Le conditionnel 'faudrait' exprime un conseil ou une suggestion.",
                                rule_ar: "يعبر الصيغة الشرطية 'faudrait' عن نصيحة أو اقتراح."
                            }
                        ]
                    },
                    {
                    id: 10,
                    level_id: 1,
                    title_fr: "10-Le petit chat",
                    title_ar: "القط الصغير",
                    text_fr: "Le petit chat joue dans le jardin. Il voit une souris grise. Il court vite pour l'attraper, mais la souris se cache derrière un arbre.",
                    text_ar: "القط الصغير يلعب في الحديقة. يرى فأراً رمادياً. يركض بسرعة للإمساك به، لكن الفأر يختبئ خلف شجرة.",
                    vocabulary: [
                        { fr: "Chat", ar: "قط" },
                        { fr: "Jardin", ar: "حديقة" },
                        { fr: "Souris", ar: "فأر" },
                        { fr: "Arbre", ar: "شجرة" }
                    ],
                    comprehension: [
                        { q: "Où joue le chat ?", options: ["Dans la maison", "Dans le jardin", "Sur le toit"], correct: 1 },
                        { q: "De quelle couleur est la souris ?", options: ["Noire", "Blanche", "Grise"], correct: 2 }
                    ],
                    grammar: [
                        { text: "Le petit chat ___ dans le jardin.", missing: "joue", options: ["joue", "jouent", "jouer"], rule_fr: "Le verbe s'accorde avec le sujet 'Le petit chat' (3ème personne du singulier).", rule_ar: "الفعل يتبع الفاعل 'القط الصغير' (المفرد الغائب)." }
                    ]
                },
                {
                    id: 11,
                    level_id: 1,
                    title_fr: "11-Ma journée",
                    title_ar: "يومي",
                    text_fr: "Le matin, je me réveille à sept heures. Je prends mon petit déjeuner avec ma famille. Ensuite, je vais à l'école avec mon sac.",
                    text_ar: "في الصباح، أستيقظ في الساعة السابعة. أتناول فطوري مع عائلتي. ثم، أذهب إلى المدرسة مع حقيبتي.",
                    vocabulary: [
                        { fr: "Matin", ar: "صباح" },
                        { fr: "Famille", ar: "عائلة" },
                        { fr: "École", ar: "مدرسة" },
                        { fr: "Sac", ar: "حقيبة" },
                        { fr: "Petit déjeuner", ar: "فطور" },
                        { fr: "Se réveiller", ar: "يستيقظ" },
                        { fr: "Prendre", ar: "يتناول / يأخذ" },
                        { fr: "Ensuite", ar: "ثم" }
                    ],
                    comprehension: [
                        { q: "À quelle heure je me réveille ?", options: ["6h", "7h", "8h"], correct: 1 },
                        { q: "Avec qui je prends le déjeuner ?", options: ["Mes amis", "Seul", "Ma famille"], correct: 2 }
                    ],
                    grammar: [
                        { text: "Je ___ à l'école.", missing: "vais", options: ["vais", "va", "vont"], rule_fr: "C'est la conjugaison du verbe 'aller' au présent avec 'je'.", rule_ar: "هذا تصريف فعل 'ذهب' (aller) في المضارع مع الضمير 'أنا' (je)." }
                    ]
                },
                {
                id: 12,
                level_id: 3,
                title_fr: "12-Le téléphone perdu",
                title_ar: "الهاتف المفقود",

                text_fr: "Hier soir, Yassine a perdu son téléphone dans le bus. Il a cherché partout et a demandé au chauffeur, mais personne ne l’a trouvé. Plus tard, un ami lui a dit que quelqu’un aurait pris le téléphone après son départ. Yassine n’est pas sûr : il sait qu’il a perdu son téléphone, mais il ne sait pas si quelqu’un l’a vraiment volé.",
                text_ar: "البارحة مساءً، ياسين فقد هاتفه في الحافلة. بحث في كل مكان وسأل السائق، لكن لم يجده أحد. لاحقًا، قال له صديق إن شخصًا ربما أخذ الهاتف بعد نزوله. ياسين غير متأكد: هو متأكد أنه فقد هاتفه، لكنه لا يعرف إن كان أحد قد سرقه فعلًا.",

                vocabulary: [
                    { fr: "hier soir", ar: "البارحة مساءً" },
                    { fr: "perdre", ar: "يفقد" },
                    { fr: "téléphone", ar: "هاتف" },
                    { fr: "bus", ar: "حافلة" },
                    { fr: "chercher", ar: "يبحث" },
                    { fr: "chauffeur", ar: "سائق" },
                    { fr: "personne", ar: "لا أحد" },
                    { fr: "ami", ar: "صديق" },
                    { fr: "quelqu’un", ar: "شخص ما" },
                    { fr: "prendre", ar: "يأخذ" },
                    { fr: "être sûr", ar: "متأكد" },
                    { fr: "voler", ar: "يسرق" }
                ],

                comprehension: [
                    {
                    q: "Qu’est-ce que Yassine a perdu ?",
                    options: ["Son sac", "Son téléphone", "Son portefeuille"],
                    correct: 1
                    },
                    {
                    q: "Où a-t-il perdu son téléphone ?",
                    options: ["À la maison", "Dans le bus", "Au travail"],
                    correct: 1
                    },
                    {
                    q: "Qu’est-ce que l’ami de Yassine a dit ?",
                    options: [
                        "Le téléphone est cassé",
                        "Quelqu’un aurait pris le téléphone",
                        "Le chauffeur a trouvé le téléphone"
                    ],
                    correct: 1
                    },
                    {
                    q: "Yassine est-il sûr que quelqu’un a volé le téléphone ?",
                    options: ["Oui", "Non", "Parfois"],
                    correct: 1
                    }
                ],

                grammar: [
                    {
                    text: "Yassine ..... son téléphone dans le bus.",
                    missing: "a perdu",
                    options: ["a perdu", "aurait perdu", "perd"],
                    rule_fr: "Le passé composé exprime un fait certain et confirmé.",
                    rule_ar: "الماضي المركب يُستعمل للتعبير عن حدث مؤكد."
                    },
                    {
                    text: "Quelqu’un ..... le téléphone après son départ.",
                    missing: "aurait pris",
                    options: ["a pris", "aurait pris", "prend"],
                    rule_fr: "Le conditionnel passé exprime une hypothèse ou une information non confirmée.",
                    rule_ar: "الشرط الماضي يُستعمل للتعبير عن احتمال أو خبر غير مؤكد."
                    },
                    {
                    text: "Il ..... sûr de ce qui s’est passé.",
                    missing: "n’est pas",
                    options: ["est", "n’est pas", "sera"],
                    rule_fr: "La forme négative s’utilise pour exprimer le doute.",
                    rule_ar: "صيغة النفي تُستعمل للتعبير عن الشك."
                    }
                ]
                }
 


           ],
            progress: {}
        };
