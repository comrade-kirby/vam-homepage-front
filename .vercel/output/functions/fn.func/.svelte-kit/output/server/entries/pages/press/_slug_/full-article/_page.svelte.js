import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import { a as SectionWrapper } from "../../../../../chunks/SectionWrapper.js";
import { B as ButtonStyles } from "../../../../../chunks/PaneNavigation.js";
import { B as BlockQuote } from "../../../../../chunks/BlockQuote.js";
import { D as DetailsWrapper } from "../../../../../chunks/DetailsWrapper.js";
const ArticleEmbed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let publication;
  let snippet;
  let url;
  let { press } = $$props;
  let container, frame;
  if ($$props.press === void 0 && $$bindings.press && press !== void 0)
    $$bindings.press(press);
  publication = press.publication;
  snippet = press.snippet;
  url = press.url;
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { dependent: frame, hFull: true }, {}, {
    default: () => {
      return `${`${`${validate_component(BlockQuote, "BlockQuote").$$render($$result, { content: snippet }, {}, {})} <div class="flex mt-4 p-4 border-2 border-tsecondary/60 bg-orange-400/20 w-fit "><span class="text-xs mr-2 text-tprimary/70" data-svelte-h="svelte-1f7bosz">content unavailable:</span> <a class="underline"${add_attribute("href", url, 0)} target="_blank">${validate_component(ButtonStyles, "ButtonStyles").$$render($$result, { xs: true }, {}, {
        default: () => {
          return `<span>view on ${escape(publication)} ⤴</span>`;
        }
      })}</a></div>`}`} <div class="${"h-full bg-tprimary/90 " + escape("invisible", true)}"${add_attribute("this", container, 0)}><iframe${add_attribute("src", url, 0)} style="width:100%; height:100%;" frameborder="0"${add_attribute("this", frame, 0)}></iframe></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let press;
  let title;
  let slug;
  let closeUrl;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  press = data.press.attributes;
  title = press.title;
  slug = "/" + press.slug;
  closeUrl = "/press" + slug;
  return `${validate_component(DetailsWrapper, "DetailsWrapper").$$render(
    $$result,
    {
      closeUrl,
      title,
      width: "w-full md:w-160",
      minimizedLabelText: slug,
      minimizedIconText: "article"
    },
    {},
    {
      default: () => {
        return `${validate_component(ArticleEmbed, "ArticleEmbed").$$render($$result, { press }, {}, {})}`;
      }
    }
  )}`;
});
export {
  Page as default
};
