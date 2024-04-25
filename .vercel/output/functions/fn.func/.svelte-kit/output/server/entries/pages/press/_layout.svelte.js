import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { P as PressLink } from "../../../chunks/PressLink.js";
import { P as PageNav } from "../../../chunks/PageNav.js";
import { S as SelectList } from "../../../chunks/SelectList.js";
const href = "/press";
const labelText = "ALL CLIENTS";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let presses;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  presses = data.presses;
  return `${validate_component(PageNav, "PageNav").$$render($$result, { route: "/press" }, {}, {
    default: ({ onClick }) => {
      return `${validate_component(SelectList, "SelectList").$$render(
        $$result,
        {
          labelText,
          collapsable: true,
          selectable: true,
          containsCurrent: true,
          items: presses
        },
        {},
        {
          "label-link": () => {
            return `<a slot="label-link"${add_attribute("href", href, 0)} class="w-full">${escape(labelText)}</a>`;
          },
          default: ({ isSelected, item: press }) => {
            return `${validate_component(PressLink, "PressLink").$$render($$result, { press, isSelected, onClick }, {}, {})}`;
          }
        }
      )}`;
    }
  })} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
