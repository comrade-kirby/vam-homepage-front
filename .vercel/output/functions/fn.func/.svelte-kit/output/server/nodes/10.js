

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/clients/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.B_ebiDgt.js","_app/immutable/chunks/scheduler.B1XGPk8y.js","_app/immutable/chunks/index.Dql_17GW.js","_app/immutable/chunks/GraphHUD.DogN00hJ.js","_app/immutable/chunks/PaneNavigation.DEIuv5zT.js","_app/immutable/chunks/BlockQuote.CyR8CSdF.js"];
export const stylesheets = [];
export const fonts = [];
