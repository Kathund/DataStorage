const fs = require("fs");

const path = "./oneclient/mrpacks/1.21.8-fabric/Qol/mods";

const mods = fs.readdirSync(path);
const half = Math.floor(mods.length / 2);

mods.forEach((mod, index) => {
  if (index > half) fs.unlinkSync(`${path}/${mod}`);
});
