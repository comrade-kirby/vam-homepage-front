import { group } from "d3-array";
import { S as STRAPI_API_KEY } from "../../chunks/private.js";
import { s as sanitizeString } from "../../chunks/helpers.js";
async function load({}) {
  const response = await fetch("http://localhost:1337/api/works?populate=*", {
    headers: {
      "Authorization": `bearer ${STRAPI_API_KEY}`
    }
  });
  let works = await response.json();
  const categories = [];
  const clients = [];
  works = works.data.map((work) => {
    const name = work.attributes.title;
    const slug = "/works/" + work.attributes.slug;
    const newCategory = {
      name: work.attributes.category,
      slug: "/works/" + sanitizeString(work.attributes.category)
    };
    const newClient = {
      name: work.attributes.client.data.attributes.name,
      slug: "/clients/" + work.attributes.client.data.attributes.slug
    };
    const categoryIndex = categories.findIndex((category2) => category2.slug === newCategory.slug);
    const category = categoryIndex > -1 ? categories[categoryIndex] : categories.push(newCategory) && newCategory;
    const clientIndex = clients.findIndex((client2) => client2.slug === newClient.slug);
    const client = clientIndex > -1 ? clients[clientIndex] : clients.push(newClient) && newClient;
    const oembedData = JSON.parse(work.attributes.vimeoUrl);
    const videoId = oembedData?.rawData?.video_id;
    return { ...work, name, slug, category, client, oembedData, videoId };
  });
  const graphData = group(works, (d) => d.category, (d) => d.client);
  return { works, graphData };
}
export {
  load
};
