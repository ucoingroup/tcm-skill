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

console.log(`Validated ${data.prescriptions.length} prescription templates and ${data.aiProviders.length} AI providers.`);
