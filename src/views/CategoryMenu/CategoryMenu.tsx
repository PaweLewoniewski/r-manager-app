import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";
import { StripesShape } from "../../assets/img/StripesShape/StripesShape";
import { MenuCard } from "../../components/MenuCard/MenuCard";
import { getCategories } from "../../queries/getCategories";

export interface ImgUrl {
  url:string;
}

interface ImageData {
  id:number;
  attributes:ImgUrl;
}

interface ImageNestedData {
  data:ImageData[];
}

export interface CategoryCardData {
  title: string;
  image: ImageNestedData;
}

export interface CategoryData {
  id?: number;
  attributes: CategoryCardData;
}

const placeholdercardData = 
  {
      title: "Loading...",
      url:`${BgCategory}`
  }
;

export const CategoryMenu = () => {
  const [categoryCards, setCategoryCards] = useState<CategoryData[]>();

  const { refetch, status, data } = useQuery({
    queryKey: ["MenuCategoriesData"],
    queryFn: getCategories,
    placeholderData: placeholdercardData,
    onSuccess: (data) => setCategoryCards(data),
  });

  if (status === "loading") return <div>"Loading..."</div>;

  if (status === "error") return <div>An error has occurred</div>;

  return (
    <Wrapper>
      <StripesShape />
      <ContentPage>
          {categoryCards !== undefined
            ? categoryCards.map(({attributes:{ title, image: { data:[{ id, attributes:{ url } }] }} }:CategoryData) => (
                <MenuCard key={id || 0} data={{title,url} || placeholdercardData}/>
              ))
            : ""}
      </ContentPage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: url(${BgCategory}) no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;
`;

const ContentPage = styled.div`
  margin: 0 auto;
  width: 100%;
  /* height: 100%; */
  padding:20px;
  /* max-width: 1488px; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(48, 48, 48, 0.5);
  backdrop-filter: blur(10px);
  @media (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
  }
`;
