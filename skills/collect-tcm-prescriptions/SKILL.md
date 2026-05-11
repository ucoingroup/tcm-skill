---
name: collect-tcm-prescriptions
description: Collect, normalize, translate, deduplicate, safety-review, and publish Traditional Chinese Medicine prescription records. Use when Codex needs to build or maintain a TCM prescription database or website, extract structured fields from Chinese/English medical sources, prepare bilingual prescription cards, verify AI API free-quota sources for automated collection, create daily 06:01 reports, validate record schemas, or add compliance warnings for TCM formula content.
---

# Collect TCM Prescriptions

## Core workflow

1. **Confirm scope**: identify specialty, disease, source type, language, and whether the task is collection, translation, deduplication, safety review, website/app output, or automation.
2. **Verify source eligibility**: prefer licensed databases, public-domain classics, official clinical references, or user-provided documents. Read `references/source-policy.md` before ingesting copyrighted or web content.
3. **Extract standard fields**: use `references/schema.md` for every prescription record. Reject or queue incomplete records instead of guessing doses or indications.
4. **Normalize and deduplicate**: keep Chinese herb names as primary labels; preserve processing terms such as 炙、炒、煅、酒洗. Deduplicate by disease + pattern + formula name + source.
5. **Safety screen**: apply `references/safety.md` before presenting a formula. For hemorrhoids, also read `references/hemorrhoids.md`; for loose wellness floral tea, read `references/wellness-tea.md`. Flag toxic herbs, pregnancy/children risks, dose uncertainty, herb-drug interactions, and red-flag symptoms.
6. **Translate bilingually**: use `references/translation.md` for terminology rules. Avoid implying a direct clinical recommendation.
7. **Cite provenance**: include source title/URL, edition/date, page/section when available, extraction date, license/permission status, and review status.
8. **Publish with disclaimer**: state that formulas are for research/reference only and require qualified TCM clinician guidance.

## Automation workflow

- Use repository `scripts/collect_daily.py` to generate the daily collection status report.
- Use repository `scripts/validate_app_data.mjs` after editing website data.
- Use skill `scripts/collect_prescriptions.py` to create a blank bilingual record template.
- Schedule daily collection at 06:01 in the target timezone. If using GitHub Actions cron, document that cron is UTC unless converted.
- Refresh AI API free-quota information from official provider documentation daily; quotas change frequently and must be marked as needing verification.
- Store raw source metadata separately from reviewed prescription records.

## Output rules

- Use tables or structured JSON for large batches.
- Mark each record as one of: `unreviewed`, `source_verified`, `safety_reviewed`, `clinician_reviewed`.
- Mark each record risk as one of: `low`, `medium`, `high`, `critical`.
- Never tell users to self-medicate, replace professional diagnosis, or stop conventional treatment.
- For urgent symptoms, advise immediate medical care rather than formula selection.
