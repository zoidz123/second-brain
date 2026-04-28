# OpenCode Adapter

OpenCode supports plugin-based installs. This repo currently ships the skill package, not a full OpenCode plugin.

Recommended v1 use:

1. Clone this repo.
2. Configure OpenCode to load or reference:

```text
skills/second-brain/SKILL.md
```

3. Reference command specs from:

```text
skills/second-brain/references/commands/
```

A future OpenCode plugin can wrap this same skill folder. The source of truth should remain `skills/second-brain/`.
