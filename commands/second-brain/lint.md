---
description: Check vault health and propose fixes.
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. style.md wins for soft writing rules; hard safety and product rules from SKILL.md still apply.

Run a vault health check. Propose fixes and ask before applying them.

Check for duplicates, broken links, orphan pages, contradictions, and stale claims. Treat `questions.md` gently: flag issues but do not auto-rewrite user-written questions. Append a structured `/second-brain lint` entry to `log.md` only if changes are applied.
