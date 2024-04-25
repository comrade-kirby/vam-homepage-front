import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from "./ssr.js";
const gradientStyles = "bg-gradient-to-br to-black from-ttertiary/80 via-tsecondary/70";
const PaneNavigationArt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick, display = false } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  return `${display ? `<button class="${"absolute -left-6 top-2 size-16 rounded-full backdrop-blur-sm " + escape(gradientStyles, true)}"></button>` : ``}`;
});
const PaneNavigationSlug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick, minimizedLabelText, minimizedIconText } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.minimizedLabelText === void 0 && $$bindings.minimizedLabelText && minimizedLabelText !== void 0)
    $$bindings.minimizedLabelText(minimizedLabelText);
  if ($$props.minimizedIconText === void 0 && $$bindings.minimizedIconText && minimizedIconText !== void 0)
    $$bindings.minimizedIconText(minimizedIconText);
  return `<button class="w-full z-30 flex items-center justify-start space-x-2"><div class="uppercase bg-ttertiary/90 py-1 px-2 text-3xs font-bold text-bg-dark/90 rounded-sm tracking-widest">${escape(minimizedIconText)}</div> <h1 class="text-sm text-tsecondary/80 tracking-wider line-clamp-1">${escape(minimizedLabelText)}</h1></button>`;
});
const PaneNavigationTitles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, subtitle } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `${title ? `<div class="flex min-h-10 flex-col w-full items-start z-30"><h1 class="text-base text-tprimary tracking-wider line-clamp-2">${escape(title)}</h1> ${subtitle ? `<h2 class="text-xs text-orange-500/70 tracking-wide">${escape(subtitle)}</h2>` : ``}</div>` : ``}`;
});
const ButtonStyles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { xs, xl, outline, center } = $$props;
  if ($$props.xs === void 0 && $$bindings.xs && xs !== void 0)
    $$bindings.xs(xs);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  return `<div class="${"w-fit text-tprimary/90 tracking-wide " + escape(center && "w-full", true) + " " + escape(xl && "text-xl", true) + " " + escape(xs && "text-xs", true) + " " + escape(
    outline ? "px-4 py-2 border border-tprimary/90 rounded-lg font-bold  hover:text-tsecondary/90 hover:border-tsecondary/90" : "hover:text-ttertiary/90",
    true
  )}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Html = "&#95;";
const HideButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { minimize } = $$props;
  if ($$props.minimize === void 0 && $$bindings.minimize && minimize !== void 0)
    $$bindings.minimize(minimize);
  return `<button class="h-full">${validate_component(ButtonStyles, "ButtonStyles").$$render($$result, { xl: true }, {}, {
    default: () => {
      return `<span><!-- HTML_TAG_START -->${Html}<!-- HTML_TAG_END --></span>`;
    }
  })}</button>`;
});
const xHtml = "&#10005;";
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="h-full">${validate_component(ButtonStyles, "ButtonStyles").$$render($$result, { xl: true }, {}, {
    default: () => {
      return `<span><!-- HTML_TAG_START -->${xHtml}<!-- HTML_TAG_END --></span>`;
    }
  })}</a>`;
});
const PaneNavigationButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { minimize, closeUrl } = $$props;
  if ($$props.minimize === void 0 && $$bindings.minimize && minimize !== void 0)
    $$bindings.minimize(minimize);
  if ($$props.closeUrl === void 0 && $$bindings.closeUrl && closeUrl !== void 0)
    $$bindings.closeUrl(closeUrl);
  return `<div class="flex ml-6 max-h-6 space-x-4 items-center">${minimize ? `${validate_component(HideButton, "HideButton").$$render($$result, { minimize }, {}, {})}` : ``} ${closeUrl ? `${validate_component(CloseButton, "CloseButton").$$render($$result, { href: closeUrl }, {}, {})}` : ``}</div>`;
});
const PaneNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { minimized, title, subtitle, minimize, minimizedLabelText, show, closeUrl, minimizedIconText } = $$props;
  if ($$props.minimized === void 0 && $$bindings.minimized && minimized !== void 0)
    $$bindings.minimized(minimized);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.minimize === void 0 && $$bindings.minimize && minimize !== void 0)
    $$bindings.minimize(minimize);
  if ($$props.minimizedLabelText === void 0 && $$bindings.minimizedLabelText && minimizedLabelText !== void 0)
    $$bindings.minimizedLabelText(minimizedLabelText);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.closeUrl === void 0 && $$bindings.closeUrl && closeUrl !== void 0)
    $$bindings.closeUrl(closeUrl);
  if ($$props.minimizedIconText === void 0 && $$bindings.minimizedIconText && minimizedIconText !== void 0)
    $$bindings.minimizedIconText(minimizedIconText);
  return `<div class="${"flex flex-col z-40 h-fit items-start " + escape(
    minimized ? "w-full" : title ? "w-full pb-4" : "w-fit self-end -mb-6",
    true
  )}"><div class="${"flex " + escape(title ? "justify-between" : "justify-end", true) + " w-full"}">${!minimized ? `${validate_component(PaneNavigationArt, "PaneNavigationArt").$$render($$result, { onClick: show, display: title }, {}, {})}` : ``} ${minimized ? `${validate_component(PaneNavigationSlug, "PaneNavigationSlug").$$render(
    $$result,
    {
      onClick: show,
      minimizedLabelText,
      minimizedIconText
    },
    {},
    {}
  )}` : `${validate_component(PaneNavigationTitles, "PaneNavigationTitles").$$render($$result, { title, subtitle, minimized }, {}, {})}`} ${validate_component(PaneNavigationButtons, "PaneNavigationButtons").$$render($$result, { minimize, closeUrl }, {}, {})}</div></div>`;
});
export {
  ButtonStyles as B,
  PaneNavigation as P
};
