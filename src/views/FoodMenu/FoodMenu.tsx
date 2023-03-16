import { Slide, Typography } from "@mui/material";
import Grow from "@mui/material/Grow";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";
import { ListCard } from "../../components/ListCard/ListCard";
import { ImageNestedData } from "../../data/dataTypes";
import { getFoodMenu } from "../../queries/queries";

export interface DataFoodMenu {
  title: string;
  description: string;
  image: ImageNestedData;
}

export interface CategoryData {
  id?: number;
  attributes: DataFoodMenu;
}

export const FoodMenu = () => {
  const [enterAnimation, setEnterAnimation] = useState(true);
  const [enterGrowAnimation, setEnterGrowAnimation] = useState(true);
  const [foodCards, setFoodCards] = useState<any[]>();

  const { refetch, status, data } = useQuery({
    queryKey: ["MenuFoodData"],
    queryFn: getFoodMenu,
    // placeholderData: placeholdercardData,
    onSuccess: (data) => {
      setFoodCards(data), setEnterAnimation(true);
    },
  });

  if (status === "loading") return <div>"Loading..."</div>;

  if (status === "error") return <div>An error has occurred</div>;

  return (
    <Slide
      direction={"down"}
      in={enterAnimation}
      mountOnEnter
      unmountOnExit
      {...(enterAnimation ? { timeout: 500 } : {})}
    >
      <Wrapper>
        <Grow
          in={enterGrowAnimation}
          style={{ transformOrigin: "0 0 0" }}
          {...(enterGrowAnimation ? { timeout: 1000 } : {})}
        >
          <ContentPage>
            <Title>
              <Typography variant="h4" sx={{ color: "white" }}>
                Dinners
              </Typography>
            </Title>
            {foodCards !== undefined
              ? foodCards.map(
                  ({
                    attributes: {
                      title,
                      description,
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
                    <ListCard
                      key={id}
                      data={{ title, description, url }}
                      atLocation={false}
                    />
                  )
                )
              : ""}
            {/* <ListCard /> */}
          </ContentPage>
        </Grow>
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
`;

const ContentPage = styled.div`
  margin: 0 auto;
  /* width: 100%; */
  height: 100%;
  padding: 20px;
  /* max-width: 1488px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
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

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid white;
  width: 100%;
  padding:5px;
`;
