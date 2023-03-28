import axios from "axios";
import { queryHelper } from "./queryHelper";

const queryCategoriesMenu = `https://restaurant-menager-strapi.onrender.com/api/menus?populate=*`;
// const queryDinners: string = `https://restaurant-menager-strapi.onrender.com/api/dinners?populate=*`;
// const queryApi: string = `https://restaurant-menager-strapi.onrender.com/api/`;

export function getCategories() {
  return axios
    .get(`${queryCategoriesMenu}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => res.data.data);
}

export function getFoodMenu(foodType: string) {
  return axios
    .get(`${queryHelper(foodType)}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => res.data.data);
}
