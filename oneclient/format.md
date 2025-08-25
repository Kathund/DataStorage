ok so here's the modpack structure:
currently in <https://github.com/Polyfrost/DataStorage>

`oneclient/mrpacks/${mcVersion}-${mcLoader}/${Category Name}`

the format is mrpack + the following:
Additional fields:
`enabled: boolean` - whether it is enabled by default in oneclient
`id: string` (can just be the category name but lowercase)
`category: string`
`polyFormat: number` (1)
`updateUrl: string`

individual file / package additional fields:
`id: string` - the modrinth id of the mod, or a normal id if not on modrinth
`enabled: boolean` - whether it is enabled by default __when the category is selected__ - `true` by default
`hidden: boolean` - whether oneclient should hide the mod

1.8.9 Forge
- Performance
- QoL
- HUD
- SkyBlock
- PvP
- Utility

1.21.1 Fabric
- Performance
- QoL
- HUD
- PvP
- Utility

1.21.5 Fabric
- Performance
- QoL
- HUD
- SkyBlock
- PvP
- Utility

1.21.8 Fabric
- Performance
- QoL
- HUD
- SkyBlock
- PvP
- Utility