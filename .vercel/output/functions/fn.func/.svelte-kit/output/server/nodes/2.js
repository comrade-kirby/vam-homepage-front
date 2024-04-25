import * as server from '../entries/pages/clients/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/clients/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/clients/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.Bm0TP6za.js","_app/immutable/chunks/scheduler.B1XGPk8y.js","_app/immutable/chunks/index.Dql_17GW.js","_app/immutable/chunks/PageNav.9WwRHAwd.js","_app/immutable/chunks/stores.CiT0mqS3.js","_app/immutable/chunks/entry.UxVCFaJS.js","_app/immutable/chunks/stores.C7vTeUd2.js","_app/immutable/chunks/PaneNavigation.DEIuv5zT.js","_app/immutable/chunks/SectionWrapper.B9uG607o.js","_app/immutable/chunks/SelectList.recONlPw.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
