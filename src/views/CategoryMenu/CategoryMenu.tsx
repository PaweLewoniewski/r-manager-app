import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";
import { StripesShape } from "../../assets/img/StripesShape/StripesShape";
import { MenuCard } from "../../components/MenuCard/MenuCard";
import { getCategories } from "../../queries/getCategories";

export interface CategoryCardData {
  menuName: string;
  menuImg: [];
}

export interface CategoryData {
  id?: number;
  attributes: CategoryCardData;
}

const placeholdercardData = [
  {
    id: 0,
    attributes: {
      menuName: "Loading...",
    },
  },
];

export const CategoryMenu = () => {
  const [categoryCards, setCategoryCards] = useState<[]>([]);

  const { refetch, status, data } = useQuery({
    queryKey: ["MenuCategoriesData"],
    queryFn: getCategories,
    placeholderData: placeholdercardData,
    onSuccess: (data) => console.log(data),
  });

  if (status === "loading") return <div>"Loading..."</div>;

  if (status === "error") return <div>An error has occurred</div>;

  return (
    <Wrapper>
      <StripesShape />
      <ContentPage>
        {data !== undefined
          ? data.map(({ id, attributes }: CategoryData) => (
              <MenuCard
                key={id}
                attributes={attributes || placeholdercardData}
              />
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
  width: 100%;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1488px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
  }
`;
