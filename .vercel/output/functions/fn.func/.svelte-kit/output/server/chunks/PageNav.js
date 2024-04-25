import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "./ssr.js";
import { p as page } from "./stores.js";
import { f as forceGraph, m as minimizeNav } from "./stores2.js";
import "./client.js";
import { P as PaneNavigation } from "./PaneNavigation.js";
import { C as ContentPane, S as ScrollContainer } from "./SectionWrapper.js";
const PageNavContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_forceGraph;
  $$unsubscribe_forceGraph = subscribe(forceGraph, (value) => value);
  let { minimized } = $$props;
  if ($$props.minimized === void 0 && $$bindings.minimized && minimized !== void 0)
    $$bindings.minimized(minimized);
  $$unsubscribe_forceGraph();
  return `<nav class="${"pointer-events-auto relative border-t md:border-t-0 md:border-r border-bprimary/80 " + escape(
    minimized ? "order-first self-end h-fit md:border-b md:self-start w-full md:w-1/2" : "order-1 flex-1 h-1/2 md:h-screen w-full md:max-w-fit",
    true
  )}">${slots.default ? slots.default({}) : ``}</nav>`;
});
const PageNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slug;
  let minimizedLabelText;
  let $page, $$unsubscribe_page;
  let $minimizeNav, $$unsubscribe_minimizeNav;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_minimizeNav = subscribe(minimizeNav, (value) => $minimizeNav = value);
  let { route } = $$props;
  const show = () => minimizeNav.set(false);
  const minimize = () => minimizeNav.set(true);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  slug = $page.params.slug;
  minimizedLabelText = route;
  $$unsubscribe_page();
  $$unsubscribe_minimizeNav();
  return `${validate_component(PageNavContainer, "PageNavContainer").$$render($$result, { minimized: $minimizeNav }, {}, {
    default: () => {
      return `${validate_component(ContentPane, "ContentPane").$$render(
        $$result,
        {
          width: "md:w-96",
          minimized: $minimizeNav
        },
        {},
        {
          default: () => {
            return `${validate_component(PaneNavigation, "PaneNavigation").$$render(
              $$result,
              {
                minimize,
                show,
                minimized: $minimizeNav,
                closeUrl: !slug && "/",
                minimizedLabelText,
                minimizedIconText: "nav"
              },
              {},
              {}
            )} ${validate_component(ScrollContainer, "ScrollContainer").$$render($$result, { show, minimized: $minimizeNav }, {}, {
              default: () => {
                return `<div class="md:hidden">${slots.default ? slots.default({ onClick: minimize }) : ``}</div> <div class="hidden md:block">${slots.default ? slots.default({}) : ``}</div>`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  PageNav as P
};
