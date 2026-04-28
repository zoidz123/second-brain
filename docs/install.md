# Install

Second Brain keeps generic source files in this repo:

- `SKILL.md`: shared agent instructions.
- `commands/second-brain/`: canonical command specs.
- `commands/aliases/`: short alias specs.
- `templates/vault/`: files copied into user vaults.

Different agent runtimes can adapt those files into their own command/plugin formats. The source of truth stays generic.

## Codex

Use this repo as a local skill source by copying or symlinking it into the Codex-discovered skills directory.

Suggested local install:

```bash
git clone https://github.com/<your-user>/second-brain.git ~/.codex/second-brain
mkdir -p ~/.agents/skills
ln -s ~/.codex/second-brain ~/.agents/skills/second-brain
```

Restart Codex so it discovers `~/.agents/skills/second-brain/SKILL.md`.

Then invoke the skill by asking Codex to use Second Brain commands. If your Codex setup supports command imports, map:

- `commands/second-brain/*.md` to long commands.
- `commands/aliases/*.md` to short commands.

## Claude / Claude Code

Claude-specific command folders can be generated from `commands/`, but they are not the source of truth.

Suggested local command adapter:

```bash
mkdir -p .claude/commands/second-brain
cp commands/second-brain/*.md .claude/commands/second-brain/
cp commands/aliases/*.md .claude/commands/
```

Keep generated `.claude/` files out of this repo unless you are intentionally adding a Claude adapter.

## Cursor / Other Agents

Import or reference:

- root `SKILL.md` for global behavior
- `commands/second-brain/` for canonical commands
- `commands/aliases/` for short aliases

If the agent has no slash-command system, paste or reference the relevant command markdown when asking it to act.

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
