#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../app/data.js', import.meta.url), 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context, { filename: 'app/data.js' });

const data = context.window.TCM_DATA;
const requiredPrescriptionFields = [
  'id', 'specialty', 'disease', 'pattern', 'summary', 'composition', 'method',
  'effect', 'caseNote', 'caution', 'source', 'reviewStatus', 'riskLevel', 'updatedAt'
];
const requiredLocalizedFields = ['specialty', 'disease', 'pattern', 'summary', 'composition', 'method', 'effect', 'caseNote', 'caution', 'source'];
const allowedStatuses = new Set(['unreviewed', 'source_verified', 'safety_reviewed', 'clinician_reviewed']);
const allowedRisks = new Set(['low', 'medium', 'high', 'critical']);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(data && Array.isArray(data.prescriptions), 'window.TCM_DATA.prescriptions must be an array');
assert(data.prescriptions.length >= 5, 'expected at least five prescription templates');
assert(Array.isArray(data.aiProviders), 'window.TCM_DATA.aiProviders must be an array');
assert(data.aiProviders.length >= 10, 'expected at least ten AI provider sources');

assert(Array.isArray(data.wellnessTeaSources), 'window.TCM_DATA.wellnessTeaSources must be an array');
assert(data.wellnessTeaSources.length >= 2, 'expected at least two wellness tea source links');
assert(Array.isArray(data.wellnessTeaBlends), 'window.TCM_DATA.wellnessTeaBlends must be an array');
assert(data.wellnessTeaBlends.length >= 6, 'expected at least six wellness tea blend cards');
assert(Array.isArray(data.wellnessTeaFaqs), 'window.TCM_DATA.wellnessTeaFaqs must be an array');
assert(data.wellnessTeaFaqs.length === 100, 'expected exactly 100 wellness tea FAQs');

for (const [index, item] of data.wellnessTeaBlends.entries()) {
  for (const field of ['id', 'name', 'positioning', 'commonMaterials', 'brew', 'cautions']) assert(field in item, `wellnessTeaBlends[${index}] missing ${field}`);
  for (const field of ['name', 'positioning', 'commonMaterials', 'brew', 'cautions']) {
    assert(item[field]?.zh && item[field]?.en, `wellness tea blend ${item.id} field ${field} must be bilingual`);
  }
}

const faqIds = new Set();
for (const [index, item] of data.wellnessTeaFaqs.entries()) {
  for (const field of ['id', 'category', 'question', 'answer']) assert(field in item, `wellnessTeaFaqs[${index}] missing ${field}`);
  assert(!faqIds.has(item.id), `duplicate wellness tea FAQ id: ${item.id}`);
  faqIds.add(item.id);
  for (const field of ['category', 'question', 'answer']) {
    assert(item[field]?.zh && item[field]?.en, `wellness tea FAQ ${item.id} field ${field} must be bilingual`);
  }
}


assert(Array.isArray(data.hemorrhoidMethods), 'window.TCM_DATA.hemorrhoidMethods must be an array');
assert(data.hemorrhoidMethods.length === 10, 'expected exactly ten hemorrhoid herbal method cards');
assert(Array.isArray(data.hemorrhoidFormulaNotes), 'window.TCM_DATA.hemorrhoidFormulaNotes must be an array');
assert(data.hemorrhoidFormulaNotes.length >= 3, 'expected at least three hemorrhoid formula notes');
assert(data.hemorrhoidSafety?.zh && data.hemorrhoidSafety?.en, 'hemorrhoidSafety must be bilingual');

const methodRanks = new Set();
for (const [index, item] of data.hemorrhoidMethods.entries()) {
  for (const field of ['rank', 'herb', 'role', 'scenario', 'usage', 'cautions', 'sourceType']) assert(field in item, `hemorrhoidMethods[${index}] missing ${field}`);
  assert(Number.isInteger(item.rank) && item.rank >= 1 && item.rank <= 10, `invalid hemorrhoid method rank at index ${index}`);
  assert(!methodRanks.has(item.rank), `duplicate hemorrhoid method rank ${item.rank}`);
  methodRanks.add(item.rank);
  for (const field of ['herb', 'role', 'scenario', 'usage', 'cautions', 'sourceType']) {
    assert(item[field]?.zh && item[field]?.en, `hemorrhoid method ${item.rank} field ${field} must be bilingual`);
  }
}

const ids = new Set();
for (const [index, item] of data.prescriptions.entries()) {
  for (const field of requiredPrescriptionFields) assert(field in item, `prescription[${index}] missing ${field}`);
  assert(!ids.has(item.id), `duplicate prescription id: ${item.id}`);
  ids.add(item.id);
  for (const field of requiredLocalizedFields) {
    assert(item[field] && item[field].zh && item[field].en, `prescription ${item.id} field ${field} must be bilingual`);
  }
  assert(allowedStatuses.has(item.reviewStatus), `invalid reviewStatus for ${item.id}`);
  assert(allowedRisks.has(item.riskLevel), `invalid riskLevel for ${item.id}`);
}

for (const [index, provider] of data.aiProviders.entries()) {
  for (const field of ['name', 'free', 'status', 'lastVerified', 'url']) assert(provider[field], `aiProviders[${index}] missing ${field}`);
  assert(provider.url.startsWith('https://'), `aiProviders[${index}] URL must use https`);
}

console.log(`Validated ${data.prescriptions.length} prescription templates, ${data.hemorrhoidMethods.length} hemorrhoid methods, ${data.wellnessTeaFaqs.length} wellness tea FAQs, and ${data.aiProviders.length} AI providers.`);
