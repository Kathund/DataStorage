const fs = require("fs");
const toml = require("toml");

function checkMod(file) {
  const fileData = fs.readFileSync(file, "utf-8");
  const parsed = toml.parse(fileData);
  const modVersion = parsed?.update?.modrinth?.version ?? "UNKNOWN";
  const download = parsed?.download?.url ?? "UNKNOWN";
  if (modVersion === "UNKNOWN" || download === "UNKNOWN") return;
  const split = download.split("/");
  if (split[split.length - 2] !== modVersion)
    throw new Error(`${file} has a bad download url. Please fix`);
}

const versions = fs.readdirSync("./mrpacks/");
for (const version of versions) {
  const bundles = fs.readdirSync(`./mrpacks/${version}`);
  for (const bundle of bundles) {
    const mods = fs.readdirSync(`./mrpacks/${version}/${bundle}/mods`);
    for (const mod of mods) {
      if (!mod.endsWith(".toml")) {
        throw new Error(
          `${version}/${bundle} - Will not work because it contains a jar file`
        );
      }
      checkMod(`./mrpacks/${version}/${bundle}/mods/${mod}`);
    }
  }
}
