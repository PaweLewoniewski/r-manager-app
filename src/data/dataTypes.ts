export interface CardProps {
  id: number;
  title: string;
  url: string;
  description: string;
  price:number;
  baseTime:number;
}

export interface inputTableTypes {
    id:number;
    value:number;
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