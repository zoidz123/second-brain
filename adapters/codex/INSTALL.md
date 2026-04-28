# Codex Adapter

Codex discovers local skills from `~/.agents/skills`.

Install:

```bash
git clone https://github.com/<your-user>/second-brain.git ~/.codex/second-brain
mkdir -p ~/.agents/skills
ln -s ~/.codex/second-brain/skills/second-brain ~/.agents/skills/second-brain
```

Restart Codex after installing.

Verify:

```bash
ls -la ~/.agents/skills/second-brain
```

It should point to:

```text
~/.codex/second-brain/skills/second-brain
```

Update:

```bash
cd ~/.codex/second-brain && git pull
```

Uninstall:

```bash
rm ~/.agents/skills/second-brain
```
