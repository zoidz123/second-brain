# Install

Second Brain is packaged as one self-contained agent skill:

```text
skills/second-brain/
  SKILL.md
  references/
    commands/
    aliases/
  assets/
    vault/
```

The files under `skills/second-brain/` are the source of truth. Platform adapters point to that folder.

## Codex

Clone the repo and symlink the skill folder into Codex's discovered skills directory:

```bash
git clone https://github.com/<your-user>/second-brain.git ~/.codex/second-brain
mkdir -p ~/.agents/skills
ln -s ~/.codex/second-brain/skills/second-brain ~/.agents/skills/second-brain
```

Restart Codex so it discovers:

```text
~/.agents/skills/second-brain/SKILL.md
```

If slash commands do not appear in your agent UI, invoke the skill with natural language:

```text
Use second-brain to show help.
Use second-brain to initialize a research vault.
Use second-brain to save this conversation as a concept.
```

## Claude / Claude Code

Symlink the same skill folder into Claude's skills directory:

```bash
git clone https://github.com/<your-user>/second-brain.git ~/second-brain
mkdir -p ~/.claude/skills
ln -s ~/second-brain/skills/second-brain ~/.claude/skills/second-brain
```

If you want Claude slash commands too, generate them from the skill references:

```bash
mkdir -p ~/.claude/commands/second-brain
cp ~/second-brain/skills/second-brain/references/commands/*.md ~/.claude/commands/second-brain/
cp ~/second-brain/skills/second-brain/references/aliases/*.md ~/.claude/commands/
```

Those generated command files are adapters. The source of truth remains `skills/second-brain/`.

## Cursor

Cursor does not natively consume this skill format the same way Codex and Claude do. Use the Cursor adapter guidance:

```text
adapters/cursor/INSTALL.md
```

## OpenCode

Use the OpenCode adapter guidance:

```text
adapters/opencode/INSTALL.md
```

## First-Run Check

After installation, run:

```bash
npm test
```

Then test a new vault:

1. Run `/second-brain init test`.
2. Confirm the agent created `~/SecondBrain/test/style.md`.
3. Edit `style.md`.
4. Drop a file in `inbox/`.
5. Run `/second-brain process`.
6. Have a short conversation and run `/second-brain save-concept`.
