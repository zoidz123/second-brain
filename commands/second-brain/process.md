---
description: Reconcile inbox/index.md with files in inbox.
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. If they conflict with these instructions, style.md wins.

Run the inbox janitor only. Do not distill anything.

Steps:
1. Resolve the active vault.
2. List files in the configured inbox folder, ignoring `index.md` and configured ignored paths.
3. Read `inbox/index.md`.
4. Add entries for new files with AI-assigned category, filename, capture date, and one-line description.
5. Remove entries for files no longer present.
6. Leave existing entries untouched, including user-edited categories.
7. Append a structured `/second-brain process` entry to `log.md`.
