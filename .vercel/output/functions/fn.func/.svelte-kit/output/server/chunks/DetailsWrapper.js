import { c as create_ssr_component, e as escape, v as validate_component } from "./ssr.js";
import { P as PaneNavigation } from "./PaneNavigation.js";
import { C as ContentPane, S as ScrollContainer } from "./SectionWrapper.js";
const DetailsWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "md:w-128" } = $$props;
  let { minimizedIconText = "details" } = $$props;
  let { closeUrl, title, subtitle, minimizedLabelText } = $$props;
  let minimized = false;
  const show = () => minimized = false;
  const minimize = () => minimized = true;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.minimizedIconText === void 0 && $$bindings.minimizedIconText && minimizedIconText !== void 0)
    $$bindings.minimizedIconText(minimizedIconText);
  if ($$props.closeUrl === void 0 && $$bindings.closeUrl && closeUrl !== void 0)
    $$bindings.closeUrl(closeUrl);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.minimizedLabelText === void 0 && $$bindings.minimizedLabelText && minimizedLabelText !== void 0)
    $$bindings.minimizedLabelText(minimizedLabelText);
  return `<main class="${"pointer-events-auto relative z-20 w-full md:flex-initial border-t md:border-t-0 md:border-l border-bprimary/80 " + escape(
    minimized ? "order-first md:order-last h-fit md:w-1/2 md:border-b" : "order-last flex-1 h-1/2 md:h-full md:w-fit",
    true
  )}">${validate_component(ContentPane, "ContentPane").$$render($$result, { width, minimized }, {}, {
    default: () => {
      return `${validate_component(PaneNavigation, "PaneNavigation").$$render(
        $$result,
        {
          minimize,
          show,
          closeUrl,
          title,
          subtitle,
          minimized,
          minimizedIconText,
          minimizedLabelText
        },
        {},
        {}
      )} ${validate_component(ScrollContainer, "ScrollContainer").$$render($$result, { show, minimized }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}</main>`;
});
export {
  DetailsWrapper as D
};
