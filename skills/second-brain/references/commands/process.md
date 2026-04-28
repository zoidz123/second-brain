---
description: Reconcile inbox/index.md with files in inbox.
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. style.md wins for soft writing rules; hard safety and product rules from SKILL.md still apply.

Run the inbox janitor only. Do not distill anything.

Steps:
1. Resolve the active vault.
2. List files in the configured inbox folder, ignoring `index.md` and configured ignored paths.
3. Read `inbox/index.md`.
4. Add entries for new files with AI-assigned category, filename, capture date, and one-line description.
5. For entries whose files are no longer present, follow `behaviors.process_missing`:
   - `mark-missing` default: keep the entry and mark it missing.
   - `ask`: ask before changing the entry.
   - `remove`: remove the entry.
6. Leave existing present-file entries untouched, including user-edited categories.
7. Append a structured `/second-brain process` entry to `log.md`.
