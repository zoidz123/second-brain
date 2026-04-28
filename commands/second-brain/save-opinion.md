---
description: Save an opinion page from the current conversation.
argument-hint: "[optional hint]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. style.md wins for soft writing rules; hard safety and product rules from SKILL.md still apply.

Synthesize an opinion from the current conversation. The hint is optional context only; infer the opinion from the current conversation when no hint is provided.

Steps:
1. Resolve the active vault and configured opinions folder.
2. Read `compiled/index.md` and relevant existing opinion pages to avoid duplicates.
3. Infer a title and slug from the current conversation.
4. If the target file exists, follow `behaviors.save_collision`: ask, merge, or new.
5. Use the canonical compiled page frontmatter from `SKILL.md`: `type`, `title`, `created`, `updated`, `sources`, `links`, `tags`.
6. Write an opinion page that preserves the user's original opinion, wording, emphasis, and stance as much as possible.
7. Clarify and structure the opinion without turning it into generic analyst voice.
8. Include `## What I Believe`, `## Why I Believe It`, and `## What Would Change My Mind`.
9. In `## Why I Believe It`, reference the evidence, reasons, or source files behind the belief.
10. Avoid generic consultant language and AI slop.
11. Include confidence when appropriate and follow `style.md`.
12. Cite source-derived claims, mark user notes, and mark background synthesis.
13. If `links.auto_link` is true, add cross-links to matching compiled pages.
14. Update `compiled/index.md`.
15. Append a structured `/second-brain save-opinion` entry to `log.md`.
