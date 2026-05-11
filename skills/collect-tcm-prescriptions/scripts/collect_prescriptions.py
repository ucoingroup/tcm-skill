#!/usr/bin/env python3
"""Create an empty reviewed-record template for TCM prescription collection."""
from __future__ import annotations

import json
from datetime import datetime, timezone

TEMPLATE = {
    "id": "",
    "specialty": "",
    "disease_zh": "",
    "disease_en": "",
    "pattern_zh": "",
    "pattern_en": "",
    "overview": {"zh": "", "en": ""},
    "formula_name": {"zh": "", "en": ""},
    "composition": [],
    "method": {"zh": "", "en": ""},
    "actions": {"zh": "", "en": ""},
    "case_record": {"zh": "", "en": ""},
    "cautions": {"zh": "", "en": ""},
    "source": {"title": "", "url": "", "page_or_section": "", "license_status": ""},
    "language": "bilingual",
    "review_status": "unreviewed",
    "risk_level": "medium",
    "quality_gates": {
        "source_present": False,
        "copyright_permission_checked": False,
        "pattern_differentiation_present": False,
        "dose_units_present_or_redacted": False,
        "toxic_or_restricted_herbs_flagged": False,
        "pregnancy_pediatric_elderly_flags_checked": False,
        "herb_drug_interactions_checked": False,
        "red_flag_symptoms_checked": False,
    },
    "updated_at": "",
}

TEMPLATE["updated_at"] = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
print(json.dumps(TEMPLATE, ensure_ascii=False, indent=2))
