import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { P as PageNav } from "../../../chunks/PageNav.js";
import { p as page } from "../../../chunks/stores.js";
import { f as forceGraph } from "../../../chunks/stores2.js";
import { L as Link, S as SelectList } from "../../../chunks/SelectList.js";
const ClientLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkToDetails;
  let href2;
  let $page, $$unsubscribe_page;
  let $forceGraph, $$unsubscribe_forceGraph;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_forceGraph = subscribe(forceGraph, (value) => $forceGraph = value);
  let { client, isSelected, onClick } = $$props;
  const slug = client.attributes.slug;
  const clientUrl = "/clients/" + slug;
  const clientDetailsUrl = clientUrl + "/details";
  const onHover = () => $forceGraph.onNavHover(clientUrl);
  if ($$props.client === void 0 && $$bindings.client && client !== void 0)
    $$bindings.client(client);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  linkToDetails = $page.url.pathname.includes("details");
  href2 = linkToDetails ? clientDetailsUrl : clientUrl;
  $$unsubscribe_page();
  $$unsubscribe_forceGraph();
  return `${validate_component(Link, "Link").$$render(
    $$result,
    {
      href: href2,
      onHover,
      isSelected,
      onClick,
      text: client.attributes.name
    },
    {},
    {}
  )}`;
});
const href = "/clients";
const labelText = "ALL CLIENTS";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let clients;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  clients = data.clients;
  return `${validate_component(PageNav, "PageNav").$$render($$result, { route: "/clients" }, {}, {
    default: ({ onClick }) => {
      return `${validate_component(SelectList, "SelectList").$$render(
        $$result,
        {
          labelText,
          collapsable: true,
          selectable: true,
          containsCurrent: true,
          items: clients
        },
        {},
        {
          "label-link": () => {
            return `<a slot="label-link"${add_attribute("href", href, 0)} class="w-full">${escape(labelText)}</a>`;
          },
          default: ({ isSelected, item: client }) => {
            return `${validate_component(ClientLink, "ClientLink").$$render($$result, { client, isSelected, onClick }, {}, {})}`;
          }
        }
      )}`;
    }
  })} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
