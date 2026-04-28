# Cursor Adapter

Cursor's primary project mechanism is rules, not `SKILL.md` skill discovery.

Recommended use:

1. Clone this repo.
2. Add a Cursor project rule that tells Cursor to follow:

```text
skills/second-brain/SKILL.md
```

3. When invoking a command, reference the relevant command file under:

```text
skills/second-brain/references/commands/
```

For a project-local rule, create `.cursor/rules/second-brain.mdc` in the project where you want to use the vault workflow and point it at this skill.

This adapter is intentionally minimal until Cursor has a native skill-package install path for this format.
