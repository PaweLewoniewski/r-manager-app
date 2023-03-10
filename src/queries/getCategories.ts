import axios from "axios";

const query: string = `https://restaurant-menager-strapi.onrender.com/api/menus?populate=*`;

export function getCategories() {
  return axios.get(`${query}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => res.data.data);
}
