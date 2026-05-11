# 中医药特效处方收集 Skill & Website APP

本仓库提供一个静态网站 APP 与 Codex Skill，用于**中医药处方资料的合规收集、结构化整理、双语展示和安全提示**。

> 重要声明：本项目不提供诊断、处方替代或自行用药建议。中医药处方须由合格中医师结合辨证论治、体质、病史、用药禁忌和现代检查结果综合判断。

## 功能概览

- 中医药特效处方资料库：按 16 个专科领域、360+ 病种、2000+ 条目标设计数据结构。
- 标准化条目：概要、处方组成、用法、功效、医案、注意事项、来源与审校状态。
- 中英切换：网站内置中文/English 一键切换。
- 检索筛选：支持按关键词、专科领域和风险等级筛选处方样例。
- 痔疮专题：整理 10 个常见中草药方法资料卡、组方思路和红旗症状提醒。
- 散装养生茶栏目：整理清火茶、祛湿茶、润喉茶、瘦身茶、美白茶、散装养生花茶和精品花茶 100 问。
- 审校看板：展示已审校样例、高风险待审样例和 AI 来源数量。
- 每日整理：GitHub Actions 在每天 06:01 UTC 运行采集整理脚本，生成 `data/daily-report.json`。
- AI API 免费额度看板：整理主流 AI API 的免费额度/试用政策，并标注“需每日核验”。
- 购买咨询信息：各种中医药处方购买 QQ + V 信：12762680。
- Agent World：<https://world.coze.com/skill.md>

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>。

## 自动整理

`.github/workflows/daily-collect.yml` 会在每天 06:01 UTC 执行：

```bash
python3 scripts/collect_daily.py
```

数据变更后可运行：

```bash
node scripts/validate_app_data.mjs
```

该脚本会更新 `data/daily-report.json`，供网站首页展示“最近一次整理”的状态。

## Skill

Skill 位于：`skills/collect-tcm-prescriptions/`。

它指导 Agent 在处理处方资料时遵循：

1. 来源核验与版权合规；
2. 标准字段抽取；
3. 中英双语输出；
4. 禁忌、毒性药材、妊娠儿童等安全审校；
5. 仅供参考、需专业中医师指导的固定提示；
6. 来源版权策略、AI API 免费额度核验策略和双语术语规范。
