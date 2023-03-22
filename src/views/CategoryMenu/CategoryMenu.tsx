import { Slide } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";
import { StripesShape } from "../../assets/StripesShape/StripesShape";
import { MenuCard } from "../../components/MenuCard/MenuCard";
import { ImageNestedData } from "../../data/dataTypes";
import { getCategories } from "../../queries/queries";

export interface CategoryCardData {
  title: string;
  image: ImageNestedData;
}

export interface CategoryData {
  id?: number;
  attributes: CategoryCardData;
}

const placeholdercardData = {
  title: "Loading...",
  url: `${BgCategory}`,
};
export const CategoryMenu = () => {
  const [categoryCards, setCategoryCards] = useState<CategoryData[]>();
  const [enterAnimation, setEnterAnimation] = useState(false);
  const navigate = useNavigate();

  const goToCategoryLinkHandler = (title: string) => {
    navigate("/food", { state: { titlePage: title } });
  };

  const { refetch, status, data } = useQuery({
    queryKey: ["MenuCategoriesData"],
    queryFn: getCategories,
    placeholderData: placeholdercardData,
    onSuccess: (data) => {
      setCategoryCards(data), setEnterAnimation(true);
    },
  });
  console.log(categoryCards);
  if (status === "loading") return <div>"Loading..."</div>;

  if (status === "error") return <div>An error has occurred</div>;

  return (
    <Slide
      direction={"left"}
      in={enterAnimation}
      mountOnEnter
      unmountOnExit
      {...(enterAnimation ? { timeout: 500 } : {})}
    >
      <Wrapper>
        <StripesShape />
        <Slide
          direction="right"
          in={enterAnimation}
          mountOnEnter
          unmountOnExit
          {...(enterAnimation ? { timeout: 500 } : {})}
        >
          <ContentPage>
            {categoryCards !== undefined
              ? categoryCards.map(
                  ({
                    attributes: {
                      title,
                      image: {
                        data: [
                          {
                            id,
                            attributes: { url },
                          },
                        ],
                      },
                    },
                  }: CategoryData) => (
                    <MenuCard
                      key={id || 0}
                      data={{ title, url } || placeholdercardData}
                      onClick={() => goToCategoryLinkHandler(title)}
                    />
                  )
                )
              : ""}
          </ContentPage>
        </Slide>
      </Wrapper>
    </Slide>
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
  margin:5px;
`;

const ContentPage = styled.div`
  margin: 0 auto;
  width: 100%;
  /* height: 100%; */
  padding: 20px;
  /* max-width: 1488px; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  background-color: rgba(48, 48, 48, 0.5);
  backdrop-filter: blur(10px);
  @media (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
  }
`;
