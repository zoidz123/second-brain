---
description: Save a factual concept page from the current conversation.
argument-hint: "[optional hint]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. If they conflict with these instructions, style.md wins.

Synthesize a concept from the current conversation. The hint is optional context only; infer the concept from the current conversation when no hint is provided.

Steps:
1. Resolve the active vault and configured concepts folder.
2. Read `compiled/index.md` and relevant existing concept pages to avoid duplicates.
3. Infer a title and slug from the current conversation.
4. If the target file exists, follow `behaviors.save_collision`: ask, merge, or new.
5. Write a factual concept page with frontmatter, source attribution, and no first-person opinion.
6. Cite `inbox/` sources for sourced claims, mark user notes, and mark background synthesis.
7. If `links.auto_link` is true, add cross-links to matching compiled pages.
8. Update `compiled/index.md`.
9. Append a structured `/second-brain save-concept` entry to `log.md`.
