

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/clients/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.Dfwqt1Ck.js","_app/immutable/chunks/scheduler.B1XGPk8y.js","_app/immutable/chunks/index.Dql_17GW.js"];
export const stylesheets = [];
export const fonts = [];
