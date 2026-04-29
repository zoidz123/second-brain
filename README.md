# Second Brain

Second Brain is an agent skill pack plus a local markdown vault convention for personal research.

Use it with an agent like Claude, Codex, Cursor, or OpenCode to turn reading, notes, and conversations into durable concept, opinion, question, and digest files.

Second Brain works well with Obsidian because the vault is just markdown. Use the Obsidian Web Clipper to capture articles and set the clipper destination to `inbox` so new clips flow directly into your Second Brain inbox.

## Quick Start

1. Install the skill for your agent runtime. See [docs/install.md](docs/install.md).
2. Ask your agent:

```text
Initialize a default vault.
```

3. Put source material in:

```text
~/SecondBrain/default/inbox/
```

4. Ask your agent:

```text
Process my inbox.
```

5. Talk with the agent about what you read, then ask it to save what matters:

```text
Save this conversation as a concept.
Save this as an opinion.
Save this question for later.
```

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

`.second-brain.yml` controls structure: folder paths, frontmatter fields, link style, and auto-linking behavior.

`style.md` controls behavior: tone, formatting, citation expectations, and domain conventions. Every command reads it before acting, and the user edits the vault-local copy.

## How To Invoke Actions

Second Brain actions can be invoked in plain English.

Common prompts:

```text
Initialize a default vault.
Initialize a research vault.
Process my inbox.
Save this conversation as a concept.
Save this as an opinion.
Save this question for later.
Update the related concept from this conversation.
Recall what I know about stablecoins.
Create a digest of this week's research.
Review my vault.
```

Command reference:

| Action | Plain English | Slash command | Short alias |
|---|---|---|---|
| Show help | `Show commands.` | `/second-brain help` | `/sb-help` |
| Create a vault | `Initialize a research vault.` | `/second-brain init [name]` | `/sb-init [name]` |
| List vaults | `List my vaults.` | `/second-brain list` | `/sb-list` |
| Switch vaults | `Switch to my research vault.` | `/second-brain switch <name>` | `/sb-switch <name>` |
| Process inbox | `Process my inbox.` | `/second-brain process` | `/sb-process` |
| Save concept | `Save this conversation as a concept.` | `/second-brain save-concept [hint]` | `/sb-concept [hint]` |
| Save opinion | `Save this as an opinion.` | `/second-brain save-opinion [hint]` | `/sb-opinion [hint]` |
| Save question | `Save this question for later.` | `/second-brain save-question [hint]` | `/sb-question [hint]` |
| Update concept | `Update the related concept.` | `/second-brain update-concept [name]` | `/sb-concept-update [name]` |
| Update opinion | `Update the related opinion.` | `/second-brain update-opinion [name]` | `/sb-opinion-update [name]` |
| Recall knowledge | `Recall what I know about stablecoins.` | `/second-brain recall <query>` | `/sb-recall <query>` |
| Review vault | `Review my vault.` | `/second-brain review` | `/sb-review` |
| Lint vault | `Lint my vault.` | `/second-brain lint` | `/sb-lint` |
| Create digest | `Create a weekly digest.` | `/second-brain digest [period]` | `/sb-digest [period]` |

Only recall requires a query. Save and update actions infer the concept, opinion, question, or target file from the current conversation. Optional hints are just context when the agent might otherwise guess wrong.

## Daily Workflow

### 1. Capture Sources

Save raw material into your vault's inbox:

```text
~/SecondBrain/default/inbox/
```

This can include markdown notes, web clips, transcripts, PDFs, and other local source files.

### 2. Process The Inbox

Ask:

```text
Process my inbox.
```

This reconciles `inbox/index.md` with the files in `inbox/`. It does not distill or promote sources by itself.

### 3. Discuss What You Read

Talk with your agent about the source material. Ask for summaries, implications, comparisons, counterarguments, or open questions.

### 4. Save Durable Knowledge

When something is worth keeping, ask:

```text
Save this conversation as a concept.
Save this as an opinion.
Save this question for later.
```

Concepts are factual synthesis. Opinions preserve your stance. Questions are open research threads.

### 5. Recall And Update

Ask:

```text
Recall what I know about stablecoins.
Update the related concept from this conversation.
```

Recall searches the compiled vault. Update actions modify existing durable pages when a new conversation changes what you already know.

## Files

- `skills/second-brain/SKILL.md`: shared product rules and skill metadata.
- `skills/second-brain/references/commands/`: canonical slash command instructions.
- `skills/second-brain/references/aliases/`: short aliases.
- `skills/second-brain/assets/vault/`: files copied into a new vault by `/second-brain init`.
- `adapters/`: runtime-specific install guidance.
- `docs/specs/design.md`: product and behavior spec.
- `docs/install.md`: runtime-specific install guidance.

## Agent Compatibility

This repo is intentionally not tied to one agent runtime.

- Agents that support `SKILL.md` can load `skills/second-brain/` directly.
- Agents that support slash commands can import or copy `skills/second-brain/references/commands/` and `skills/second-brain/references/aliases/`.
- Agents without slash command support can still follow the markdown command specs manually.
- Platform-specific adapters live under `adapters/`. The source of truth stays in `skills/second-brain/`.

## Verify

```bash
npm test
```
