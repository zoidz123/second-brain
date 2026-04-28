import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
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
    existsSync(join(root, "commands/second-brain", `${command}.md`)),
    `missing canonical command ${command}`,
  );
}

for (const alias of aliases) {
  assert(
    existsSync(join(root, "commands/aliases", `${alias}.md`)),
    `missing alias ${alias}`,
  );
}

for (const command of readdirSync(join(root, "commands/second-brain")).filter((file) => file.endsWith(".md"))) {
  const body = read(join("commands/second-brain", command));
  assert(body.includes(".second-brain.yml"), `${command} does not read .second-brain.yml`);
  assert(body.includes("style.md"), `${command} does not read style.md`);
  assert(/style\.md wins/i.test(body), `${command} does not state style.md wins`);
}

for (const command of ["save-concept", "save-opinion", "save-question", "update-concept", "update-opinion"]) {
  const body = read(`commands/second-brain/${command}.md`);
  assert(/optional/i.test(body), `${command} does not mark its argument optional`);
  assert(/current conversation/i.test(body), `${command} does not synthesize from current conversation`);
  assert(!/required (topic|name|param|parameter)/i.test(body), `${command} implies a required user parameter`);
}

const skill = read("SKILL.md");
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

const config = read("templates/vault/.second-brain.yml");
const style = read("templates/vault/style.md.template");
assert(config.includes("save_collision: ask"), "template config omits save_collision default");
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

if (!process.exitCode) {
  console.log("Second Brain skill pack verification passed.");
}
