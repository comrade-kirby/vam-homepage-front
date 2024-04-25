import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { G as GraphHUD } from "../../../../chunks/GraphHUD.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let client;
  let title;
  let slug;
  let closeUrl;
  let detailsUrl;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  client = data.client;
  title = client.attributes.name;
  slug = client.attributes.slug;
  closeUrl = "/clients";
  detailsUrl = client ? "/clients/" + slug + "/details" : false;
  return `${client ? `${validate_component(GraphHUD, "GraphHud").$$render($$result, { title, detailsUrl, closeUrl }, {}, {})}` : ``}`;
});
export {
  Page as default
};
