
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
                    title_fr: "1-Le petit déjeuner de Sarah",
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
                        title_fr: "2-Une journée au jardin",
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
                    id: 3,
                    level_id: 1,
                    title_fr: "3-Sarah prépare un gâteau",
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
  id: 4,
  level_id: 1,
  title_fr: "4-Le sac de Lina",
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
      rule_fr: `
"Un" est l’article indéfini masculin singulier.
➡️ Sac = nom masculin
➡️ On utilise "un" quand on parle de quelque chose de non précis.
Exemples :
- un sac
- un livre
Exception : devant une voyelle → "un" reste inchangé.
      `,
      rule_ar: `
"Un" هي أداة تنكير للمذكر المفرد.
➡️ sac اسم مذكر
تُستعمل عندما لا نحدد الشيء.
أمثلة:
- un sac
- un livre
      `
    },
    {
      text: "..... son sac, il y a un livre.",
      missing: "Dans",
      options: ["Dans", "Sur", "Avec"],
      rule_fr: `
"Dans" indique l’intérieur d’un objet ou d’un lieu.
Exemples :
- Dans la maison
- Dans le sac
⚠️ Ne pas confondre avec "sur" (au-dessus).
      `,
      rule_ar: `
"Dans" تعني داخل شيء.
أمثلة:
- داخل البيت
- داخل الحقيبة
      `
    }
  ]
},
{
  id: 11,
  level_id: 2,
  title_fr: "1-Le week-end de Karim",
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
      rule_fr: `
Le passé composé avec "être" :
être + participe passé.
➡️ Aller se conjugue avec "être".
Accord :
- Karim (masculin singulier) → allé
Exemples :
- Elle est allée
- Ils sont allés
      `,
      rule_ar: `
الماضي المركب مع être:
être + اسم المفعول
الفعل aller يأتي مع être
ويُطابق الفاعل:
- كريم → allé
      `
    }
  ]
},
{
  id: 21,
  level_id: 3,
  title_fr: "1-Un projet important",
  title_ar: "مشروع مهم",

  text_fr: "Si Marc avait plus de temps, il terminerait son projet plus rapidement, ce qui améliorerait ses résultats.",
  text_ar: "لو كان لدى مارك وقت أكثر، لأنهِى مشروعه بسرعة أكبر، مما سيحسن نتائجه.",

  grammar: [
    {
      text: "Si Marc ..... plus de temps, il terminerait le projet.",
      missing: "avait",
      options: ["a", "avait", "aurait"],
      rule_fr: `
Structure du conditionnel :
Si + imparfait → conditionnel présent
Exemples :
- Si j'avais de l'argent, je voyagerais.
⚠️ Jamais : si + conditionnel
      `,
      rule_ar: `
قاعدة الشرط:
Si + imparfait ثم conditionnel
ممنوع استعمال conditionnel بعد si
      `
    }
  ]
},
{
  id: 0,
  level_id: 1,
  title_fr: "5-Pourquoi Amine dit « je parle »",
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
    id: 3,
    level_id: 1,
    title_fr: "6-Le choix des jouets",
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
  id: 8,
  level_id: 1,
  title_fr: "7-Samir et Amina au magasin",
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
}



             ]
        };
