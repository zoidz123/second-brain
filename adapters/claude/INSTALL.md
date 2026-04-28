# Claude Adapter

Install the skill:

```bash
git clone https://github.com/<your-user>/second-brain.git ~/second-brain
mkdir -p ~/.claude/skills
ln -s ~/second-brain/skills/second-brain ~/.claude/skills/second-brain
```

Optional: generate Claude slash commands from the generic command references:

```bash
mkdir -p ~/.claude/commands/second-brain
cp ~/second-brain/skills/second-brain/references/commands/*.md ~/.claude/commands/second-brain/
cp ~/second-brain/skills/second-brain/references/aliases/*.md ~/.claude/commands/
```

The generated `.claude/commands` files are adapter output, not source of truth.

Update:

```bash
cd ~/second-brain && git pull
```
