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
    console.log(`${file} has a bad download url. Please fix`);
}

const versions = fs.readdirSync("./mrpacks/");
for (const version of versions) {
  const bundles = fs.readdirSync(`./mrpacks/${version}`);
  for (const bundle of bundles) {
    const mods = fs.readdirSync(`./mrpacks/${version}/${bundle}/mods`);
    for (const mod of mods) {
      if (!mod.endsWith(".toml")) {
        console.log(`${version}/${bundle} - Will not work because it contains a jar file`);
        return;
      }
      checkMod(`./mrpacks/${version}/${bundle}/mods/${mod}`);
    }
  }
}

/*

1.8.9 forge - hud - works
1.8.9 forge - performance - works
1.8.9 forge - pvp - works
1.8.9 forge - qol - works
1.8.9 forge - skyblock - works
1.8.9 forge - utility - works

1.21.1 fabric - hud - works
1.21.1 fabric - performance - Doesn't show up - UNKNOWN
1.21.1 fabric - pvp - works
1.21.1 fabric - qol - works
1.21.1 fabric - utility - works

1.21.8 fabric - hud - works
1.21.8 fabric - performance - Doesn't show up - Has a jar file
1.21.8 fabric - pvp - works
1.21.8 fabric - qol - works
1.21.8 fabric - skyblock - works
1.21.8 fabric - utility - works

*/
