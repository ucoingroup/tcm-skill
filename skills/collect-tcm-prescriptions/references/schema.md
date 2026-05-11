# Prescription record schema

Required fields:

- `id`: stable slug or database ID.
- `specialty`: one of the project specialty sections, e.g. 呼吸系统, 消化系统, 妇科, 儿科, 肿瘤防治, 养生长寿方.
- `disease_zh` / `disease_en`: disease or condition label.
- `pattern_zh` / `pattern_en`: TCM pattern differentiation, not optional for clinical-style records.
- `overview`: concise disease/pattern summary.
- `formula_name`: formula or prescription name when available.
- `composition`: herb list with dose, unit, processing, and role if known.
- `method`: preparation, decoction, route, timing, course, and modification rules.
- `actions`: TCM effects/functions.
- `case_record`: case summary; omit personal identifiers.
- `cautions`: contraindications, toxicity, interactions, population risks, red flags.
- `source`: title, author/editor, edition/date, URL/page/section, license/permission status.
- `language`: `zh`, `en`, or `bilingual`.
- `review_status`: `unreviewed`, `source_verified`, `safety_reviewed`, or `clinician_reviewed`.
- `risk_level`: `low`, `medium`, `high`, or `critical`. Use `critical` for oncology, toxic herbs, emergency red flags, or likely interactions with major therapies.
- `updated_at`: ISO 8601 timestamp.

Recommended validation:

- Reject records without a source.
- Flag records with dose ranges but no units.
- Flag records containing toxic or restricted herbs for manual review.
- Flag records that present modern disease names without TCM pattern differentiation.


Deduplication key:

```text
disease_zh + pattern_zh + formula_name.zh + source.title + source.page_or_section
```

Records with the same formula but different pattern, source, or safety status should remain separate until reviewed.
