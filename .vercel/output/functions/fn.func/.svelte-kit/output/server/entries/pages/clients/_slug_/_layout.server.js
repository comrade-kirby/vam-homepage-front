import { S as STRAPI_API_KEY } from "../../../../chunks/private.js";
async function load({ params }) {
  const url = `/api/clients?filters[slug][$eq]=${params.slug}&populate[presses][fields][0]=title&populate[presses][fields][1]=slug&populate[presses][fields][2]=publication&populate[presses][populate][0]=logo&populate[works][fields][0]=title&populate[works][fields][1]=slug&populate[works][fields][2]=vimeoUrl&populate[works][populate][0]=client`;
  const response = await fetch(`http://localhost:1337${url}`, {
    headers: {
      "Authorization": `bearer ${STRAPI_API_KEY}`
    }
  });
  let client = await response.json();
  client = client.data[0];
  client.attributes.works.data.forEach((work) => {
    work.attributes.client = work.attributes.client.data.attributes;
    work.attributes.slug = "/works/" + work.attributes.slug;
    work.attributes.oembedData = JSON.parse(work.attributes.vimeoUrl);
  });
  return { client };
}
export {
  load
};
