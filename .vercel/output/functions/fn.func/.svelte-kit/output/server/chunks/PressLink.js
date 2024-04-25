import { c as create_ssr_component, a as subscribe, v as validate_component } from "./ssr.js";
import { p as page } from "./stores.js";
import { L as Link } from "./SelectList.js";
const PressLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkToFullArticle;
  let href;
  let inPressNav;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { press, isSelected, onClick } = $$props;
  const articlePageHref = "/press/" + press.attributes.slug;
  const fullArticleHref = articlePageHref + "/full-article";
  if ($$props.press === void 0 && $$bindings.press && press !== void 0)
    $$bindings.press(press);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  linkToFullArticle = $page.url.pathname.includes("details") || $page.url.pathname.includes("full-article");
  href = linkToFullArticle ? fullArticleHref : articlePageHref;
  inPressNav = $page.url.pathname.includes("press");
  isSelected = isSelected && inPressNav;
  $$unsubscribe_page();
  return `${validate_component(Link, "Link").$$render(
    $$result,
    {
      href,
      onClick,
      text: press.attributes.title,
      subtext: press.attributes.publication
    },
    {},
    {}
  )}`;
});
export {
  PressLink as P
};
