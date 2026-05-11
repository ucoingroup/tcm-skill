window.TCM_DATA = {
  prescriptions: [
    {
      id: 'respiratory-cough-template',
      specialty: { zh: '呼吸系统', en: 'Respiratory' },
      disease: { zh: '咳嗽', en: 'Cough' },
      pattern: { zh: '需辨风寒、风热、痰湿、阴虚等证型', en: 'Differentiate wind-cold, wind-heat, phlegm-dampness, yin deficiency, and related patterns' },
      summary: { zh: '外感或内伤均可致咳，采集时需标注寒热虚实与痰象。', en: 'Cough may arise from external or internal patterns; record cold/heat, excess/deficiency, and phlegm signs.' },
      composition: { zh: '示例字段：君臣佐使、剂量、炮制、煎服法。', en: 'Example fields: roles, dosage, processing, decoction and administration.' },
      method: { zh: '仅记录来源用法；未审校前不输出可执行剂量。', en: 'Record source instructions only; do not provide actionable dosing before review.' },
      effect: { zh: '宣肺止咳、化痰平喘等需与证型对应。', en: 'Actions such as diffusing Lung qi, relieving cough, transforming phlegm, and calming wheeze must match the pattern.' },
      caseNote: { zh: '医案需记录年龄、症状、舌脉、疗程和复诊变化。', en: 'Case notes should include age, symptoms, tongue/pulse, course, and follow-up changes.' },
      caution: { zh: '发热喘促、咯血、儿童或孕期需及时就医。', en: 'Seek medical care for fever with dyspnea, hemoptysis, children, or pregnancy.' },
      source: { zh: '待补充授权来源/公版医籍/临床指南', en: 'Pending licensed source/public-domain classic/clinical reference' },
      reviewStatus: 'unreviewed',
      riskLevel: 'medium',
      updatedAt: '2026-05-11'
    },
    {
      id: 'digestive-epigastric-pain-template',
      specialty: { zh: '消化系统', en: 'Digestive' },
      disease: { zh: '胃脘痛', en: 'Epigastric pain' },
      pattern: { zh: '需辨寒邪客胃、肝胃不和、脾胃虚寒、瘀血阻络', en: 'Differentiate cold invading the Stomach, Liver-Stomach disharmony, Spleen-Stomach deficiency cold, and blood stasis' },
      summary: { zh: '需区分寒邪客胃、肝胃不和、脾胃虚寒、瘀血阻络等。', en: 'Differentiate cold invading the Stomach, Liver-Stomach disharmony, Spleen-Stomach deficiency cold, or blood stasis.' },
      composition: { zh: '示例字段：方名、药物组成、克数、加减与禁忌。', en: 'Example fields: formula name, ingredients, grams, modifications, contraindications.' },
      method: { zh: '采集煎煮、饭前后、疗程与加减规则；异常症状先转诊。', en: 'Collect decoction, timing, course, and modification rules; refer red flags first.' },
      effect: { zh: '温中散寒、疏肝和胃、健脾止痛等。', en: 'Warm the middle, disperse cold, soothe Liver, harmonize Stomach, strengthen Spleen, and relieve pain.' },
      caseNote: { zh: '医案需排除急腹症、消化道出血等红旗信号。', en: 'Case notes must screen red flags such as acute abdomen and gastrointestinal bleeding.' },
      caution: { zh: '剧痛、黑便、呕血、体重下降应转诊现代医学检查。', en: 'Severe pain, melena, hematemesis, or weight loss requires medical evaluation.' },
      source: { zh: '待补充授权来源/公版医籍/临床指南', en: 'Pending licensed source/public-domain classic/clinical reference' },
      reviewStatus: 'source_verified',
      riskLevel: 'high',
      updatedAt: '2026-05-11'
    },
    {
      id: 'gynecology-irregular-menstruation-template',
      specialty: { zh: '妇科', en: 'Gynecology' },
      disease: { zh: '月经不调', en: 'Irregular menstruation' },
      pattern: { zh: '需辨肝郁、血虚、血瘀、寒凝、肾虚等', en: 'Differentiate Liver constraint, blood deficiency, blood stasis, cold congealing, Kidney deficiency, and related patterns' },
      summary: { zh: '采集需标注周期、经量、色质、痛经、情志和寒热虚实。', en: 'Record cycle, volume, color/texture, pain, emotions, and cold/heat/excess/deficiency patterns.' },
      composition: { zh: '示例字段：基础方、活血/补血/温经/疏肝加减。', en: 'Example fields: base formula plus blood-moving, blood-tonifying, channel-warming, or Liver-soothing modifications.' },
      method: { zh: '记录经前、经期、经后使用阶段；先排除妊娠和异常出血。', en: 'Record premenstrual, menstrual, or postmenstrual timing; rule out pregnancy and abnormal bleeding first.' },
      effect: { zh: '调经、养血、活血、温经、疏肝。', en: 'Regulate menstruation, nourish blood, move blood, warm channels, and soothe Liver.' },
      caseNote: { zh: '医案需记录妊娠可能、内分泌检查和影像检查情况。', en: 'Case notes should record pregnancy possibility, endocrine tests, and imaging where relevant.' },
      caution: { zh: '孕期、异常出血、贫血或疑似肿瘤者不可自行用方。', en: 'Do not self-use formulas in pregnancy, abnormal bleeding, anemia, or suspected tumors.' },
      source: { zh: '待补充授权来源/公版医籍/临床指南', en: 'Pending licensed source/public-domain classic/clinical reference' },
      reviewStatus: 'safety_reviewed',
      riskLevel: 'high',
      updatedAt: '2026-05-11'
    },
    {
      id: 'pediatrics-appetite-template',
      specialty: { zh: '儿科', en: 'Pediatrics' },
      disease: { zh: '小儿食欲不振', en: 'Poor appetite in children' },
      pattern: { zh: '需辨脾胃气虚、食积、湿困、病后体虚', en: 'Differentiate Spleen-Stomach qi deficiency, food accumulation, damp obstruction, and post-illness weakness' },
      summary: { zh: '儿童处方采集必须记录年龄、体重、病程、喂养和生长发育情况。', en: 'Pediatric records must include age, weight, course, feeding, and growth/development context.' },
      composition: { zh: '示例字段：健脾、消食、化湿类药物及儿童剂量审校状态。', en: 'Example fields: Spleen-strengthening, food-dispersing, damp-transforming herbs, and pediatric dose review status.' },
      method: { zh: '儿童剂量不可从成人剂量简单折算，必须标注审校人。', en: 'Do not simply scale adult doses for children; record reviewer identity/status.' },
      effect: { zh: '健脾和胃、消食导滞。', en: 'Strengthen Spleen, harmonize Stomach, disperse food accumulation, and guide out stagnation.' },
      caseNote: { zh: '医案需排除贫血、慢性感染、内分泌和心理行为因素。', en: 'Case notes should screen anemia, chronic infection, endocrine causes, and behavioral factors.' },
      caution: { zh: '婴幼儿、体重下降、发育迟缓或持续呕吐腹泻需就医。', en: 'Infants, weight loss, developmental delay, persistent vomiting, or diarrhea require medical care.' },
      source: { zh: '待补充授权来源/公版医籍/临床指南', en: 'Pending licensed source/public-domain classic/clinical reference' },
      reviewStatus: 'unreviewed',
      riskLevel: 'high',
      updatedAt: '2026-05-11'
    },
    {
      id: 'longevity-winter-tonic-template',
      specialty: { zh: '养生长寿方', en: 'Health preservation' },
      disease: { zh: '冬季调养', en: 'Winter health preservation' },
      pattern: { zh: '需辨平和、气虚、阳虚、阴虚、痰湿等体质', en: 'Differentiate balanced, qi deficiency, yang deficiency, yin deficiency, phlegm-dampness, and related constitutions' },
      summary: { zh: '养生方不能替代疾病治疗，采集时需注明适用体质和不适用人群。', en: 'Health-preservation formulas do not replace disease care; record suitable constitutions and unsuitable populations.' },
      composition: { zh: '示例字段：补气、温阳、养血、滋阴类药食同源材料与禁忌。', en: 'Example fields: qi-tonifying, yang-warming, blood-nourishing, yin-enriching food/herb materials and contraindications.' },
      method: { zh: '记录季节、频次、饮食禁忌和停用条件。', en: 'Record season, frequency, dietary restrictions, and stop conditions.' },
      effect: { zh: '扶正固本、调和阴阳，须依据体质。', en: 'Support healthy qi, consolidate the root, and harmonize yin-yang according to constitution.' },
      caseNote: { zh: '医案需记录基础病、血压血糖、睡眠、饮食和运动。', en: 'Case notes should record comorbidities, blood pressure/glucose, sleep, diet, and exercise.' },
      caution: { zh: '感冒发热、实热、湿热、肿瘤治疗期或慢病用药者需先咨询医生。', en: 'Consult a clinician first during fever, excess heat, damp-heat, cancer treatment, or chronic medication use.' },
      source: { zh: '待补充授权来源/公版医籍/临床指南', en: 'Pending licensed source/public-domain classic/clinical reference' },
      reviewStatus: 'source_verified',
      riskLevel: 'medium',
      updatedAt: '2026-05-11'
    },
    {
      id: 'oncology-supportive-care-template',
      specialty: { zh: '肿瘤防治', en: 'Oncology supportive care' },
      disease: { zh: '肿瘤治疗期支持', en: 'Support during cancer treatment' },
      pattern: { zh: '需辨气血两虚、阴虚内热、痰瘀互结等，并结合治疗阶段', en: 'Differentiate qi-blood deficiency, yin deficiency with internal heat, phlegm-stasis binding, and treatment stage' },
      summary: { zh: '肿瘤相关处方只可作为支持性资料，必须结合肿瘤专科治疗方案。', en: 'Cancer-related formulas are supportive references only and must be coordinated with oncology care.' },
      composition: { zh: '示例字段：扶正、益气养阴、化痰散结等思路；必须标注相互作用风险。', en: 'Example fields: supporting healthy qi, benefiting qi and nourishing yin, transforming phlegm and dissipating masses; interaction risks required.' },
      method: { zh: '记录化疗/放疗/靶向/免疫治疗时间窗和停用条件。', en: 'Record chemotherapy/radiotherapy/targeted/immunotherapy timing windows and stop conditions.' },
      effect: { zh: '改善症状、扶正支持；不得宣称治愈肿瘤。', en: 'Symptom and supportive care only; never claim cancer cure.' },
      caseNote: { zh: '医案需记录分期、治疗方案、实验室指标和不良反应。', en: 'Case notes should record stage, treatment plan, labs, and adverse events.' },
      caution: { zh: '必须由肿瘤医生与中医师共同评估，避免影响抗肿瘤治疗。', en: 'Requires joint oncology and TCM review to avoid interfering with cancer treatment.' },
      source: { zh: '待补充授权来源/公版医籍/临床指南', en: 'Pending licensed source/public-domain classic/clinical reference' },
      reviewStatus: 'clinician_reviewed',
      riskLevel: 'critical',
      updatedAt: '2026-05-11'
    }
  ],

  hemorrhoidMethods: [
    {
      rank: 1,
      herb: { zh: '黄柏', en: 'Phellodendron bark' },
      role: { zh: '清热燥湿', en: 'Clear heat and dry dampness' },
      scenario: { zh: '湿热下注型，肛门灼热、肿痛、瘙痒明显者常见于资料整理', en: 'Damp-heat pattern with burning, swelling, pain, or itching in reference records' },
      usage: { zh: '多作外用熏洗/坐浴配伍资料；不提供自行配伍剂量。', en: 'Usually recorded as an external wash/sitz-bath ingredient; no self-compounding dose is provided.' },
      cautions: { zh: '脾胃虚寒、孕期、破溃感染或用后刺激明显者需医师判断。', en: 'Requires clinician review for deficiency-cold digestion, pregnancy, ulceration/infection, or irritation.' },
      sourceType: { zh: '妙手医生、民福康、百度健康等公开科普均提及', en: 'Mentioned in public health education sources such as Miaoshou Doctor, Minfukang, and Baidu Health' }
    },
    {
      rank: 2,
      herb: { zh: '槐花/槐角', en: 'Sophora flower/fruit' },
      role: { zh: '凉血止血', en: 'Cool blood and stop bleeding' },
      scenario: { zh: '内痔出血、便后鲜红血等“血热出血”资料场景', en: 'Internal hemorrhoid bleeding or bright-red post-defecation bleeding in blood-heat reference scenarios' },
      usage: { zh: '常见于槐角丸、地榆槐角丸等止血思路；便血需先排除肠道疾病。', en: 'Commonly appears in Huai Jiao Wan or Di Yu Huai Jiao Wan strategies; rectal bleeding needs medical evaluation.' },
      cautions: { zh: '大量出血、头晕乏力、黑便、暗红血或反复便血应立即就医。', en: 'Heavy bleeding, dizziness, black stool, dark-red blood, or recurrent bleeding requires prompt care.' },
      sourceType: { zh: '快速问医生、妙手医生、健康科普资料常见', en: 'Common in public health education sources and TCM hemorrhoid discussions' }
    },
    {
      rank: 3,
      herb: { zh: '蒲公英', en: 'Dandelion' },
      role: { zh: '清热解毒、消肿', en: 'Clear heat, resolve toxicity, reduce swelling' },
      scenario: { zh: '肿痛、红肿、炎症期或熏洗配伍资料', en: 'Swelling, pain, redness, inflammatory-stage, or wash-combination records' },
      usage: { zh: '多与黄柏、赤芍、丹皮、土茯苓、白芷等组成外洗资料方。', en: 'Often appears with Phellodendron, red peony, moutan bark, smilax, and angelica dahurica in external-wash records.' },
      cautions: { zh: '局部化脓、发热、剧痛或疑似肛周脓肿不可仅靠熏洗。', en: 'Do not rely on washes alone for pus, fever, severe pain, or suspected perianal abscess.' },
      sourceType: { zh: '妙手医生、健康科普与熏洗方资料提及', en: 'Mentioned in health education and external-wash references' }
    },
    {
      rank: 4,
      herb: { zh: '白芷', en: 'Angelica dahurica' },
      role: { zh: '消肿排脓、止痛', en: 'Reduce swelling, discharge pus, relieve pain' },
      scenario: { zh: '外痔肿痛、局部胀痛或外洗擦洗资料', en: 'External hemorrhoid swelling/pain or external cleansing records' },
      usage: { zh: '常与川芎、红花等外用擦洗资料同见；需避免刺激破损皮肤。', en: 'Often appears with chuanxiong and safflower in external-cleansing records; avoid irritating broken skin.' },
      cautions: { zh: '过敏体质、皮肤破溃、感染或疼痛加重者停止并就医。', en: 'Stop and seek care for allergy-prone skin, ulceration, infection, or worsening pain.' },
      sourceType: { zh: '用户提供搜索结果与公开科普资料提及', en: 'Mentioned in user-provided search results and public education sources' }
    },
    {
      rank: 5,
      herb: { zh: '苦参', en: 'Sophora flavescens root' },
      role: { zh: '清热燥湿、止痒', en: 'Clear heat, dry dampness, relieve itching' },
      scenario: { zh: '湿热瘙痒、肿胀、坐浴熏洗资料', en: 'Damp-heat itching, swelling, and sitz-bath/wash records' },
      usage: { zh: '常见于坐浴、熏洗或外用制剂资料；浓度和频次需专业审校。', en: 'Common in sitz-bath, wash, or topical-preparation records; concentration and frequency need review.' },
      cautions: { zh: '局部刺激、皮炎、孕期或儿童使用需谨慎。', en: 'Use caution with local irritation, dermatitis, pregnancy, or children.' },
      sourceType: { zh: '百度健康、博禾医生等公开科普提及', en: 'Mentioned in public education sources about TCM external treatment' }
    },
    {
      rank: 6,
      herb: { zh: '当归', en: 'Angelica sinensis' },
      role: { zh: '补血活血、润肠通便', en: 'Nourish and move blood; moisten intestines' },
      scenario: { zh: '体虚、便秘、气血瘀滞相关资料场景', en: 'Deficiency, constipation, and qi-blood stasis reference scenarios' },
      usage: { zh: '常与桃仁、火麻仁/大麻仁等润肠活血思路同见；内服必须辨证。', en: 'Often paired with peach kernel and hemp seed in bowel-moistening/blood-moving strategies; internal use requires differentiation.' },
      cautions: { zh: '出血量多、孕期、抗凝/抗血小板用药者需医师评估。', en: 'Clinician review is needed for heavy bleeding, pregnancy, anticoagulants, or antiplatelet drugs.' },
      sourceType: { zh: '快速问医生及传统组方资料提及', en: 'Mentioned in public health sources and traditional formula records' }
    },
    {
      rank: 7,
      herb: { zh: '桃仁', en: 'Peach kernel' },
      role: { zh: '活血化瘀、润肠', en: 'Move blood, dispel stasis, moisten intestines' },
      scenario: { zh: '瘀滞疼痛、血栓样痔核或便秘相关资料', en: 'Stasis pain, thrombosed-appearing hemorrhoid records, or constipation-associated records' },
      usage: { zh: '多为配伍思路，不建议自行内服；剂量、炮制和禁忌必须审校。', en: 'Usually a combination strategy; self-administered internal use is not advised. Dose, processing, and contraindications require review.' },
      cautions: { zh: '孕期禁慎、出血倾向或服用抗凝药者尤其要避免自行使用。', en: 'Avoid self-use in pregnancy, bleeding tendency, or anticoagulant therapy.' },
      sourceType: { zh: '妙手医生、快速问医生等资料提及', en: 'Mentioned in public education and formula-reference sources' }
    },
    {
      rank: 8,
      herb: { zh: '赤芍', en: 'Red peony root' },
      role: { zh: '清热凉血、散瘀止痛', en: 'Clear heat, cool blood, disperse stasis, relieve pain' },
      scenario: { zh: '热瘀肿痛、局部灼痛或外洗配伍资料', en: 'Heat-stasis swelling/pain, burning pain, or external-wash combinations' },
      usage: { zh: '常与丹皮、黄柏、蒲公英等外用资料同见。', en: 'Often appears with moutan bark, Phellodendron, and dandelion in external-use records.' },
      cautions: { zh: '便血明显、凝血异常、孕期或慢病用药者需专业审校。', en: 'Professional review is needed for obvious bleeding, clotting disorders, pregnancy, or chronic medications.' },
      sourceType: { zh: '用户提供搜索结果与熏洗方资料提及', en: 'Mentioned in user-provided results and wash-formula references' }
    },
    {
      rank: 9,
      herb: { zh: '牡丹皮/丹皮', en: 'Moutan bark' },
      role: { zh: '清热凉血、活血化瘀', en: 'Clear heat, cool blood, move blood and stasis' },
      scenario: { zh: '热瘀型肿痛、熏洗外治配伍资料', en: 'Heat-stasis swelling/pain and external wash-combination records' },
      usage: { zh: '常与赤芍、黄柏、蒲公英等整理为外洗资料。', en: 'Often documented with red peony, Phellodendron, and dandelion in external-wash references.' },
      cautions: { zh: '月经过多、孕期、凝血异常者不宜自行使用。', en: 'Avoid self-use with heavy menstruation, pregnancy, or clotting abnormalities.' },
      sourceType: { zh: '妙手医生等公开科普资料提及', en: 'Mentioned in public health education sources' }
    },
    {
      rank: 10,
      herb: { zh: '土茯苓', en: 'Smilax glabra' },
      role: { zh: '除湿解毒、消肿', en: 'Resolve dampness, detoxify, reduce swelling' },
      scenario: { zh: '湿热下注、肿胀不适或外洗配伍资料', en: 'Damp-heat descent, swelling, discomfort, or external-wash records' },
      usage: { zh: '常作为蒲公英、黄柏、白芷等外洗资料方的配伍药。', en: 'Often documented as a companion herb with dandelion, Phellodendron, and angelica dahurica in wash formulas.' },
      cautions: { zh: '慢性病、肾功能异常或正在服药者需咨询医生。', en: 'Consult a clinician for chronic disease, kidney impairment, or concurrent medications.' },
      sourceType: { zh: '用户提供搜索结果与外洗方资料提及', en: 'Mentioned in user-provided search results and external-wash references' }
    }
  ],
  hemorrhoidFormulaNotes: [
    {
      title: { zh: '外用熏洗资料方', en: 'External fumigation/wash reference formula' },
      content: { zh: '蒲公英、黄柏、赤芍、丹皮、桃仁、土茯苓、白芷等常被整理为清热解毒、除湿消肿、凉血散瘀思路。仅作资料卡，不建议自行按克数配伍。', en: 'Dandelion, Phellodendron, red peony, moutan bark, peach kernel, smilax, and angelica dahurica are often organized under heat-clearing, dampness-resolving, swelling-reducing, blood-cooling, and stasis-dispersing strategies. This is a reference card, not a self-compounding dose.' }
    },
    {
      title: { zh: '便血止血思路', en: 'Bleeding-control strategy' },
      content: { zh: '槐花/槐角、地榆、黄芩、防风、枳壳等常见于凉血止血、利气止痛资料。便血不等于一定是痔疮，反复或大量便血应先就医排查。', en: 'Sophora flower/fruit, sanguisorba, scutellaria, fangfeng, and bitter orange are common in blood-cooling and bleeding-control records. Rectal bleeding is not always hemorrhoids; recurrent or heavy bleeding needs medical evaluation first.' }
    },
    {
      title: { zh: '便秘润肠思路', en: 'Constipation and bowel-moistening strategy' },
      content: { zh: '当归、桃仁、火麻仁/大麻仁等常见于体虚便秘或瘀滞资料。含活血、泻下药时，孕期、出血倾向和慢病用药者必须专业审校。', en: 'Angelica sinensis, peach kernel, and hemp seed appear in deficiency-constipation or stasis records. Blood-moving or purgative ingredients require professional review in pregnancy, bleeding tendency, and chronic medication use.' }
    }
  ],
  hemorrhoidSafety: {
    zh: '痔疮资料整理不能替代肛肠科诊疗。大量出血、头晕晕厥、黑便/暗红血、持续疼痛、发热、肛周脓肿、痔核嵌顿、体重下降或中老年新发便血，应及时就医。熏洗水温需避免烫伤，孕妇、儿童、老人、肝肾功能异常及正在用抗凝/抗血小板药者不得自行用药。',
    en: 'Hemorrhoid reference records do not replace colorectal care. Seek medical care for heavy bleeding, dizziness/fainting, black or dark-red stool, persistent pain, fever, perianal abscess, incarcerated hemorrhoids, weight loss, or new rectal bleeding in middle-aged/older adults. Avoid burns during sitz baths; pregnancy, children, older adults, liver/kidney impairment, and anticoagulant/antiplatelet therapy require clinician guidance.'
  },

  wellnessTeaSources: [
    { title: '清火茶、祛湿茶、润喉茶、瘦身茶、美白茶、散装养生花茶', url: 'https://mp.weixin.qq.com/s/-1a797plh660FdtYl7Jf0g', status: 'user-provided-wechat-link-needs-manual-verification' },
    { title: '精品散装养生花茶常见的100个问题，以及解答有哪些？', url: 'https://mp.weixin.qq.com/s/YZFlk2_x-nGDlRenD7SIkQ', status: 'user-provided-wechat-link-needs-manual-verification' }
  ],
  wellnessTeaBlends: [
    {
      id: 'qinghuo-tea',
      name: { zh: '清火茶', en: 'Cooling / heat-clearing tea' },
      positioning: { zh: '面向口干、熬夜上火、目赤咽干等“火热感”人群的资料卡。', en: 'Reference card for dry mouth, late-night heat signs, red eyes, or dry throat sensations.' },
      commonMaterials: { zh: '菊花、金银花、蒲公英、薄荷、淡竹叶、绿茶等。', en: 'Chrysanthemum, honeysuckle, dandelion, mint, lophatherum, green tea, and similar materials.' },
      brew: { zh: '建议做成散装茶包或称重小包，80-90℃热水冲泡；体寒者减量或避用。', en: 'Can be packed as loose sachets; steep with 80-90°C water. Reduce or avoid for cold-deficiency constitutions.' },
      cautions: { zh: '脾胃虚寒、腹泻、孕期、儿童、慢病用药者需先咨询专业人士。', en: 'Consult a professional for cold digestion, diarrhea, pregnancy, children, or chronic medications.' }
    },
    {
      id: 'qushi-tea',
      name: { zh: '祛湿茶', en: 'Dampness-resolving tea' },
      positioning: { zh: '面向身重困倦、舌苔厚腻、油腻饮食后不适等湿困资料场景。', en: 'Reference card for heaviness, fatigue, greasy tongue coating, or discomfort after oily foods.' },
      commonMaterials: { zh: '薏苡仁、赤小豆、茯苓、陈皮、荷叶、藿香等。', en: 'Coix seed, adzuki bean, poria, aged tangerine peel, lotus leaf, patchouli, and similar materials.' },
      brew: { zh: '谷物豆类宜先洗净、浸泡或煮饮；花叶类可后下冲泡。', en: 'Grains/beans are usually rinsed and soaked or decocted; flowers/leaves can be steeped later.' },
      cautions: { zh: '孕期、肾病、水肿原因不明、长期腹泻或正在服利尿药者需医师评估。', en: 'Clinician review is needed for pregnancy, kidney disease, unexplained edema, chronic diarrhea, or diuretics.' }
    },
    {
      id: 'runhou-tea',
      name: { zh: '润喉茶', en: 'Throat-soothing tea' },
      positioning: { zh: '面向咽干、用嗓多、秋冬干燥或轻度咽喉不适资料场景。', en: 'Reference card for dry throat, heavy voice use, dry seasons, or mild throat discomfort.' },
      commonMaterials: { zh: '胖大海、罗汉果、麦冬、桔梗、甘草、菊花等。', en: 'Boat-fruited sterculia seed, monk fruit, ophiopogon, platycodon, licorice, chrysanthemum, and similar materials.' },
      brew: { zh: '短期冲泡饮用并观察反应；声音嘶哑超过2周或吞咽痛需就医。', en: 'Use as short-term steeped tea and monitor response; hoarseness over two weeks or painful swallowing needs care.' },
      cautions: { zh: '胖大海不宜长期大量饮用；甘草与高血压、低钾、利尿剂等需注意相互作用。', en: 'Avoid long-term heavy use of boat-fruited sterculia; licorice may interact with hypertension, hypokalemia, and diuretics.' }
    },
    {
      id: 'shoushen-tea',
      name: { zh: '瘦身茶', en: 'Weight-management tea' },
      positioning: { zh: '定位为控糖控油、饮食运动配合的辅助茶饮资料，不宣称减肥疗效。', en: 'Positioned as a supportive beverage for diet/exercise routines, without weight-loss treatment claims.' },
      commonMaterials: { zh: '荷叶、山楂、决明子、陈皮、乌龙茶、玫瑰花等。', en: 'Lotus leaf, hawthorn, cassia seed, aged tangerine peel, oolong tea, rose, and similar materials.' },
      brew: { zh: '适合餐后少量饮用；避免加入泻药或夸大“快速瘦身”。', en: 'Often used in small amounts after meals; avoid laxative additives or exaggerated rapid-weight-loss claims.' },
      cautions: { zh: '孕期、哺乳期、胃酸过多、低血压、腹泻、进食障碍或服药者需谨慎。', en: 'Use caution with pregnancy, lactation, hyperacidity, low blood pressure, diarrhea, eating disorders, or medications.' }
    },
    {
      id: 'meibai-tea',
      name: { zh: '美白茶', en: 'Brightening / beauty tea' },
      positioning: { zh: '定位为抗氧化、气色管理和日常补水的花茶资料，不作医疗美容承诺。', en: 'Reference card for antioxidant, complexion, and hydration routines without cosmetic medical claims.' },
      commonMaterials: { zh: '玫瑰花、洛神花、枸杞、桑葚、茉莉花、桂花等。', en: 'Rose, roselle, goji berry, mulberry, jasmine, osmanthus, and similar materials.' },
      brew: { zh: '花果类宜低温短泡，避免高糖调味；敏感体质先少量试饮。', en: 'Flowers/fruits suit lower-temperature short steeping; avoid high-sugar sweeteners and test small amounts if sensitive.' },
      cautions: { zh: '美白效果受防晒、睡眠、营养和皮肤疾病影响；过敏、孕期或服药需咨询。', en: 'Skin brightness depends on sun protection, sleep, nutrition, and skin conditions; consult for allergy, pregnancy, or medications.' }
    },
    {
      id: 'loose-flower-tea',
      name: { zh: '精品散装养生花茶', en: 'Premium loose wellness floral tea' },
      positioning: { zh: '用于商品栏目、散装称重、定制拼配、礼盒和日常养生场景。', en: 'For product cataloging, loose-weight sales, custom blending, gift sets, and daily wellness routines.' },
      commonMaterials: { zh: '玫瑰、菊花、金银花、茉莉、桂花、洛神花、陈皮、枸杞等。', en: 'Rose, chrysanthemum, honeysuckle, jasmine, osmanthus, roselle, aged tangerine peel, goji berry, and similar materials.' },
      brew: { zh: '按原料建立批次、产地、净含量、建议冲泡和禁忌标签。', en: 'Track batch, origin, net weight, suggested steeping, and caution labels by material.' },
      cautions: { zh: '不得把普通食品茶饮宣传为治疗疾病；需符合食品、广告和平台规则。', en: 'Do not market ordinary food teas as disease treatments; follow food, advertising, and platform rules.' }
    }
  ],
  wellnessTeaFaqs: Array.from({ length: 100 }, (_, index) => {
    const categories = ['选购与品质', '冲泡与保存', '体质与禁忌', '功效宣传合规', '售后与复购'];
    const category = categories[index % categories.length];
    const number = index + 1;
    const zhQuestions = {
      '选购与品质': `第${number}问：精品散装养生花茶怎么判断品质？`,
      '冲泡与保存': `第${number}问：散装养生花茶应该如何冲泡和保存？`,
      '体质与禁忌': `第${number}问：哪些人饮用养生花茶需要特别谨慎？`,
      '功效宣传合规': `第${number}问：清火茶、祛湿茶、润喉茶、瘦身茶、美白茶能否宣传治疗效果？`,
      '售后与复购': `第${number}问：客户反馈口味或体感不一致时如何处理？`
    };
    const zhAnswers = {
      '选购与品质': '优先查看原料完整度、颜色气味、干燥度、洁净度、产地批次和检测/合规资料；避免霉味、异味、虫蛀、染色过艳或来源不明的原料。',
      '冲泡与保存': '花叶类多用80-90℃热水短泡，根茎果实或豆谷类可适当煮饮；密封、避光、防潮、防异味保存，开封后尽快饮用。',
      '体质与禁忌': '孕妇、儿童、老人、过敏体质、肝肾功能异常、慢病用药者，以及腹泻、低血压、出血倾向等人群，应先咨询专业人士。',
      '功效宣传合规': '只能作为食品/茶饮资料介绍传统使用思路，不应承诺治疗、减肥、美白或替代药物；页面需保留“非医疗建议、需辨证”的提示。',
      '售后与复购': '先核对批次、冲泡量、水温、饮用频次、饮食作息和禁忌情况；不适者建议停用并就医，复购应根据体质和季节调整。'
    };
    return {
      id: `wellness-tea-faq-${String(number).padStart(3, '0')}`,
      category: { zh: category, en: ['Buying & quality', 'Brewing & storage', 'Constitution & cautions', 'Claims compliance', 'After-sales & repeat purchase'][index % categories.length] },
      question: { zh: zhQuestions[category], en: `FAQ ${number}: ${['How should premium loose wellness floral tea quality be assessed?', 'How should loose wellness tea be brewed and stored?', 'Who should use wellness floral tea cautiously?', 'Can cooling, dampness, throat, weight-management, or beauty teas claim treatment effects?', 'How should inconsistent taste or customer feedback be handled?'][index % categories.length]}` },
      answer: { zh: zhAnswers[category], en: ['Check material integrity, color, aroma, dryness, cleanliness, origin, batch, and compliance records; avoid moldy, off-smelling, insect-damaged, overly dyed, or unknown-source materials.', 'Use 80-90°C water and short steeping for flowers/leaves; roots, fruits, grains, and beans may need decoction. Store sealed, dark, dry, and away from odors; consume soon after opening.', 'Pregnant people, children, older adults, allergy-prone users, liver/kidney impairment, chronic medication users, and people with diarrhea, low blood pressure, or bleeding tendency should consult a professional first.', 'Describe traditional food/beverage use only; do not promise treatment, weight loss, whitening, or drug replacement. Keep non-medical and pattern-differentiation disclaimers visible.', 'Check batch, amount, water temperature, frequency, diet, lifestyle, and contraindications. Stop use and seek care if discomfort occurs; repeat purchases should adjust by constitution and season.'][index % categories.length] }
    };
  }),
  aiProviders: [
    { name: 'Google Gemini API', free: 'Free tier with per-model RPM/TPM/RPD limits in AI Studio; limits change by model.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://ai.google.dev/gemini-api/docs/rate-limits' },
    { name: 'Mistral AI La Plateforme', free: 'Experiment plan is free with phone verification and restrictive rate limits; no credit card required.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://help.mistral.ai/en/articles/450104-how-can-i-try-the-api-for-free-with-the-experiment-plan' },
    { name: 'GroqCloud', free: 'Free developer tier with model-specific rate limits; verify current limits in console/docs.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://console.groq.com/docs/rate-limits' },
    { name: 'OpenRouter', free: 'Free models typically have daily and per-minute request caps; paid credits raise some caps.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://openrouter.ai/docs/api/reference/limits' },
    { name: 'Hugging Face Inference Providers', free: 'Includes a free tier/small credits for signed-in users across supported providers.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://huggingface.co/docs/hub/models-inference' },
    { name: 'NVIDIA NIM', free: 'Free development/testing access to hosted NIM APIs and self-host options for Developer Program members.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://www.nvidia.com/en-us/ai-data-science/products/nim-microservices/' },
    { name: 'AI21 Studio', free: '$10 trial credits for 3 months, no credit card required, then usage-based billing.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://www.ai21.com/pricing' },
    { name: 'Cohere', free: 'Trial keys/free trial access may be available; confirm current limits in dashboard.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://docs.cohere.com/' },
    { name: 'Anthropic Claude API', free: 'Generally prepaid/paid API; special research/startup/open-source credits may exist by program.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://support.anthropic.com/en/articles/8977456-how-do-i-pay-for-my-api-usage' },
    { name: 'OpenAI API', free: 'API usage is generally paid/prepaid; promotional credits, if any, are account/region/time limited.', status: 'official-doc-required', lastVerified: '2026-05-11', url: 'https://help.openai.com/' }
  ]
};
