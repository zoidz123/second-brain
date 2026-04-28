---
name: second-brain
description: Use when maintaining a local markdown Second Brain vault; processes inbox sources, saves concepts/opinions/questions from conversation, updates existing pages, recalls knowledge, lints vault health, and writes digests.
---

# Second Brain

Second Brain is a local-first markdown vault convention. The filesystem is the product. The agent maintains the vault by following these rules and the slash command instructions in `commands/`.

## Product Rules

- Product philosophy: zero required parameters except `/second-brain recall <query>`.
- Optional parameters are only hints. They help disambiguate; they are not required for save or update commands.
- Never auto-promote raw sources. Distillation only happens when the user explicitly runs a save, update, or digest command.
- Source attribution is mandatory. Cite `inbox/` files for source-derived claims, mark user notes as user notes, and mark background synthesis as not from the user's sources.
- Never silently overwrite user work. Ask before destructive changes. For save collisions, follow `behaviors.save_collision` from `.second-brain.yml`.
- `questions.md is append-only`. There is no update-question command.
- Append a structured line to `log.md` after every command that writes to the vault.

## Before Every Command

1. Resolve the active vault from `~/.second-brain/config.json`, except during `/second-brain init`.
2. Read `.second-brain.yml` from the active vault root for structure config. Use defaults if fields are missing.
3. Read `style.md` from the active vault root for behavioral rules. If `style.md` conflicts with these defaults, `style.md wins`.
4. Read the relevant index before writing: `inbox/index.md` for inbox work, `compiled/index.md` for compiled work.
5. Preserve manual edits unless the user explicitly approves changing them.

## Default Vault Layout

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
  README.md
```

## Defaults

```yaml
folders:
  inbox: inbox
  compiled: compiled
  concepts: compiled/concepts
  opinions: compiled/opinions
  digests: compiled/digests
  questions: compiled/questions.md
frontmatter:
  sources: sources
  links: links
  tags: tags
links:
  style: wikilinks
  auto_link: true
behaviors:
  save_collision: ask
ignore:
  - .obsidian/
```

## Writing Compiled Pages

Concept pages are factual, multi-source, and non-editorial. Explain concepts with the Feynman technique: simple, intuitive, concrete, and concise. Start concept pages with `## TL;DR`, then `## Simple Overview`.

Opinion pages are evaluative and should preserve the user's original opinion, wording, emphasis, and stance as much as possible. Clarify and structure the opinion without laundering it into generic analyst voice.

Both page types are synthesized from the current conversation plus relevant vault sources, not from a required topic parameter.

When `links.auto_link` is true, scan existing pages under `compiled/` and insert cross-references to clearly matching entities. Use `[[wikilinks]]` when `links.style` is `wikilinks`; otherwise use markdown links.

## Collision Behavior

When saving a concept or opinion and the target slug already exists:

- `ask`: stop and ask whether to merge into the existing file or create a new numbered variant.
- `merge`: merge without prompting, preserving existing user-authored material.
- `new`: create the next numbered variant, such as `topic-2.md`.

Update commands always target an existing page. If no target can be inferred confidently, ask the user which file to update.
