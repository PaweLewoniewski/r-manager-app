import axios from "axios";

const query: string = `https://us.api.blizzard.com/hearthstone/cards`;

export function getCategories() {
  let token = sessionStorage.getItem("token");
  return axios.get(`${query}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    //   params:{
    //     class:`${char}`,
    //     multiClass:`${char}`,
    //     ...(byText ? {textFilter:`${byText}`} : {}),
    //     ...(mana ? {manaCost:`${mana}`} : {}),
    //     ...(attack ? {attack:`${attack}`} : {}),
    //     ...(health ? {health:`${health}`} : {}),
    //     deckFormat:`${gameMode}`,
    //     set: `${gameMode}`,
    //     sort:'Aasc',
    //     page:`${page}`,
    //     pageSize:'10',
    //     locale:'en_US',
    //     // locale:'pl_PL'
    //   }
    },
  ).then((res) => res.data)
}
