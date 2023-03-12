import { Slide } from "@mui/material";
import Grow from "@mui/material/Grow";
import { useState } from "react";
import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";
import { ListCard } from "../../components/ListCard/ListCard";

export const FoodMenu = () => {
  const [enterAnimation, setEnterAnimation] = useState(true);
  const [enterGrowAnimation, setEnterGrowAnimation] = useState(true);
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
            <ListCard />
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
