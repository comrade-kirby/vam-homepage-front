import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { S as SelectList } from "../../../../../chunks/SelectList.js";
import { P as PlaylistItem } from "../../../../../chunks/PlaylistItem.js";
import { P as PressLink } from "../../../../../chunks/PressLink.js";
import { D as DetailsWrapper } from "../../../../../chunks/DetailsWrapper.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let client;
  let slug;
  let closeUrl;
  let works;
  let presses;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  client = data.client.attributes;
  slug = "/" + client.slug;
  closeUrl = "/clients" + slug;
  works = client.works.data;
  presses = client.presses.data;
  return `${validate_component(DetailsWrapper, "DetailsWrapper").$$render(
    $$result,
    {
      closeUrl,
      title: client.name,
      minimizedLabelText: slug
    },
    {},
    {
      default: () => {
        return `${validate_component(SelectList, "SelectList").$$render(
          $$result,
          {
            collapsable: true,
            containsCurrent: true,
            labelText: "works",
            items: works
          },
          {},
          {
            default: ({ item: node }) => {
              return `${validate_component(PlaylistItem, "PlaylistItem").$$render($$result, { node }, {}, {})}`;
            }
          }
        )} ${validate_component(SelectList, "SelectList").$$render(
          $$result,
          {
            collapsable: true,
            containsCurrent: true,
            labelText: "press",
            items: presses
          },
          {},
          {
            default: ({ item: press }) => {
              return `${validate_component(PressLink, "MenuLink").$$render($$result, { press }, {}, {})}`;
            }
          }
        )}`;
      }
    }
  )}`;
});
export {
  Page as default
};
