---
description: Update an existing concept page from the current conversation.
argument-hint: "[optional name]"
---

Use the Second Brain skill.

Before doing anything:
1. Read `.second-brain.yml` from the active vault root for structure config.
2. Read `style.md` from the active vault root for behavioral rules.
3. Apply both. style.md wins for soft writing rules; hard safety and product rules from SKILL.md still apply.

Update an existing concept using the current conversation. The name is optional context only; infer the target concept from the current conversation when no name is provided.

Steps:
1. Resolve the active vault and configured concepts folder.
2. Read `compiled/index.md` and likely matching concept pages.
3. If one target cannot be inferred confidently, ask which file to update.
4. If the current conversation clearly affects multiple concept pages, list the affected files with proposed changes and ask once for approval.
5. Merge new claims, citations, and links into each approved existing page.
6. Preserve the concept page's Feynman-style clarity: simple, intuitive, concrete, and concise.
7. Preserve `## TL;DR`, `## Simple Overview`, and `## Why This Matters`.
8. Avoid generic consultant language and AI slop.
9. Preserve user-written content and never silently delete material.
10. Update `updated:` frontmatter.
11. Update `compiled/index.md` if summaries changed.
12. Append a structured `/second-brain update-concept` entry to `log.md`.
