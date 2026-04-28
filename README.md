# Second Brain

An agent skill for building a local markdown second brain.

It is an opinionated implementation of Andrej Karpathy's [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) pattern: raw sources go in, an agent maintains a structured wiki of durable markdown pages.

Second Brain makes that pattern installable as a skill for agents that support `SKILL.md`.

## What It Does

- Keeps raw sources in `inbox/`
- Saves concepts, opinions, questions, and digests into `compiled/`
- Uses `style.md` so each vault can have its own writing behavior
- Writes concise concept pages with `TL;DR`, `Simple Overview`, and `Why This Matters`
- Preserves the user's actual opinions instead of turning them into AI slop

## Install

Codex:

```bash
git clone https://github.com/zoidz123/second-brain.git ~/.codex/second-brain
mkdir -p ~/.agents/skills
ln -s ~/.codex/second-brain/skills/second-brain ~/.agents/skills/second-brain
```

Claude:

```bash
git clone https://github.com/zoidz123/second-brain.git ~/second-brain
mkdir -p ~/.claude/skills
ln -s ~/second-brain/skills/second-brain ~/.claude/skills/second-brain
```

More: [docs/install.md](docs/install.md)

## Commands

```text
/second-brain init [name]          /sb-init
/second-brain process              /sb-process
/second-brain save-concept [hint]  /sb-concept
/second-brain save-opinion [hint]  /sb-opinion
/second-brain save-question [hint] /sb-question
/second-brain update-concept [name]
/second-brain update-opinion [name]
/second-brain recall <query>
/second-brain review
/second-brain lint
/second-brain digest [period]
```

Only `recall` requires an argument. Everything else should infer from the current conversation unless you provide an optional hint.

## Layout

Installable skill: `skills/second-brain/SKILL.md`

```text
skills/second-brain/
  SKILL.md
  references/commands/
  references/aliases/
  assets/vault/
```

The user vault created by `/init` looks like:

```text
~/SecondBrain/<vault>/
  inbox/
  compiled/
  style.md
  .second-brain.yml
  log.md
```

## Verify

```bash
npm test
```
