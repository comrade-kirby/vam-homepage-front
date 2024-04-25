import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape, d as each } from "../../../chunks/ssr.js";
import { hierarchy } from "d3-hierarchy";
import { P as PageNav } from "../../../chunks/PageNav.js";
import { p as page } from "../../../chunks/stores.js";
import { f as forceGraph } from "../../../chunks/stores2.js";
import { L as Link, S as SelectList } from "../../../chunks/SelectList.js";
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkToDetails;
  let href;
  let $page, $$unsubscribe_page;
  let $forceGraph, $$unsubscribe_forceGraph;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_forceGraph = subscribe(forceGraph, (value) => $forceGraph = value);
  let { node, isSelected, onClick } = $$props;
  const nodeData = node.data[0] || node.data;
  const workUrl = nodeData.slug;
  const workDetailsUrl = workUrl + "/details";
  const onHover = () => $forceGraph.onNavHover(workUrl);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  linkToDetails = $page.url.pathname.includes("details");
  href = linkToDetails ? workDetailsUrl : workUrl;
  $$unsubscribe_page();
  $$unsubscribe_forceGraph();
  return `${validate_component(Link, "Link").$$render(
    $$result,
    {
      onClick,
      href,
      onHover,
      isSelected,
      clamp1: true,
      text: nodeData.name,
      subtext: nodeData.client.name
    },
    {},
    {}
  )}`;
});
const SubNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let isCurrent;
  let containsCurrent;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { node, onClick } = $$props;
  const nodeData = node.data[0];
  const slug = nodeData.slug;
  const descendants = node.descendants();
  const children = node.children;
  const href = slug;
  const labelText = nodeData.name.toUpperCase();
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  path = $page.url.pathname.replace("/details", "");
  isCurrent = path === slug;
  containsCurrent = descendants && descendants.map((node2) => {
    return node2.data.slug || node2.data[0].slug;
  }).includes(path);
  $$unsubscribe_page();
  return `${validate_component(SelectList, "SelectList").$$render(
    $$result,
    {
      href,
      labelText,
      containsCurrent,
      selectable: true,
      items: children,
      collapsable: isCurrent
    },
    {},
    {
      "label-link": () => {
        return `<a slot="label-link"${add_attribute("href", href, 0)} class="w-full max-w-full truncate ...">${escape(labelText)}</a>`;
      },
      default: ({ item: node2, isSelected }) => {
        return `${validate_component(NavLink, "NavLink").$$render($$result, { node: node2, isSelected, onClick }, {}, {})}`;
      }
    }
  )}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const worksHierarchy = data.worksData && hierarchy(data.worksData);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(PageNav, "PageNav").$$render($$result, { route: "/works" }, {}, {
    default: ({ onClick }) => {
      return `${each(worksHierarchy.children, (child) => {
        return `${validate_component(SubNav, "SubNav").$$render($$result, { node: child, onClick }, {}, {})}`;
      })}`;
    }
  })} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
