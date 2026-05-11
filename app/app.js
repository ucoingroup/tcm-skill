const i18n = {
  zh: {
    eyebrow: '中医药特效处方 · 收集 Skill · Website APP',
    title: '整理一个中医药处方的网站 APP',
    subtitle: '面向 16 个专科领域、360+ 病种、2000+ 处方条目的结构化收集、双语翻译、安全审校与每日 06:01 自动整理。',
    browse: '浏览处方样例', agentWorld: '加入 Agent World', contactTitle: '购买咨询',
    contactText: '各种中医药处方购买 QQ + V 信：12762680',
    medicalWarning: '处方仅供资料研究，不能直接套用，须由合格中医师辨证指导。',
    safetyTitle: '安全与合规提示',
    safetyText: '中医讲究辨证论治；含毒性、妊娠禁忌、儿童剂量、肝肾功能异常或与西药同用的处方，必须经专业人员审核。',
    metricSpecialties: '专科领域', metricDiseases: '常见病与疑难病', metricFormulas: '处方条目目标', metricSchedule: '每日自动整理',
    metricReviewed: '已审校样例', metricHighRisk: '高风险待审', metricProviders: 'AI 来源',
    catalogEyebrow: '处方库结构', catalogTitle: '中医药特效处方收集样例', searchPlaceholder: '搜索疾病、专科、证型、功效...',
    allSpecialties: '全部专科', allRisks: '全部风险', aiEyebrow: 'AI API 免费额度', aiTitle: '全球主流 AI 系统 API 免费/试用政策',
    verifyBadge: '需每日核验', reportTitle: '最近一次自动整理', footer: '© TCM Skill · 资料研究用途 · 请遵守当地医疗、广告、药品与版权法规。',
    pattern: '辨证要点', summary: '概要', composition: '处方组成', method: '用法采集', effect: '功效', caseNote: '医案', caution: '注意事项', source: '来源',
    reviewStatus: '审校状态', riskLevel: '风险等级', updatedAt: '更新日期', lastVerified: '核验日期', noResults: '没有符合条件的处方样例，请调整搜索或筛选。',
    statuses: { unreviewed: '未审校', source_verified: '来源已核验', safety_reviewed: '安全已审校', clinician_reviewed: '医师已审校' },
    risks: { low: '低', medium: '中', high: '高', critical: '关键' }
  },
  en: {
    eyebrow: 'TCM Special Prescriptions · Collection Skill · Website App',
    title: 'A website app for Traditional Chinese Medicine prescriptions',
    subtitle: 'Structured collection, bilingual translation, safety review, and daily 06:01 automation for 16 specialties, 360+ conditions, and a 2000+ prescription target.',
    browse: 'Browse examples', agentWorld: 'Join Agent World', contactTitle: 'Purchase inquiry',
    contactText: 'TCM prescription purchases: QQ + WeChat 12762680',
    medicalWarning: 'For research only. Do not copy prescriptions directly; consult a qualified TCM clinician for pattern differentiation.',
    safetyTitle: 'Safety and compliance',
    safetyText: 'TCM requires pattern differentiation. Toxic herbs, pregnancy, pediatric dosing, liver/kidney impairment, and herb-drug combinations require professional review.',
    metricSpecialties: 'Specialties', metricDiseases: 'Conditions', metricFormulas: 'Prescription target', metricSchedule: 'Daily automation',
    metricReviewed: 'Reviewed examples', metricHighRisk: 'High-risk review', metricProviders: 'AI sources',
    catalogEyebrow: 'Catalog structure', catalogTitle: 'TCM prescription collection examples', searchPlaceholder: 'Search disease, specialty, pattern, action...',
    allSpecialties: 'All specialties', allRisks: 'All risks', aiEyebrow: 'AI API free quotas', aiTitle: 'Free/trial policies for major AI APIs',
    verifyBadge: 'Verify daily', reportTitle: 'Latest automated collection', footer: '© TCM Skill · Research use only · Follow local medical, advertising, drug, and copyright laws.',
    pattern: 'Pattern differentiation', summary: 'Summary', composition: 'Composition', method: 'Collection method', effect: 'Actions', caseNote: 'Case note', caution: 'Cautions', source: 'Source',
    reviewStatus: 'Review status', riskLevel: 'Risk level', updatedAt: 'Updated', lastVerified: 'Verified', noResults: 'No prescription examples match the current filters.',
    statuses: { unreviewed: 'Unreviewed', source_verified: 'Source verified', safety_reviewed: 'Safety reviewed', clinician_reviewed: 'Clinician reviewed' },
    risks: { low: 'Low', medium: 'Medium', high: 'High', critical: 'Critical' }
  }
};

let lang = 'zh';
const $ = (selector) => document.querySelector(selector);
const data = window.TCM_DATA;

function t(key) { return i18n[lang][key] || key; }
function localized(value) { return typeof value === 'object' ? value[lang] : value; }
function statusLabel(status) { return i18n[lang].statuses[status] || status; }
function riskLabel(risk) { return i18n[lang].risks[risk] || risk; }

function renderText() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  $('#langToggle').textContent = lang === 'zh' ? 'English' : '中文';
}

function renderStats() {
  const reviewed = data.prescriptions.filter((item) => ['safety_reviewed', 'clinician_reviewed'].includes(item.reviewStatus)).length;
  const highRisk = data.prescriptions.filter((item) => ['high', 'critical'].includes(item.riskLevel)).length;
  $('#reviewedMetric').textContent = reviewed;
  $('#highRiskMetric').textContent = highRisk;
  $('#providerMetric').textContent = data.aiProviders.length;
}

function renderFilters() {
  const specialties = [...new Map(data.prescriptions.map((item) => [localized(item.specialty), item.specialty])).values()];
  $('#specialtyFilter').innerHTML = [`<option value="">${t('allSpecialties')}</option>`]
    .concat(specialties.map((specialty) => `<option value="${localized(specialty)}">${localized(specialty)}</option>`))
    .join('');
  $('#riskFilter').innerHTML = [`<option value="">${t('allRisks')}</option>`]
    .concat(['low', 'medium', 'high', 'critical'].map((risk) => `<option value="${risk}">${riskLabel(risk)}</option>`))
    .join('');
}

function selectedRecords() {
  const query = $('#search').value.trim().toLowerCase();
  const specialty = $('#specialtyFilter').value;
  const risk = $('#riskFilter').value;
  return data.prescriptions.filter((item) => {
    const matchesQuery = JSON.stringify(item).toLowerCase().includes(query);
    const matchesSpecialty = !specialty || localized(item.specialty) === specialty;
    const matchesRisk = !risk || item.riskLevel === risk;
    return matchesQuery && matchesSpecialty && matchesRisk;
  });
}

function renderPrescriptions() {
  const items = selectedRecords();
  if (!items.length) {
    $('#prescriptionList').innerHTML = `<p class="empty">${t('noResults')}</p>`;
    return;
  }
  $('#prescriptionList').innerHTML = items.map((item) => `
    <article class="rx-card ${item.riskLevel}">
      <div class="rx-top">
        <span>${localized(item.specialty)}</span>
        <strong>${localized(item.disease)}</strong>
      </div>
      <div class="meta-row">
        <b>${t('reviewStatus')}: ${statusLabel(item.reviewStatus)}</b>
        <b>${t('riskLevel')}: ${riskLabel(item.riskLevel)}</b>
        <b>${t('updatedAt')}: ${item.updatedAt}</b>
      </div>
      <dl>
        <dt>${t('pattern')}</dt><dd>${localized(item.pattern)}</dd>
        <dt>${t('summary')}</dt><dd>${localized(item.summary)}</dd>
        <dt>${t('composition')}</dt><dd>${localized(item.composition)}</dd>
        <dt>${t('method')}</dt><dd>${localized(item.method)}</dd>
        <dt>${t('effect')}</dt><dd>${localized(item.effect)}</dd>
        <dt>${t('caseNote')}</dt><dd>${localized(item.caseNote)}</dd>
        <dt>${t('caution')}</dt><dd>${localized(item.caution)}</dd>
        <dt>${t('source')}</dt><dd>${localized(item.source)}</dd>
      </dl>
    </article>`).join('');
}

function renderAiProviders() {
  $('#aiList').innerHTML = data.aiProviders.map((provider) => `
    <article class="ai-card">
      <h3>${provider.name}</h3>
      <p>${provider.free}</p>
      <div class="meta-row compact"><b>${t('lastVerified')}: ${provider.lastVerified}</b><b>${provider.status}</b></div>
      <a href="${provider.url}" target="_blank" rel="noreferrer">${t('source')}</a>
    </article>`).join('');
}

async function renderReport() {
  try {
    const response = await fetch('data/daily-report.json', { cache: 'no-store' });
    const report = await response.json();
    $('#dailyReport').textContent = JSON.stringify(report, null, 2);
  } catch (error) {
    $('#dailyReport').textContent = lang === 'zh' ? '尚未生成自动整理报告。' : 'No automated report has been generated yet.';
  }
}

function renderAll({ rebuildFilters = false } = {}) {
  renderText();
  renderStats();
  if (rebuildFilters) renderFilters();
  renderPrescriptions();
  renderAiProviders();
  renderReport();
}

$('#langToggle').addEventListener('click', () => {
  lang = lang === 'zh' ? 'en' : 'zh';
  renderAll({ rebuildFilters: true });
});
['search', 'specialtyFilter', 'riskFilter'].forEach((id) => $(`#${id}`).addEventListener('input', renderPrescriptions));

renderAll({ rebuildFilters: true });
