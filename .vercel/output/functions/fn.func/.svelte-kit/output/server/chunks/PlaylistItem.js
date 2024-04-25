import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
const PlaylistItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let work;
  let title;
  let client;
  let href;
  let oembedData;
  let { node } = $$props;
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  work = node.data || node.attributes;
  title = work.attributes?.title || work.title;
  client = work.client;
  href = work.slug + "/details";
  oembedData = work.oembedData;
  return `<a${add_attribute("href", href, 0)} class="group relative overflow-show items-start flex w-full">${oembedData ? `<img class="h-20 aspect-video"${add_attribute("src", oembedData.thumbnail, 0)}>` : ``} <div class="flex flex-col h-full p-1 ml-1 text-left"><h3 class="text-xs font-medium text-tprimary/80 group-hover:text-orange-500/80 line-clamp-[2] tracking-wide">${escape(title)}</h3> <h4 class="text-2xs text-orange-500/80 group-hover:text-orange-500/60 tracking-wide">${escape(client.name)}</h4></div></a>`;
});
export {
  PlaylistItem as P
};
