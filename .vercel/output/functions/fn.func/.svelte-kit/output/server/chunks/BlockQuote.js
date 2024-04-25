import { c as create_ssr_component, e as escape } from "./ssr.js";
const BlockQuote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `<p class="mb-4 text-2xs text-tprimary/70 leading-relaxed">${escape(content)}</p>`;
});
export {
  BlockQuote as B
};
