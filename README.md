# Second Brain

Second Brain is an agent skill pack plus a local markdown vault convention.

It helps you turn conversations about reading and research into durable concept, opinion, question, and digest files. The product is intentionally simple: no app, no daemon, no database. Users keep a normal folder of markdown files and ask the agent to maintain it.

## Vault Layout

```text
~/SecondBrain/<vault>/
  inbox/
    index.md
  compiled/
    index.md
    concepts/
    opinions/
    questions.md
    digests/
  log.md
  style.md
  .second-brain.yml
```

`.second-brain.yml` controls structure: folder paths, frontmatter fields, link style, auto-linking, and save collision behavior.

`style.md` controls behavior: tone, formatting, citation expectations, and domain conventions. Every command reads it before acting, and the user edits the vault-local copy.

Default writing style:

- Concepts use the Feynman technique: simple, intuitive, concrete, and concise.
- Concept pages start with `## TL;DR`, then `## Simple Overview`, then `## Why This Matters`.
- Opinions preserve the user's original opinion, wording, emphasis, and stance as much as possible.
- Opinion pages include `## What I Believe`, `## Why I Believe It`, and `## What Would Change My Mind`.
- Opinion evidence belongs in `## Why I Believe It`.
- Pages should be concise. Do not pad.
- Avoid generic consultant language and AI slop.

## Commands

Command specs live in `commands/`. They are plain markdown so different agents can map them into their own command systems. Long form is canonical. Short aliases are included for daily use.

| Long | Short |
|---|---|
| `/second-brain init [name]` | `/sb-init [name]` |
| `/second-brain list` | `/sb-list` |
| `/second-brain switch <name>` | `/sb-switch <name>` |
| `/second-brain process` | `/sb-process` |
| `/second-brain save-concept [hint]` | `/sb-concept [hint]` |
| `/second-brain save-opinion [hint]` | `/sb-opinion [hint]` |
| `/second-brain save-question [hint]` | `/sb-question [hint]` |
| `/second-brain update-concept [name]` | `/sb-concept-update [name]` |
| `/second-brain update-opinion [name]` | `/sb-opinion-update [name]` |
| `/second-brain recall <query>` | `/sb-recall <query>` |
| `/second-brain review` | `/sb-review` |
| `/second-brain lint` | `/sb-lint` |
| `/second-brain digest [period]` | `/sb-digest [period]` |

Only recall requires a query. Save and update commands infer the concept, opinion, question, or target file from the current conversation. Optional hints are just context when the agent might otherwise guess wrong.

## Core Workflow

1. Run `/second-brain init`.
2. Put raw notes, clips, or source files in `inbox/`.
3. Run `/second-brain process` to reconcile `inbox/index.md`.
4. Talk with the agent about what you read.
5. Run `/second-brain save-concept`, `/second-brain save-opinion`, or `/second-brain save-question` when something is worth keeping.
6. Use `/second-brain update-concept` or `/second-brain update-opinion` when a conversation changes an existing page.

## Collision Behavior

Default save collision behavior is:

```yaml
behaviors:
  save_collision: ask
```

Available values:

- `ask`: ask before merging or creating a numbered variant.
- `merge`: merge into the existing file without prompting.
- `new`: create a numbered variant like `topic-2.md`.

## Files

- `commands/second-brain/`: canonical slash command instructions.
- `commands/aliases/sb-*.md`: short aliases.
- `SKILL.md`: shared product rules and skill metadata.
- `templates/vault/`: files copied into a new vault by `/second-brain init`.
- `docs/specs/design.md`: product and behavior spec.

## Agent Compatibility

This repo is intentionally not tied to one agent runtime.

- Agents that support `SKILL.md` can load the root skill directly.
- Agents that support slash commands can import or copy `commands/second-brain/` and `commands/aliases/`.
- Agents without slash command support can still follow the markdown command specs manually.
- Platform-specific adapters should be generated outside this repo, or added under an adapter-specific folder later. The source of truth stays in `SKILL.md`, `commands/`, and `templates/`.

## Verify

```bash
npm test
```
