import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const skillRoot = "skills/second-brain";
const commandDir = `${skillRoot}/references/commands`;
const aliasDir = `${skillRoot}/references/aliases`;
const assetDir = `${skillRoot}/assets/vault`;
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const assert = (condition, message) => {
  if (!condition) fail(message);
};
const read = (path) => readFileSync(join(root, path), "utf8");

const canonical = [
  "init",
  "list",
  "switch",
  "process",
  "save-concept",
  "save-opinion",
  "save-question",
  "update-concept",
  "update-opinion",
  "recall",
  "review",
  "lint",
  "digest",
];

const aliases = [
  "sb-init",
  "sb-list",
  "sb-switch",
  "sb-process",
  "sb-concept",
  "sb-opinion",
  "sb-question",
  "sb-concept-update",
  "sb-opinion-update",
  "sb-recall",
  "sb-review",
  "sb-lint",
  "sb-digest",
];

for (const command of canonical) {
  assert(
    existsSync(join(root, commandDir, `${command}.md`)),
    `missing canonical command ${command}`,
  );
}

for (const alias of aliases) {
  assert(
    existsSync(join(root, aliasDir, `${alias}.md`)),
    `missing alias ${alias}`,
  );
  const body = read(join(aliasDir, `${alias}.md`));
  assert(body.includes("references/commands/"), `${alias} does not point to command references`);
  assert(!body.includes("references/references"), `${alias} has malformed reference path`);
}

for (const command of readdirSync(join(root, commandDir)).filter((file) => file.endsWith(".md"))) {
  const body = read(join(commandDir, command));
  assert(body.includes(".second-brain.yml"), `${command} does not read .second-brain.yml`);
  assert(body.includes("style.md"), `${command} does not read style.md`);
  assert(/style\.md wins/i.test(body), `${command} does not state style.md wins`);
  assert(/hard safety and product rules/i.test(body), `${command} does not preserve hard rules`);
}

for (const command of ["save-concept", "save-opinion", "save-question", "update-concept", "update-opinion"]) {
  const body = read(`${commandDir}/${command}.md`);
  assert(/optional/i.test(body), `${command} does not mark its argument optional`);
  assert(/current conversation/i.test(body), `${command} does not synthesize from current conversation`);
  assert(!/required (topic|name|param|parameter)/i.test(body), `${command} implies a required user parameter`);
}

const skill = read(`${skillRoot}/SKILL.md`);
assert(skill.includes("zero required parameters"), "skill omits zero required parameters rule");
assert(/never auto-promote/i.test(skill), "skill omits no auto-promote rule");
assert(skill.includes("Source attribution"), "skill omits source attribution rule");
assert(skill.includes("save_collision"), "skill omits save_collision rule");
assert(skill.includes("questions.md is append-only"), "skill omits append-only questions rule");
assert(/^name: second-brain$/m.test(skill), "skill name must match repo folder");
assert(/Feynman technique/i.test(skill), "skill omits Feynman concept rule");
assert(skill.includes("## TL;DR"), "skill omits concept TL;DR rule");
assert(skill.includes("## Simple Overview"), "skill omits concept simple overview rule");
assert(skill.includes("## Why This Matters"), "skill omits concept why-this-matters rule");
assert(/preserve the user's original opinion/i.test(skill), "skill omits opinion preservation rule");
assert(skill.includes("## What I Believe"), "skill omits opinion belief section");
assert(skill.includes("## Why I Believe It"), "skill omits opinion evidence section");
assert(skill.includes("## What Would Change My Mind"), "skill omits opinion falsification section");
assert(/AI slop/i.test(skill), "skill omits anti-slop rule");
assert(/Hard rules/i.test(skill), "skill omits hard rules hierarchy");
assert(/process_missing: mark-missing/i.test(skill), "skill omits process_missing default");
assert(/type: concept/i.test(skill), "skill omits canonical frontmatter");
assert(/created: 2026-04-28T00:00:00Z/i.test(skill), "skill omits timestamp frontmatter example");
assert(/One conversation may update many artifacts/i.test(skill), "skill omits multi-artifact update rule");

const config = read(`${assetDir}/.second-brain.yml`);
const style = read(`${assetDir}/style.md.template`);
assert(config.includes("save_collision: ask"), "template config omits save_collision default");
assert(config.includes("process_missing: mark-missing"), "template config omits process_missing default");
assert(config.includes("auto_link: true"), "template config omits auto_link default");
assert(config.includes("questions: compiled/questions.md"), "template config omits questions path");
assert(!config.includes("Daily/"), "template config should not ignore Daily/ by default");
assert(style.includes("# Research Style"), "style template missing heading");
assert(/edit/i.test(style), "style template does not tell user it is editable");
assert(/Feynman technique/i.test(style), "style template omits Feynman concept rule");
assert(style.includes("## TL;DR"), "style template omits concept TL;DR rule");
assert(style.includes("## Simple Overview"), "style template omits concept simple overview rule");
assert(style.includes("## Why This Matters"), "style template omits concept why-this-matters rule");
assert(/preserve the user's original opinion/i.test(style), "style template omits opinion preservation rule");
assert(style.includes("## What I Believe"), "style template omits opinion belief section");
assert(style.includes("## Why I Believe It"), "style template omits opinion evidence section");
assert(style.includes("## What Would Change My Mind"), "style template omits opinion falsification section");
assert(/AI slop/i.test(style), "style template omits anti-slop rule");

const readme = read("README.md");
assert(readme.includes("/second-brain save-concept"), "README omits save-concept");
assert(readme.includes("/sb-concept"), "README omits short alias");
assert(readme.includes("style.md"), "README omits style.md");
assert(readme.includes(".second-brain.yml"), "README omits .second-brain.yml");
assert(readme.includes("skills/second-brain/SKILL.md"), "README omits self-contained skill path");
assert(existsSync(join(root, "docs/install.md")), "missing install docs");
const install = read("docs/install.md");
assert(install.includes("~/.agents/skills"), "install docs omit Codex skills path");
assert(install.includes("skills/second-brain"), "install docs omit skill package path");
assert(install.includes("skills/second-brain/references/commands"), "install docs omit command references path");
assert(existsSync(join(root, "adapters/codex/INSTALL.md")), "missing Codex adapter docs");
assert(existsSync(join(root, "adapters/claude/INSTALL.md")), "missing Claude adapter docs");
assert(existsSync(join(root, "adapters/cursor/INSTALL.md")), "missing Cursor adapter docs");
assert(existsSync(join(root, "adapters/opencode/INSTALL.md")), "missing OpenCode adapter docs");
assert(!existsSync(join(root, "SKILL.md")), "root SKILL.md should not exist; skill must be self-contained");
assert(!existsSync(join(root, "commands")), "root commands directory should not exist; commands live under skill references");
assert(!existsSync(join(root, "templates")), "root templates directory should not exist; templates live under skill assets");

const init = read(`${commandDir}/init.md`);
assert(init.includes("style.md.template` -> `style.md"), "init omits style template mapping");
assert(init.includes("compiled-index.md` -> `compiled/index.md"), "init omits compiled index mapping");
assert(init.includes("inbox-index.md` -> `inbox/index.md"), "init omits inbox index mapping");

const processCommand = read(`${commandDir}/process.md`);
assert(processCommand.includes("process_missing"), "process omits missing-file behavior");
assert(processCommand.includes("mark-missing"), "process omits mark-missing default");

const saveConcept = read(`${commandDir}/save-concept.md`);
const saveOpinion = read(`${commandDir}/save-opinion.md`);
assert(saveConcept.includes("canonical compiled page frontmatter"), "save-concept omits canonical frontmatter");
assert(saveOpinion.includes("canonical compiled page frontmatter"), "save-opinion omits canonical frontmatter");

const updateConcept = read(`${commandDir}/update-concept.md`);
const updateOpinion = read(`${commandDir}/update-opinion.md`);
assert(/multiple concept pages/i.test(updateConcept), "update-concept omits multi-file update");
assert(/multiple opinion pages/i.test(updateOpinion), "update-opinion omits multi-file update");

if (!process.exitCode) {
  console.log("Second Brain skill pack verification passed.");
}
