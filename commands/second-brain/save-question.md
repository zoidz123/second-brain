---
description: Append a question inferred from the current conversation.
argument-hint: "[optional hint]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. If they conflict with these instructions, style.md wins.

Append a question to `compiled/questions.md`. The hint is optional context only; infer the question from the current conversation when no hint is provided.

Steps:
1. Resolve the active vault and configured questions file.
2. Infer the open question from the current conversation, or use the optional hint when it is explicit.
3. Append a dated question entry. Do not rewrite existing entries.
4. Update `compiled/index.md` if needed.
5. Append a structured `/second-brain save-question` entry to `log.md`.
