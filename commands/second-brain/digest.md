---
description: Generate a periodic Second Brain digest.
argument-hint: "[period]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. style.md wins for soft writing rules; hard safety and product rules from SKILL.md still apply.

Generate a digest from recent vault activity. The period is optional; default to weekly. Supported hints include `daily`, `weekly`, `monthly`, or `<N>d`.

Steps:
1. Resolve the active vault and configured digest folder.
2. Read `log.md`, `inbox/index.md`, `compiled/index.md`, and relevant recent pages.
3. Synthesize new sources, growing concepts, evolving opinions, and open questions.
4. Write `compiled/digests/<date>.md` with digest frontmatter.
5. Update `compiled/index.md`.
6. Append a structured `/second-brain digest` entry to `log.md`.
