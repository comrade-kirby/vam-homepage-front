import * as universal from '../entries/pages/works/_layout.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/works/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/works/+layout.js";
export const imports = ["_app/immutable/nodes/6.B5ODnvFE.js","_app/immutable/chunks/index.BkD7Hj8s.js","_app/immutable/chunks/scheduler.B1XGPk8y.js","_app/immutable/chunks/index.Dql_17GW.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/PageNav.9WwRHAwd.js","_app/immutable/chunks/stores.CiT0mqS3.js","_app/immutable/chunks/entry.UxVCFaJS.js","_app/immutable/chunks/stores.C7vTeUd2.js","_app/immutable/chunks/PaneNavigation.DEIuv5zT.js","_app/immutable/chunks/SectionWrapper.B9uG607o.js","_app/immutable/chunks/SelectList.recONlPw.js","_app/immutable/chunks/index.DocUNPKL.js"];
export const stylesheets = [];
export const fonts = [];
