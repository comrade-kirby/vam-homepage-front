import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, a as subscribe } from "../../../../../chunks/ssr.js";
import { r as root } from "../../../../../chunks/stores2.js";
import { b as buildRelatedWorksList } from "../../../../../chunks/helpers.js";
import { a as SectionWrapper } from "../../../../../chunks/SectionWrapper.js";
import { P as PressLink } from "../../../../../chunks/PressLink.js";
import { B as ButtonStyles } from "../../../../../chunks/PaneNavigation.js";
import { D as DetailsWrapper } from "../../../../../chunks/DetailsWrapper.js";
import { S as SelectList, a as SectionLabel } from "../../../../../chunks/SelectList.js";
import { P as PlaylistItem } from "../../../../../chunks/PlaylistItem.js";
const upArrowHtml = "&#8593;";
const downArrowHtml = "&#8595;";
const ClampButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonText;
  let htmlIcon;
  let { isClamped } = $$props;
  let { onClick } = $$props;
  if ($$props.isClamped === void 0 && $$bindings.isClamped && isClamped !== void 0)
    $$bindings.isClamped(isClamped);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  buttonText = isClamped ? "show more" : "show less";
  htmlIcon = isClamped ? downArrowHtml : upArrowHtml;
  return `<button class="mt-2">${validate_component(ButtonStyles, "ButtonStyles").$$render($$result, { xs: true, center: true }, {}, {
    default: () => {
      return `<p>${escape(buttonText)}</p> <p><!-- HTML_TAG_START -->${htmlIcon}<!-- HTML_TAG_END --></p>`;
    }
  })}</button>`;
});
const ClampParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { short } = $$props;
  let { content } = $$props;
  let isClamped = true;
  let needsClamp = false;
  let h;
  const reset = (content2) => {
    isClamped = true;
  };
  const toggleClamp = () => isClamped = !isClamped;
  if ($$props.short === void 0 && $$bindings.short && short !== void 0)
    $$bindings.short(short);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  {
    reset();
  }
  needsClamp = short ? h > 70 : h > 100;
  return `<div class="flex flex-col mb-6 text-xs text-tprimary/70 leading-relaxed"><p${add_attribute(
    "class",
    needsClamp && isClamped ? short ? "line-clamp-3" : "line-clamp-5" : "line-clamp-none",
    0
  )}>${escape(content)}</p> ${needsClamp ? `${validate_component(ClampButton, "ClampButton").$$render($$result, { isClamped, onClick: toggleClamp }, {}, {})}` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let work;
  let slug;
  let closeUrl;
  let title;
  let client;
  let subtitle;
  let presses;
  let relatedWorks;
  let $root, $$unsubscribe_root;
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  work = data?.work?.data;
  slug = "/" + work?.attributes.slug;
  closeUrl = "/works" + slug;
  title = work.attributes.title;
  client = work?.attributes.client.data;
  subtitle = client.attributes.name;
  presses = work?.attributes.presses;
  relatedWorks = work && buildRelatedWorksList($root, closeUrl);
  $$unsubscribe_root();
  return `${work ? `${validate_component(DetailsWrapper, "DetailsWrapper").$$render(
    $$result,
    {
      closeUrl,
      title,
      subtitle,
      minimizedLabelText: slug
    },
    {},
    {
      default: () => {
        return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { dependent: work.attributes.description }, {}, {
          default: () => {
            return `${validate_component(ClampParagraph, "ClampParagraph").$$render($$result, { content: work.attributes.description }, {}, {})}`;
          }
        })} ${validate_component(SelectList, "SelectList").$$render(
          $$result,
          {
            collapsable: true,
            containsCurrent: true,
            labelText: "press",
            items: presses
          },
          {},
          {
            default: ({ isSelected, item: press }) => {
              return `${validate_component(PressLink, "PressLink").$$render($$result, { press, isSelected }, {}, {})}`;
            }
          }
        )} ${validate_component(SelectList, "SelectList").$$render(
          $$result,
          {
            collapsable: true,
            selectable: true,
            containsCurrent: true,
            labelText: "related work",
            items: relatedWorks
          },
          {},
          {
            default: ({ isSelected, item: node }) => {
              return `${validate_component(PlaylistItem, "PlaylistItem").$$render($$result, { node, isSelected }, {}, {})}`;
            }
          }
        )} ${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { dependent: work.attributes.credits }, {}, {
          default: () => {
            return `${validate_component(SectionLabel, "SectionLabel").$$render($$result, {}, {}, {
              default: () => {
                return `credits`;
              }
            })} ${validate_component(ClampParagraph, "ClampParagraph").$$render(
              $$result,
              {
                content: work.attributes.credits,
                short: true
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )}` : ``}`;
});
export {
  Page as default
};
