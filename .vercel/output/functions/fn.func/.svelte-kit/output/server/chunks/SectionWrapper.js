import { c as create_ssr_component, e as escape } from "./ssr.js";
const ContentPane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width, minimized } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.minimized === void 0 && $$bindings.minimized && minimized !== void 0)
    $$bindings.minimized(minimized);
  return `<div class="${"md:pl-10 bg-bg-darkest/60 flex-1 relative z-20 backdrop-blur-sm flex flex-col " + escape(
    minimized ? "h-fit p-2 w-full " : `h-full p-4 pb-8 w-full ${width}`,
    true
  )}">${slots.default ? slots.default({}) : ``}</div>`;
});
const ScrollContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show, minimized } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.minimized === void 0 && $$bindings.minimized && minimized !== void 0)
    $$bindings.minimized(minimized);
  return `${!minimized ? `<div class="overflow-y-scroll flex-1 -mr-4 pr-4">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const SectionWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dependent = true } = $$props;
  let { hFull } = $$props;
  if ($$props.dependent === void 0 && $$bindings.dependent && dependent !== void 0)
    $$bindings.dependent(dependent);
  if ($$props.hFull === void 0 && $$bindings.hFull && hFull !== void 0)
    $$bindings.hFull(hFull);
  return `${dependent ? `<div class="${escape(hFull && "h-full", true) + " ml-4"}">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
export {
  ContentPane as C,
  ScrollContainer as S,
  SectionWrapper as a
};
