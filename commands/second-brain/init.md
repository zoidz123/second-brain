---
description: Scaffold a Second Brain vault.
argument-hint: "[name]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config when a vault already exists.
2. Read `style.md` from the active vault root for behavioral rules when a vault already exists.
3. Apply both. style.md wins for soft writing rules; hard safety and product rules from SKILL.md still apply.

Initialize a vault named by the optional argument, defaulting to `default`.

Steps:
1. Create `~/SecondBrain/<name>/`.
2. Create `inbox/`, `compiled/concepts/`, `compiled/opinions/`, and `compiled/digests/`.
3. Copy templates from `templates/vault/` into the vault using this mapping:
   - `.second-brain.yml` -> `.second-brain.yml`
   - `style.md.template` -> `style.md`
   - `README.md.template` -> `README.md`
   - `inbox-index.md` -> `inbox/index.md`
   - `compiled-index.md` -> `compiled/index.md`
   - `questions.md` -> `compiled/questions.md`
   - `log.md` -> `log.md`
4. Register the vault in `~/.second-brain/config.json` and set it active.
5. Stop if that vault name is already registered.
6. After creating the vault, tell the user the exact path to `style.md` and explain that it controls vault-local writing behavior.
7. Append a structured `/second-brain init` entry to `log.md`.
