import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { G as GraphHUD } from "../../../../chunks/GraphHUD.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let work;
  let title;
  let subtitle;
  let slug;
  let closeUrl;
  let detailsUrl;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  work = data.work;
  title = work?.data.attributes.title;
  subtitle = work?.data.attributes.client.data.attributes.name;
  slug = work?.data.attributes.slug;
  closeUrl = "/works";
  detailsUrl = work ? "/works/" + slug + "/details" : false;
  return `${work ? `${validate_component(GraphHUD, "GraphHud").$$render($$result, { title, subtitle, detailsUrl, closeUrl }, {}, {})}` : ``}`;
});
export {
  Page as default
};
