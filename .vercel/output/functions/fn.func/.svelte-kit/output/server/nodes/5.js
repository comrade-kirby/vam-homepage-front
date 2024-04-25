import * as server from '../entries/pages/press/_slug_/_layout.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/press/[slug]/+layout.server.js";
export const imports = ["_app/immutable/nodes/5.BMJLhQvb.js","_app/immutable/chunks/5.RHxlSkwj.js","_app/immutable/chunks/scheduler.B1XGPk8y.js","_app/immutable/chunks/index.Dql_17GW.js"];
export const stylesheets = [];
export const fonts = [];
