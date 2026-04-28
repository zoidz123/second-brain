---
description: Scaffold a Second Brain vault.
argument-hint: "[name]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config when a vault already exists.
2. Read `style.md` from the active vault root for behavioral rules when a vault already exists.
3. Apply both. If they conflict with these instructions, style.md wins.

Initialize a vault named by the optional argument, defaulting to `default`.

Steps:
1. Create `~/SecondBrain/<name>/`.
2. Create `inbox/`, `compiled/concepts/`, `compiled/opinions/`, and `compiled/digests/`.
3. Copy templates from `templates/vault/` into the vault.
4. Register the vault in `~/.second-brain/config.json` and set it active.
5. Stop if that vault name is already registered.
6. Append a structured `/second-brain init` entry to `log.md`.
