---
description: Switch the active Second Brain vault.
argument-hint: "<name>"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. If they conflict with these instructions, style.md wins.

Set the active vault in `~/.second-brain/config.json`. The vault name is required because switching without a target is ambiguous. Confirm the target exists before updating the registry.
