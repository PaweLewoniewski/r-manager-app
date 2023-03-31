import React, { useEffect, useState } from "react";
import { Slide } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";
import { StripesShape } from "../../assets/StripesShape/StripesShape";
import { MenuCard } from "../../components/MenuCard/MenuCard";
import { ImageNestedData } from "../../data/dataTypes";
import shopStoreItems from "../../data/database.json";

export interface CategoryCardData {
  title: string;
  image: ImageNestedData;
}

interface CategoryData {
  id: number;
  title: string;
  url: string;
}

export const CategoryMenu = () => {
  const [categoryCards, setCategoryCards] = useState<CategoryData[]>();
  const [enterAnimation, setEnterAnimation] = useState(false);
  const navigate = useNavigate();

  const goToCategoryLinkHandler = (title: string) => {
    navigate("/food", { state: { titlePage: title } });
  };

  useEffect(() => {
    setCategoryCards(shopStoreItems.menu);
    setEnterAnimation(true);
  }, [categoryCards])

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
          {...(enterAnimation ? { timeout: 800 } : {})}
        >
          <ContentPage>
            {categoryCards !== undefined
              ? categoryCards.map(item => (
                <MenuCard
                  key={item.id || 0}
                  data={item}
                  onClick={() => goToCategoryLinkHandler(item.title)}
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
  padding: 20px;
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

// const placeholdercardData = {
//   title: "Loading...",
//   url: `${BgCategory}`,
// };

// export interface CategoryData {
//   id: number;
//   attributes: CategoryCardData;
// }

  // const { refetch, status, data } = useQuery({
  //   queryKey: ["MenuCategoriesData"],
  //   queryFn: getCategories,
  //   placeholderData: placeholdercardData,
  //   onSuccess: (data) => {
  //     setCategoryCards(data), setEnterAnimation(true);
  //   },
  // });

  // if (data.title === "loading...") return <div style={{color:'black'}}>Loading...</div>;

  // if (status === "error") return <div>An error has occurred</div>;

{/* <ContentPage>
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
</ContentPage> */}