import { S as STRAPI_API_KEY } from "../../../chunks/private.js";
async function load({}) {
  const url = `/api/clients?populate[0]=works&populate[1]=logo`;
  const response = await fetch(`http://localhost:1337${url}`, {
    headers: {
      "Authorization": `bearer ${STRAPI_API_KEY}`
    }
  });
  let clients = await response.json();
  clients = clients.data.map((client) => {
    client.data = { slug: "/clients/" + client.attributes.slug };
    return client;
  });
  return { clients };
}
export {
  load
};
