import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, b as add_attribute, d as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { hierarchy } from "d3-hierarchy";
import { r as root, f as forceGraph, s as selected, c as cameraTarget, a as cameraFocalLength } from "../../chunks/stores2.js";
import "../../chunks/client.js";
import "three-spritetext";
import "@vimeo/player";
const ForceGraph_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_root;
  let $forceGraph, $$unsubscribe_forceGraph;
  let $selected, $$unsubscribe_selected;
  let $cameraTarget, $$unsubscribe_cameraTarget;
  let $cameraFocalLength, $$unsubscribe_cameraFocalLength;
  $$unsubscribe_root = subscribe(root, (value) => value);
  $$unsubscribe_forceGraph = subscribe(forceGraph, (value) => $forceGraph = value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_cameraTarget = subscribe(cameraTarget, (value) => $cameraTarget = value);
  $$unsubscribe_cameraFocalLength = subscribe(cameraFocalLength, (value) => $cameraFocalLength = value);
  let innerWidth;
  let innerHeight;
  {
    $forceGraph?.setSize(innerWidth, innerHeight);
  }
  {
    $forceGraph?.setFocalLength($cameraFocalLength);
  }
  {
    $forceGraph?.setCameraTargetCoordinates($cameraTarget);
  }
  {
    $forceGraph?.select($selected);
  }
  $$unsubscribe_root();
  $$unsubscribe_forceGraph();
  $$unsubscribe_selected();
  $$unsubscribe_cameraTarget();
  $$unsubscribe_cameraFocalLength();
  return ` <div id="force-graph-container" class="absolute top-0 left-0 z-10 w-screen h-screen bg-bg-darkest"></div>`;
});
const SiteNavItemBorder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selected: selected2 } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected2 !== void 0)
    $$bindings.selected(selected2);
  return `<div class="${"relative w-fit h-fit p-0.5 -mb-1 pr-0 rounded-l-full md:pr-0.5 md:pl-0 md:rounded-l-none md:rounded-r-full " + escape(
    selected2 ? "z-10 from-bprimary/80 to-bsecondary/80 right-3.5 bg-gradient-to-l md:left-3.5 md:bg-gradient-to-r" : "bg-bprimary right-2.5 mr-1 md:left-2.5 md:mr-0 md:ml-1 ",
    true
  )}"><div class="bg-bg-darkest rounded-l-full md:rounded-l-none md:rounded-r-full">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const SiteNavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, selected: selected2 } = $$props;
  const href = "/" + title;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.selected === void 0 && $$bindings.selected && selected2 !== void 0)
    $$bindings.selected(selected2);
  return `${validate_component(SiteNavItemBorder, "SiteNavItemBorder").$$render($$result, { selected: selected2 }, {}, {
    default: () => {
      return `<button class="${escape(
        selected2 ? "text-ttertiary/90 pr-2 md:pr-0 md:pl-2" : "text-tprimary/70 hover:text-ttertiary/80",
        true
      ) + " relative left-4 md:left-[unset] md:right-4"}"><a${add_attribute("href", href, 0)} class="group pb-0.5 z-50 h-10 truncate ... capitalize flex items-center w-fit text-base">${escape(title)}</a></button>`;
    }
  })}`;
});
const SiteNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentRouteIndex;
  let currentRoute;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const routes = ["works", "clients", "press", "about"];
  currentRoute = $page.route.id;
  currentRouteIndex = currentRoute && routes.findIndex((route) => currentRoute.includes(route));
  $$unsubscribe_page();
  return `<nav class="flex flex-col justify-end z-40 h-full max-w-6 bg-bg-darkest/90 border-bprimary/80 pr-2 border-l-2 md:pr-0 md:pl-2 md:justify-start md:border-l-0 md:border-r-2"><ul role="list" class="relative flex flex-col items-end md:items-start mt-12 mb-24 max-w-full">${each(routes, (route, index) => {
    return `${validate_component(SiteNavItem, "SiteNavItem").$$render(
      $$result,
      {
        title: route,
        selected: index === currentRouteIndex
      },
      {},
      {}
    )}`;
  })}</ul></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $root, $$unsubscribe_root;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  let { data } = $$props;
  let forceGraph2;
  root.set(hierarchy(data.graphData));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      selected.setFromPath($root, $page.url.pathname);
    }
    $$rendered = `${root ? `<div class="z-20 h-screen w-screen flex md:flex-row-reverse text-tprimary/80"><div class="pointer-events-none flex flex-initial z-20 w-full h-full max-h-full z-20 justify-start flex-col-reverse md:justify-between md:flex-row">${slots.default ? slots.default({}) : ``}</div> ${validate_component(SiteNav, "SiteNav").$$render($$result, { forceGraph: forceGraph2 }, {}, {})}</div> ${validate_component(ForceGraph_1, "ForceGraph").$$render(
      $$result,
      { forceGraph: forceGraph2 },
      {
        forceGraph: ($$value) => {
          forceGraph2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_root();
  return $$rendered;
});
export {
  Layout as default
};
