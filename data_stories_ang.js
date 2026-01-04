 const INITIAL_DATA = {
            levels: [
                { id: 1, title_en: 'Implementation Basics', title_ar: 'أساسيات التنفيذ', icon: 'fa-rocket', color: 'bg-blue-500' },
                { id: 2, title_en: 'System & Configuration', title_ar: 'النظام والإعدادات', icon: 'fa-cogs', color: 'bg-purple-500' },
                { id: 3, title_en: 'Extensions & Integration', title_ar: 'الإضافات والتكامل', icon: 'fa-plug', color: 'bg-green-500' }
            ],
            stories: [
                {
    id: 4,
    level_id: 2,
    title_en: "Advanced Communication",
    title_ar: "التواصل المتقدم",
    text_en: "From my perspective, aligning processes with business requirements is essential for ensuring long-term efficiency and clarity.",
    text_ar: "من وجهة نظري، يعد مواءمة العمليات مع متطلبات العمل أمرًا ضروريًا لضمان الكفاءة والوضوح على المدى الطويل.",
    video_url: "",
    vocabulary: [
        { en: "Perspective", ar: "وجهة نظر" },
        { en: "Aligning", ar: "مواءمة / توافق" },
        { en: "Efficiency", ar: "كفاءة" },
        { en: "Clarity", ar: "وضوح" }
    ],
    comprehension: [],
    grammar: []
},
{
    id: 5,
    level_id: 2,
    title_en: "Clear Professional Communication",
    title_ar: "التواصل المهني الواضح",
    text_en: "In today’s fast-paced environment, expressing ideas clearly and confidently helps build trust and avoid misunderstandings.",
    text_ar: "في بيئة العمل السريعة اليوم، يساعد التعبير عن الأفكار بوضوح وثقة على بناء الثقة وتجنب سوء الفهم.",
    video_url: "",
    vocabulary: [
        { en: "Fast-paced", ar: "سريع الوتيرة" },
        { en: "Expressing", ar: "التعبير عن" },
        { en: "Confidently", ar: "بثقة" },
        { en: "Trust", ar: "ثقة" },
        { en: "Misunderstandings", ar: "سوء الفهم" },
        { en: "Avoid", ar: "تجنب" },
        { en: "Build", ar: "يبني / يبني" },
        { en: "Clearly", ar: "بوضوح" }
    ],
    comprehension: [],
    grammar: []
},
{
    id: 8,
    level_id: 1,
    title_en: "Daily Life Sentences",
    title_ar: "جمل الحياة اليومية",
    text_en: "I wake up early. I eat breakfast. I go to school. I like my teacher. She is very kind. I play with friends. We read books. I drink water. I write in my notebook. I sleep at night.",
    text_ar: "أستيقظ مبكرًا. أتناول الإفطار. أذهب إلى المدرسة. أحب معلمي. هي لطيفة جدًا. ألعب مع الأصدقاء. نقرأ الكتب. أشرب الماء. أكتب في دفتري. أنام في الليل.",
    video_url: "",
    vocabulary: [
        { en: "Wake up", ar: "أستيقظ" },
        { en: "Breakfast", ar: "إفطار" },
        { en: "School", ar: "المدرسة" },
        { en: "Teacher", ar: "معلم / معلمة" },
        { en: "Kind", ar: "لطيف / لطيفة" },
        { en: "Play", ar: "يلعب" },
        { en: "Friends", ar: "أصدقاء" },
        { en: "Read", ar: "يقرأ" },
        { en: "Notebook", ar: "دفتر" },
        { en: "Sleep", ar: "ينام" }
    ],
    comprehension: [],
    grammar: []
},
{
    id: 9,
    level_id: 1,
    title_en: "At Home Activities",
    title_ar: "أنشطة في المنزل",
    text_en: "I clean my room. I cook dinner. I drink tea. I watch TV. I read a book. I listen to music. I help my mother. I water the plants. I open the window. I go to bed.",
    text_ar: "أُنظف غرفتي. أطبخ العشاء. أشرب الشاي. أشاهد التلفاز. أقرأ كتابًا. أستمع إلى الموسيقى. أساعد أمي. أسقي النباتات. أفتح النافذة. أذهب إلى السرير.",
    video_url: "",
    vocabulary: [
        { en: "Clean", ar: "ينظف" },
        { en: "Cook", ar: "يطبخ" },
        { en: "Dinner", ar: "العشاء" },
        { en: "Drink", ar: "يشرب" },
        { en: "Watch", ar: "يشاهد" },
        { en: "Read", ar: "يقرأ" },
        { en: "Listen", ar: "يستمع" },
        { en: "Help", ar: "يساعد" },
        { en: "Plants", ar: "النباتات" },
        { en: "Window", ar: "نافذة" },
        { en: "Bed", ar: "سرير" }
    ],
    comprehension: [],
    grammar: []
},


{
    id: 6,
    level_id: 2,
    title_en: "Expressing Opinions Diplomatically",
    title_ar: "التعبير عن الرأي بلباقة",
    text_en: "While I understand your point, I believe we should consider alternative approaches before making a final decision.",
    text_ar: "مع أنني أفهم وجهة نظرك، أعتقد أنه ينبغي علينا النظر في بدائل أخرى قبل اتخاذ قرار نهائي.",
    video_url: "",
    vocabulary: [
        { en: "While I understand", ar: "مع أنني أفهم" },
        { en: "Consider", ar: "ينظر في / يدرس" },
        { en: "Alternative", ar: "بديل" },
        { en: "Approaches", ar: "أساليب / مقاربات" },
        { en: "Final decision", ar: "القرار النهائي" }
    ],
    comprehension: [],
    grammar: []
},



                {
    id: 3,
    level_id: 2,
    title_en: "3-Create Asset Class for Special Machines",
    title_ar: "3- إنشاء فئة أصول للآلات الخاصة",
    text_en: "Always link the correct account determination to the appropriate asset class to ensure accurate financial reporting.",
    text_ar: "يجب دائمًا ربط تحديد الحسابات الصحيح بفئة الأصل المناسبة لضمان دقة التقارير المالية.",
    video_url: "",
    vocabulary: [
        { en: "Asset Class", ar: "فئة الأصول" },
        { en: "Account Determination", ar: "تحديد الحسابات" },
        { en: "Financial Reporting", ar: "التقارير المالية" },
        { en: "Accurate", ar: "دقيق" },
        { en: "Link", ar: "ربط" },
        { en: "Appropriate", ar: "مناسب" },
        { en: "Ensure", ar: "ضمان" }
    ],
    comprehension: [],
    grammar: []
},
                 {
            id: 3,
            level_id: 2,
            title_en: "3-Create Asset Class for Special Machines",
            title_ar: "3- إنشاء فئة أصول للآلات الخاصة",
            text_en: "The master records for special machines are to be created with a separate asset class, Special Machines ###. Link the account determination for special machines from the previous exercise Create a New Account Determination, to the new asset class Special Machines ###. To do this, open the Implementation Activities app. In this exercise, when you see ###, replace the characters with the number provided by your instructor.",
            text_ar: "يجب إنشاء السجلات الرئيسية للآلات الخاصة باستخدام فئة أصول مستقلة باسم Special Machines ###. بعد ذلك، قم بربط تحديد الحسابات الخاص بالآلات من التمرين السابق (Create a New Account Determination) بفئة الأصول الجديدة Special Machines ###. لتنفيذ ذلك، افتح تطبيق Implementation Activities. في هذا التمرين، كلما رأيت ### قم باستبدالها بالرقم الذي يقدمه لك المدرّس.",
            video_url: "",
            vocabulary: [
                { en: "Asset Class", ar: "فئة الأصول" },
                { en: "Master Record", ar: "السجل الرئيسي" },
                { en: "Account Determination", ar: "تحديد الحسابات" },
                { en: "Implementation Activities App", ar: "تطبيق أنشطة التنفيذ" },
                { en: "Special Machines", ar: "الآلات الخاصة" }
            ],
            comprehension: [],
            grammar: []
        },
                 {
            id: 2,
            level_id: 2,
            title_en: "2-Account Determination Update",
            title_ar: "2- تعديل تحديد الحسابات",
            text_en: "In the line with the account determination Z16### and account symbol KTANSW, overwrite the G/L account 16002000 with 16002300.",
            text_ar: "في السطر الخاص بتحديد الحساب Z16### ورمز الحساب KTANSW، قم باستبدال حساب الأستاذ العام 16002000 بالحساب 16002300.",
            video_url: "",
            vocabulary: [
                { en: "Account Determination", ar: "تحديد الحسابات" },
                { en: "G/L Account", ar: "حساب الأستاذ العام" },
                { en: "Overwrite", ar: "استبدال / الكتابة فوق" }
            ],
            comprehension: [],
            grammar: []
        },
                {
                    id: 1,
                    level_id: 1,
                    title_en: "1-Understanding ERP Scope",
                    title_ar: "1- فهم نطاق نظام (ERP)",
                    text_en: "An organization needs to choose the right scope for its business. Whether it is product-centric for manufacturing or service-centric for plumbing, SAP S/4HANA Cloud provides pre-defined Best Practices. The project team must identify which lines of business (LoB) are required.",
                    text_ar: "تحتاج المؤسسة إلى اختيار النطاق المناسب لأعمالها. سواء كان متمحورًا حول المنتج (Product-centric) للتصنيع أو متمحورًا حول الخدمة (Service-centric) للخدمات، يوفر SAP S/4HANA Cloud أفضل الممارسات المحددة مسبقًا. يجب على فريق المشروع تحديد قطاعات الأعمال (LoB) المطلوبة.",
                    video_url: "https://www.youtube.com/watch?v=X18JGqYaT8g",
                    vocabulary: [
                        { en: "Scope", ar: "النطاق / المدى" },
                        { en: "Product-centric", ar: "متمحور حول المنتج" },
                        { en: "Service-centric", ar: "متمحور حول الخدمة" },
                        { en: "Lines of Business (LoB)", ar: "قطاعات الأعمال / المجالات الوظيفية" },
                        { en: "Manufacturing", ar: "التصنيع" },
                        { en: "Sourcing and Procurement", ar: "المصادر والمشتريات" }
                    ],
                    comprehension: [
                        {
                            q: "An organization designs and builds automobiles. What scope do they require?",
                            options: ["Finance-led administrative ERP", "Product-centric industries", "Service-centric industries"],
                            correct: 1, 
                            type: "single",
                            explanation: "لشركة تصنيع سيارات، نطاق 'Product-centric' ضروري لإدارة الإنتاج."
                        },
                        {
                            q: "Which line of business includes scheduling and running production?",
                            options: ["Asset Management", "Manufacturing", "Supply Chain"],
                            correct: 1,
                            type: "single",
                            explanation: "مجال 'Manufacturing' هو المسؤول عن تخطيط وتنفيذ عمليات الإنتاج."
                        }
                    ],
                    grammar: [
                        {
                            text: "An organization ..... automobiles.",
                            missing: "builds",
                            options: ["build", "builds", "building"],
                            rule_en: "The present simple for a third person singular (An organization) ends with -s.",
                            rule_ar: "ينتهي المضارع البسيط للشخص الثالث المفرد (An organization) بحرف -s."
                        },
                        {
                            text: "Which lines of business ..... included?",
                            missing: "are",
                            options: ["is", "are", "am"],
                            rule_en: "We use 'are' because 'lines of business' is plural.",
                            rule_ar: "نستخدم 'are' لأن 'lines of business' بصيغة الجمع."
                        }
                    ]
                }
            ]
        };
