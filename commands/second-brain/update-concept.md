---
description: Update an existing concept page from the current conversation.
argument-hint: "[optional name]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. If they conflict with these instructions, style.md wins.

Update an existing concept using the current conversation. The name is optional context only; infer the target concept from the current conversation when no name is provided.

Steps:
1. Resolve the active vault and configured concepts folder.
2. Read `compiled/index.md` and likely matching concept pages.
3. If the target cannot be inferred confidently, ask which file to update.
4. Merge new claims, citations, and links into the existing page.
5. Preserve the concept page's Feynman-style clarity: simple, intuitive, concrete, and concise.
6. Preserve user-written content and never silently delete material.
7. Update `updated:` frontmatter.
8. Update `compiled/index.md` if the summary changed.
9. Append a structured `/second-brain update-concept` entry to `log.md`.
