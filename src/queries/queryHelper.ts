export const queryHelper = (foodType: string) => {
    switch (foodType) {
      case "Dinner":
        return `https://restaurant-menager-strapi.onrender.com/api/dinners?populate=*`;
      case "Breakfast":
        return `https://restaurant-menager-strapi.onrender.com/api/breakfasts?populate=*`;
      case "Lunch":
        return `https://restaurant-menager-strapi.onrender.com/api/lunches?populate=*`;
      default:
        return `https://restaurant-menager-strapi.onrender.com/api/dinners?populate=*`;
    }
  };