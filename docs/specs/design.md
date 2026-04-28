# Second Brain Design Spec

**Status:** v1 implementation scaffold

Second Brain is an agent skill pack plus an opinionated filesystem convention for personal knowledge bases. It teaches agents how to ingest sources, distill them into structured knowledge, and maintain that knowledge over time.

## Philosophy

- AI does the writing; the user does the reading.
- The filesystem is the product.
- Do not make users provide required params when the current conversation already contains the context.
- Optional params are hints, not obligations.
- Distillation is user-triggered, never automatic.

## Vault Convention

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

## Config Layers

`.second-brain.yml` controls structure:

- folders
- frontmatter fields
- link style
- auto-link behavior
- save collision behavior
- ignored paths

`style.md` controls behavior:

- tone
- formatting
- citation standards
- domain conventions

Default writing rules:

- Concepts use the Feynman technique: simple, intuitive, concrete, and concise.
- Concept pages start with `## TL;DR`, then `## Simple Overview`, then `## Why This Matters`.
- Opinions preserve the user's original opinion, wording, emphasis, and stance as much as possible.
- Opinion pages include `## What I Believe`, `## Why I Believe It`, and `## What Would Change My Mind`.
- Opinion evidence belongs in `## Why I Believe It`.
- Pages should be concise and avoid padding.
- Avoid generic consultant language and AI slop.

Every command must read both before acting. If `style.md` conflicts with skill defaults, `style.md` wins.

## Commands

Command specs are stored as generic markdown under `commands/` so Codex, Claude, and other agent runtimes can adapt them to their own invocation systems.

Only `/second-brain recall <query>` requires a parameter.

Vaults:

- `/second-brain init [name]`
- `/second-brain list`
- `/second-brain switch <name>`

Inbox:

- `/second-brain process`

Save from current conversation:

- `/second-brain save-concept [hint]`
- `/second-brain save-opinion [hint]`
- `/second-brain save-question [hint]`

Update from current conversation:

- `/second-brain update-concept [name]`
- `/second-brain update-opinion [name]`

Query and maintenance:

- `/second-brain recall <query>`
- `/second-brain review`
- `/second-brain lint`
- `/second-brain digest [period]`

Short aliases:

- `/sb-init`
- `/sb-list`
- `/sb-switch`
- `/sb-process`
- `/sb-concept`
- `/sb-opinion`
- `/sb-question`
- `/sb-concept-update`
- `/sb-opinion-update`
- `/sb-recall`
- `/sb-review`
- `/sb-lint`
- `/sb-digest`

## Save Collision Behavior

```yaml
behaviors:
  save_collision: ask
```

Modes:

- `ask`: prompt before merge or new file.
- `merge`: merge into existing page.
- `new`: create numbered variant.

## Source Attribution

Compiled pages must be honest about provenance:

- cite `inbox/` files for source-derived claims
- mark user-contributed claims as user notes
- mark general synthesis as background, not from the user's sources

## Questions

`compiled/questions.md` is append-only. There is no update-question command.
