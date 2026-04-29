# Codex Adapter

Codex discovers local skills from `~/.agents/skills`.

Install:

```bash
git clone https://github.com/zoidz123/second-brain.git ~/second-brain
mkdir -p ~/.agents/skills
ln -s ~/second-brain/skills/second-brain ~/.agents/skills/second-brain
```

Restart Codex after installing.

Verify:

```bash
ls -la ~/.agents/skills/second-brain
```

It should point to:

```text
~/second-brain/skills/second-brain
```

Update:

```bash
cd ~/second-brain && git pull
```

Uninstall:

```bash
rm ~/.agents/skills/second-brain
```
