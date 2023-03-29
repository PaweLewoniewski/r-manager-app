import React, { useEffect, useState } from 'react';
import { Slide, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";
import { ListCard } from "../../components/ListCard/ListCard";
import { pageHelper } from '../../queries/queryHelper';

interface ShopStoreItem {
  id: number;
  title: string;
  url: string;
  description: string;
  price: number;
}

export const ShopStore = () => {
  const [enterAnimation, setEnterAnimation] = useState(true);
  const [storeCards, setStoreCards] = useState<ShopStoreItem[]>();
  const { state } = useLocation();
  const { titlePage } = state;
 
  useEffect(() => {
    setStoreCards(pageHelper(titlePage));
    setEnterAnimation(true);
  }, [storeCards])

  return (
    <Slide
      direction={"down"}
      in={enterAnimation}
      mountOnEnter
      unmountOnExit
      {...(enterAnimation ? { timeout: 500 } : {})}
    >
      <Wrapper>
        <ContentPage>
          <Title>
            <Typography component={'span'} variant="h4" sx={{ color: "white" }}>
              {titlePage}
            </Typography>
          </Title>
          <Listing>
            {storeCards !== undefined
              ? storeCards.map(item => (
                <ListCard
                  key={item.id}
                  data={item}
                />
              )
              )
              : ""}
          </Listing>
        </ContentPage>
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
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 2;
  border-left: 1px solid white;
  border-right: 1px solid white;
  background-color: rgba(48, 48, 48, 0.5);
  backdrop-filter: blur(10px);
  @media (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid white;
  width: 100%;
  margin:20px 5px;
`;

const Listing = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// export interface DataFoodMenu {
//   title: string;
//   description: string;
//   image: ImageNestedData;
// }

// export interface CategoryData {
//   id: number;
//   attributes: DataFoodMenu;
// }

// const { refetch, status, data } = useQuery({
//   queryKey: ["MenuFoodData"],
//   queryFn: () => getFoodMenu(titlePage),
//   // placeholderData: placeholdercardData,
//   onSuccess: (data) => {
//     setStoreCards(data), setEnterAnimation(true);
//   },
// });

// if (status === "loading") return <div>Loading...</div>;

// if (status === "error") return <div>An error has occurred</div>;

{/* <Listing>
{storeCards !== undefined
  ? storeCards.map(
      ({
        id,
        attributes: {
          title,
          description,
          image: {
            data: [
              {
                attributes: { url },
              },
            ],
          },
        },
      }: CategoryData) => (
        <ListCard
          key={id}
          data={{ title, description, url, id }}
          atLocation={false}
        />
      )
    )
  : ""}
  </Listing> */}