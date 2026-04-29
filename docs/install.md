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

The files under `skills/second-brain/` are the source of truth. The `adapters/` folder contains runtime-specific notes only.

Clone the repo once:

```bash
git clone https://github.com/zoidz123/second-brain.git ~/second-brain
```

## Claude / Claude Code

Symlink the skill folder into Claude's skills directory:

```bash
mkdir -p ~/.claude/skills
ln -s ~/second-brain/skills/second-brain ~/.claude/skills/second-brain
```

Optional: generate Claude slash commands from the generic command references:

```bash
mkdir -p ~/.claude/commands/second-brain
cp ~/second-brain/skills/second-brain/references/commands/*.md ~/.claude/commands/second-brain/
cp ~/second-brain/skills/second-brain/references/aliases/*.md ~/.claude/commands/
```

## Codex

Symlink the skill folder into Codex's discovered skills directory:

```bash
mkdir -p ~/.agents/skills
ln -s ~/second-brain/skills/second-brain ~/.agents/skills/second-brain
```

Restart Codex so it discovers:

```text
~/.agents/skills/second-brain/SKILL.md
```

## Cursor

Cursor's primary project mechanism is rules, not `SKILL.md` skill discovery.

Recommended use:

1. Clone this repo.
2. Add a Cursor project rule that tells Cursor to follow:

```text
~/second-brain/skills/second-brain/SKILL.md
```

See [adapters/cursor/INSTALL.md](../adapters/cursor/INSTALL.md).

## OpenCode

Recommended use:

1. Clone this repo.
2. Configure OpenCode to load or reference:

```text
~/second-brain/skills/second-brain/SKILL.md
```

See [adapters/opencode/INSTALL.md](../adapters/opencode/INSTALL.md).

## First-Run Check

After installation, run:

```bash
npm test
```

Then test a new vault:

1. Ask: `Initialize a test vault.`
2. Confirm the agent created `~/SecondBrain/test/style.md`.
3. Edit `style.md`.
4. Drop a file in `inbox/`.
5. Ask: `Process my inbox.`
6. Have a short conversation and ask: `Save this conversation as a concept.`
