import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, a as subscribe, d as each } from "./ssr.js";
import { a as SectionWrapper } from "./SectionWrapper.js";
import { p as page } from "./stores.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text, subtext, href, clamp1, onHover, isSelected, onClick } = $$props;
  const textSize = subtext ? "text-2xs" : "text-xs";
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.subtext === void 0 && $$bindings.subtext && subtext !== void 0)
    $$bindings.subtext(subtext);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.clamp1 === void 0 && $$bindings.clamp1 && clamp1 !== void 0)
    $$bindings.clamp1(clamp1);
  if ($$props.onHover === void 0 && $$bindings.onHover && onHover !== void 0)
    $$bindings.onHover(onHover);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<a${add_attribute("href", href, 0)} class="${"flex flex-col " + escape(
    isSelected ? "text-tsecondary/90" : "text-tprimary/90 hover:text-tsecondary/80",
    true
  ) + " group"}"><span class="${escape(clamp1 ? "line-clamp-1" : "line-clamp-2", true) + " " + escape(textSize, true)}">${escape(text)}</span> ${subtext ? `<span class="${"text-3xs " + escape(
    isSelected ? "text-tsecondary/90" : "text-orange-500/90 group-hover:text-tsecondary",
    true
  ) + " tracking-wide"}">${escape(subtext)}</span>` : ``}</a>`;
});
const SelectListItemContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expanded } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  return `${expanded ? `<ul role="list" class="border-l border-orange-500/20 pl-1 ml-0.5 mb-6">${slots.default ? slots.default({}) : ``}</ul>` : ``}`;
});
const SectionLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { collapsable, containsCurrent = true } = $$props;
  if ($$props.collapsable === void 0 && $$bindings.collapsable && collapsable !== void 0)
    $$bindings.collapsable(collapsable);
  if ($$props.containsCurrent === void 0 && $$bindings.containsCurrent && containsCurrent !== void 0)
    $$bindings.containsCurrent(containsCurrent);
  return `<h3 class="${"group text-xl text-nowrap font-black flex mb-2 max-w-full tracking-widest " + escape(
    collapsable ? containsCurrent ? "text-ttertiary/70" : "text-tprimary/50 hover:text-ttertiary/60" : "text-tprimary/80",
    true
  )}">${slots.default ? slots.default({}) : ``}</h3>`;
});
const desktopStyles = "md:flex";
const NavLeafCount = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show, childCount } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.childCount === void 0 && $$bindings.childCount && childCount !== void 0)
    $$bindings.childCount(childCount);
  return `${show ? `<span class="${"hidden " + escape(desktopStyles, true) + " text-tprimary/50 group-hover:text-tprimary/80 flex ml-1 text-xs"}">+${escape(childCount)}</span>` : ``}`;
});
const SelectListLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { containsCurrent, expanded, childCount } = $$props;
  if ($$props.containsCurrent === void 0 && $$bindings.containsCurrent && containsCurrent !== void 0)
    $$bindings.containsCurrent(containsCurrent);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.childCount === void 0 && $$bindings.childCount && childCount !== void 0)
    $$bindings.childCount(childCount);
  return `${validate_component(SectionLabel, "SectionLabel").$$render($$result, { containsCurrent, collapsable: true }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``} ${validate_component(NavLeafCount, "NavLeafCount").$$render($$result, { show: !expanded, childCount }, {}, {})}`;
    }
  })}`;
});
const SelectListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageSlug;
  let isSelected;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { item, selectable = false } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable !== void 0)
    $$bindings.selectable(selectable);
  pageSlug = $page.url.pathname;
  isSelected = selectable && pageSlug.includes(item.data.slug);
  $$unsubscribe_page();
  return `<li class="relative group -ml-1 pl-2 mb-2"><div class="absolute flex top-1 h-full -left-0.5 w-0.5"><div class="${"h-1/2 w-full " + escape(
    isSelected ? "bg-orange-500/80" : "group-hover:bg-orange-500/50",
    true
  )}"></div></div> ${slots.default ? slots.default({ isSelected }) : ``}</li>`;
});
const SelectList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { collapsable = false } = $$props;
  let { selectable = false } = $$props;
  let { items, containsCurrent, labelText } = $$props;
  let expanded = true;
  if ($$props.collapsable === void 0 && $$bindings.collapsable && collapsable !== void 0)
    $$bindings.collapsable(collapsable);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable !== void 0)
    $$bindings.selectable(selectable);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.containsCurrent === void 0 && $$bindings.containsCurrent && containsCurrent !== void 0)
    $$bindings.containsCurrent(containsCurrent);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { dependent: items.length }, {}, {
    default: () => {
      return `<button class="max-w-full relative -left-2">${validate_component(SelectListLabel, "SelectListLabel").$$render(
        $$result,
        {
          containsCurrent,
          expanded,
          childCount: items.length
        },
        {},
        {
          default: () => {
            return `${slots["label-link"] ? slots["label-link"]({}) : ` ${escape(labelText)} `}`;
          }
        }
      )}</button> ${validate_component(SelectListItemContainer, "SelectListItemContainer").$$render($$result, { expanded }, {}, {
        default: () => {
          return `${each(items, (item) => {
            return `${validate_component(SelectListItem, "SelectListItem").$$render($$result, { item, selectable }, {}, {
              default: ({ isSelected }) => {
                return `${slots.default ? slots.default({ item, isSelected }) : ``} `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}`;
});
export {
  Link as L,
  SelectList as S,
  SectionLabel as a
};
