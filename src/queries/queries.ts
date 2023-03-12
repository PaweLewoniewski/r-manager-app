import axios from "axios";

const queryCategoriesMenu: string = `https://restaurant-menager-strapi.onrender.com/api/menus?populate=*`;
const queryDinners: string = `https://restaurant-menager-strapi.onrender.com/api/dinners?populate=*`;

export function getCategories() {
  return axios.get(`${queryCategoriesMenu}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => res.data.data);
}


export function getFoodMenu() {
  return axios.get(`${queryDinners}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => res.data.data);
}
