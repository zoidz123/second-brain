---
description: Update an existing opinion page from the current conversation.
argument-hint: "[optional name]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. If they conflict with these instructions, style.md wins.

Update an existing opinion using the current conversation. The name is optional context only; infer the target opinion from the current conversation when no name is provided.

Steps:
1. Resolve the active vault and configured opinions folder.
2. Read `compiled/index.md` and likely matching opinion pages.
3. If the target cannot be inferred confidently, ask which file to update.
4. Merge the user's current stance, changed confidence, citations, and links into the existing page.
5. Preserve user-written content and never silently delete material.
6. Update `updated:` frontmatter.
7. Update `compiled/index.md` if the summary changed.
8. Append a structured `/second-brain update-opinion` entry to `log.md`.
