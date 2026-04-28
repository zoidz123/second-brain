---
description: Save an opinion page from the current conversation.
argument-hint: "[optional hint]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. If they conflict with these instructions, style.md wins.

Synthesize an opinion from the current conversation. The hint is optional context only; infer the opinion from the current conversation when no hint is provided.

Steps:
1. Resolve the active vault and configured opinions folder.
2. Read `compiled/index.md` and relevant existing opinion pages to avoid duplicates.
3. Infer a title and slug from the current conversation.
4. If the target file exists, follow `behaviors.save_collision`: ask, merge, or new.
5. Write an opinion page that preserves the user's stance, includes confidence when appropriate, and follows `style.md`.
6. Cite source-derived claims, mark user notes, and mark background synthesis.
7. If `links.auto_link` is true, add cross-links to matching compiled pages.
8. Update `compiled/index.md`.
9. Append a structured `/second-brain save-opinion` entry to `log.md`.
