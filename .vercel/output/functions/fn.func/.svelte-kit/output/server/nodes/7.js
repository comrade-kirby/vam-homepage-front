import * as server from '../entries/pages/works/_slug_/_layout.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/works/_slug_/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/works/[slug]/+layout.server.js";
export const imports = ["_app/immutable/nodes/7.DBkRFm3W.js","_app/immutable/chunks/scheduler.B1XGPk8y.js","_app/immutable/chunks/index.Dql_17GW.js"];
export const stylesheets = [];
export const fonts = [];
