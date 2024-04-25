import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { G as GraphHUD } from "../../../../chunks/GraphHUD.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let press;
  let title;
  let textBlock;
  let slug;
  let closeUrl;
  let detailsUrl;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  press = data.press;
  title = press.attributes.title;
  textBlock = press.attributes.snippet;
  slug = press.attributes.slug;
  closeUrl = "/press";
  detailsUrl = "/press/" + slug + "/full-article";
  return `${press ? `${validate_component(GraphHUD, "GraphHud").$$render(
    $$result,
    {
      title,
      textBlock,
      detailsUrl,
      closeUrl,
      detailsLinkText: "full article"
    },
    {},
    {}
  )}` : ``}`;
});
export {
  Page as default
};
