import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "./ssr.js";
import { P as PaneNavigation, B as ButtonStyles } from "./PaneNavigation.js";
import { B as BlockQuote } from "./BlockQuote.js";
const GraphHUD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, subtitle, textBlock, detailsUrl, closeUrl, detailsLinkText = "details" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.textBlock === void 0 && $$bindings.textBlock && textBlock !== void 0)
    $$bindings.textBlock(textBlock);
  if ($$props.detailsUrl === void 0 && $$bindings.detailsUrl && detailsUrl !== void 0)
    $$bindings.detailsUrl(detailsUrl);
  if ($$props.closeUrl === void 0 && $$bindings.closeUrl && closeUrl !== void 0)
    $$bindings.closeUrl(closeUrl);
  if ($$props.detailsLinkText === void 0 && $$bindings.detailsLinkText && detailsLinkText !== void 0)
    $$bindings.detailsLinkText(detailsLinkText);
  return `<div class="pointer-events-auto fixed z-20 top-0 right-0 p-4 pl-20 md:p-8 w-full md:w-fit h-fit min-w-80 max-w-128"><div class="bg-bg-darkest/70 backdrop-blur-sm p-4 border border-bprimary/80">${validate_component(PaneNavigation, "PaneNavigation").$$render($$result, { title, subtitle, closeUrl }, {}, {})} ${textBlock ? `${validate_component(BlockQuote, "BlockQuote").$$render($$result, { content: textBlock }, {}, {})}` : ``} ${detailsUrl ? `<a${add_attribute("href", detailsUrl, 0)} class="block mt-6">${validate_component(ButtonStyles, "ButtonStyles").$$render($$result, { xs: true, outline: true }, {}, {
    default: () => {
      return `<span>${escape(detailsLinkText)}</span>`;
    }
  })}</a>` : ``}</div></div>`;
});
export {
  GraphHUD as G
};
