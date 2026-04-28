---
name: second-brain
description: Use when maintaining a local markdown Second Brain vault; processes inbox sources, saves concepts/opinions/questions from conversation, updates existing pages, recalls knowledge, lints vault health, and writes digests.
---

# Second Brain

Second Brain is a local-first markdown vault convention. The filesystem is the product. The agent maintains the vault by following these rules and the slash command instructions in `references/commands/`.

## Product Rules

- Product philosophy: zero required parameters except `/second-brain recall <query>`.
- Slash commands may not automatically appear in every agent UI. If the user asks how to use Second Brain, asks what commands exist, or appears unsure what to do next, show the command menu from `references/commands/help.md`.
- Optional parameters are only hints. They help disambiguate; they are not required for save or update commands.
- Never auto-promote raw sources. Distillation only happens when the user explicitly runs a save, update, or digest command.
- Source attribution is mandatory. Cite `inbox/` files for source-derived claims, mark user notes as user notes, and mark background synthesis as not from the user's sources.
- Never silently overwrite user work. Ask before destructive changes. For save collisions, follow `behaviors.save_collision` from `.second-brain.yml`.
- `questions.md is append-only`. There is no update-question command.
- Append a structured line to `log.md` after every command that writes to the vault.
- Hard rules in this section cannot be overridden by `style.md`.

## Before Every Command

1. Resolve the active vault from `~/.second-brain/config.json`, except during `/second-brain init`.
2. Read `.second-brain.yml` from the active vault root for structure config. Use defaults if fields are missing.
3. Read `style.md` from the active vault root for soft writing rules. If `style.md` conflicts with tone, structure, length, or domain conventions, `style.md wins`. Hard safety/product rules still apply.
4. Read the relevant index before writing: `inbox/index.md` for inbox work, `compiled/index.md` for compiled work.
5. Preserve manual edits unless the user explicitly approves changing them.

`SKILL.md` is the product-wide default behavior. A vault's `style.md` is the user-owned local override for soft rules: tone, structure, length, formatting, domain conventions, and personal writing preferences. Commands must load both. When they differ on soft rules, the vault's `style.md` wins. `style.md` cannot override hard rules: source attribution, no silent overwrite, append-only questions, no auto-promotion, and explicit approval before destructive changes.

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
  process_missing: mark-missing
ignore:
  - .obsidian/
```

## Compiled Page Frontmatter

Concept, opinion, and digest pages use this frontmatter:

```yaml
---
type: concept
title: "Readable Title"
created: 2026-04-28T00:00:00Z
updated: 2026-04-28T00:00:00Z
sources: []
links: []
tags: []
---
```

Rules:

- `type` is `concept`, `opinion`, or `digest`.
- `created` and `updated` use ISO 8601 timestamps.
- Source paths are vault-relative paths like `inbox/source-file.md`.
- Link paths are vault-relative compiled paths like `compiled/concepts/attention.md`, unless `links.style` asks for wikilinks in the body.
- Slugs are lowercase, hyphenated, ASCII filenames derived from the inferred title. Remove punctuation, collapse whitespace, and use numbered suffixes for variants.

## Writing Compiled Pages

Concept pages are factual, multi-source, and non-editorial. Explain concepts with the Feynman technique: simple, intuitive, concrete, and concise. Start concept pages with `## TL;DR`, then `## Simple Overview`, then `## Why This Matters`.

Opinion pages are evaluative and should preserve the user's original opinion, wording, emphasis, and stance as much as possible. Clarify and structure the opinion without laundering it into generic analyst voice. Include `## What I Believe`, `## Why I Believe It`, and `## What Would Change My Mind`. The "why" section should reference the evidence, reasons, or source files behind the belief.

Avoid generic consultant language and AI slop. Write like the user's future self, not like a polished corporate memo.

Both page types are synthesized from the current conversation plus relevant vault sources, not from a required topic parameter.

One conversation may update many artifacts. If the current conversation clearly changes multiple concepts or opinions, identify the affected files, summarize the proposed changes per file, ask once for approval, then update all approved files in one batch. Preserve each file's voice and structure.

When `links.auto_link` is true, scan existing pages under `compiled/` and insert cross-references to clearly matching entities. Use `[[wikilinks]]` when `links.style` is `wikilinks`; otherwise use markdown links.

## Collision Behavior

When saving a concept or opinion and the target slug already exists:

- `ask`: stop and ask whether to merge into the existing file or create a new numbered variant.
- `merge`: merge without prompting, preserving existing user-authored material.
- `new`: create the next numbered variant, such as `topic-2.md`.

Update commands always target an existing page. If no target can be inferred confidently, ask the user which file to update.

## Command Discovery

Users can invoke Second Brain either through slash commands or natural language.

Equivalent examples:

- `/second-brain init research`
- `Use second-brain to initialize a research vault.`
- `/sb-concept`
- `Use second-brain to save this conversation as a concept.`

If slash commands are not visible in the agent UI, natural language still works as long as the agent has loaded this skill.
