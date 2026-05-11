#!/usr/bin/env python3
"""Generate the daily TCM prescription collection status report.

This script records source metadata, review gates, and automation status instead
of copying copyrighted prescription text. Licensed-source ingestion can append
structured records after human review.
"""
from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPORT = ROOT / "data" / "daily-report.json"

TCM_SECTIONS = [
    "神经系统", "循环系统", "消化系统", "呼吸系统", "泌尿生殖系统", "妇科", "儿科", "肿瘤防治", "养生长寿方", "肛肠科/痔疮专题", "散装养生花茶专题"
]
ENTRY_SCHEMA = ["概要", "处方组成", "用法", "功效", "医案", "注意事项", "来源", "审校状态"]
QUALITY_GATES = [
    "source_present",
    "copyright_permission_checked",
    "pattern_differentiation_present",
    "dose_units_present_or_redacted",
    "toxic_or_restricted_herbs_flagged",
    "pregnancy_pediatric_elderly_flags_checked",
    "herb_drug_interactions_checked",
    "red_flag_symptoms_checked",
]
AI_SOURCES = [
    {"provider": "Google Gemini API", "url": "https://ai.google.dev/gemini-api/docs/rate-limits"},
    {"provider": "Mistral AI La Plateforme", "url": "https://help.mistral.ai/en/articles/450104-how-can-i-try-the-api-for-free-with-the-experiment-plan"},
    {"provider": "GroqCloud", "url": "https://console.groq.com/docs/rate-limits"},
    {"provider": "OpenRouter", "url": "https://openrouter.ai/docs/api/reference/limits"},
    {"provider": "Hugging Face Inference Providers", "url": "https://huggingface.co/docs/hub/models-inference"},
    {"provider": "NVIDIA NIM", "url": "https://www.nvidia.com/en-us/ai-data-science/products/nim-microservices/"},
    {"provider": "AI21 Studio", "url": "https://www.ai21.com/pricing"},
    {"provider": "Cohere", "url": "https://docs.cohere.com/"},
    {"provider": "Anthropic Claude API", "url": "https://support.anthropic.com/en/articles/8977456-how-do-i-pay-for-my-api-usage"},
    {"provider": "OpenAI API", "url": "https://help.openai.com/"},
]


def main() -> None:
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
    report = {
        "generated_at": now,
        "schedule": "06:01 UTC daily",
        "status": "ready_for_review",
        "collection_scope": {
            "target_prescriptions": "2000+",
            "target_diseases": "360+",
            "specialty_sections": TCM_SECTIONS,
        },
        "workflow": [
            "collect_source_metadata",
            "extract_structured_fields",
            "deduplicate_by_disease_pattern_formula_source",
            "translate_bilingually",
            "run_safety_review",
            "queue_clinician_review_when_high_risk",
            "publish_only_reviewed_or_clearly_marked_reference_records",
            "update_condition_guides_such_as_hemorrhoids",
            "update_loose_wellness_floral_tea_catalog_and_100_faqs",
        ],
        "entry_schema": ENTRY_SCHEMA,
        "quality_gates": QUALITY_GATES,
        "compliance": [
            "不直接复制受版权保护书籍全文或大段处方内容",
            "标注来源、版本、页码或 URL",
            "含毒性/禁忌/儿童/孕产妇/肝肾异常条目必须人工审校",
            "仅供资料研究，临床使用需合格中医师辨证指导",
            "不作治愈承诺，不替代线下诊断和急症处理",
        ],
        "ai_api_sources_to_verify": AI_SOURCES,
    }
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {REPORT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
