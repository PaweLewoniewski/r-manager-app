export interface CardProps {
  id: number;
  title: string;
  url: string;
  description: string;
  price:number;
}

export interface inputTableTypes {
    id:number;
    value:string;
}

export interface DataFoodMenu {
    title:string;
    description:string;
}

/// bunch of types for request from strapi
export interface ImgUrl {
    url:string;
  }
  
  export interface ImageData {
    id:number;
    attributes:ImgUrl;
  }
  
  export interface ImageNestedData {
    data:ImageData[];
  }
  
  //////////////////////////////////