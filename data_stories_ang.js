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
}
                
                 
               
            ]
        };
