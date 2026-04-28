---
description: Show Second Brain commands and usage.
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config if an active vault exists.
2. Read `style.md` from the active vault root for soft writing rules if an active vault exists.
3. Apply both. style.md wins for soft writing rules; hard safety and product rules from SKILL.md still apply.

Print a concise command menu. Explain that slash commands may not appear in every agent UI, and that the user can invoke the same behavior with natural language.

Show:

```text
Setup:
  /second-brain init [name]          /sb-init
  /second-brain list                 /sb-list
  /second-brain switch <name>        /sb-switch

Inbox:
  /second-brain process              /sb-process

Save from current conversation:
  /second-brain save-concept [hint]  /sb-concept
  /second-brain save-opinion [hint]  /sb-opinion
  /second-brain save-question [hint] /sb-question

Update from current conversation:
  /second-brain update-concept [name] /sb-concept-update
  /second-brain update-opinion [name] /sb-opinion-update

Query and maintenance:
  /second-brain recall <query>       /sb-recall
  /second-brain review               /sb-review
  /second-brain lint                 /sb-lint
  /second-brain digest [period]      /sb-digest
```

Also show these natural-language equivalents:

```text
Use second-brain to initialize a research vault.
Use second-brain to process my inbox.
Use second-brain to save this conversation as a concept.
Use second-brain to save this as an opinion.
Use second-brain to update the related concepts from this conversation.
Use second-brain to recall what I know about <query>.
```
