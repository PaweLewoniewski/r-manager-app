import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";
import { OrderCardKitchen } from "../../components/OrderCardKitchen/OrderCardKitchen";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export const Kitchen = () => {
  const [ enterAnimation ] = useState(true);
  const { cartItems, orderShop } = useShoppingCart();

  const ordersTakeway = cartItems.filter((item) => item.atLocation === false);
  if (ordersTakeway === undefined) return null;

  const ordersAtLocation = cartItems.filter((item) => item.atLocation === true);
  if (ordersAtLocation === undefined) return null;

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
            <Typography component={"span"} variant="h4" sx={{ color: "white" }}>
              Kitchen
            </Typography>
          </Title>
          <ContentBox>
            <Box sx={{ width: "50%" }}>
              <BoxTitle>
                <Typography
                  component={"span"}
                  variant="h6"
                  sx={{ color: "white" }}
                >
                  Takeaway
                </Typography>
              </BoxTitle>
              <BoxOrders>
                {ordersTakeway !== undefined && orderShop === true
                  ? ordersTakeway.map((item) => (
                        <OrderCardKitchen key={item.id} {...item} />
                    ))
                  : ""}
              </BoxOrders>
            </Box>
            <Separator />
            <Box sx={{ width: "50%" }}>
              <BoxTitle>
                <Typography
                  component={"span"}
                  variant="h6"
                  sx={{ color: "white" }}
                >
                  At location
                </Typography>
              </BoxTitle>
              <BoxOrders>
                {ordersAtLocation !== undefined && orderShop === true
                  ? ordersAtLocation.map((item) => (
                      <OrderCardKitchen key={item.id} {...item} />
                    ))
                  : ""}
              </BoxOrders>
            </Box>
          </ContentBox>
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
  margin: 5px;
`;

const ContentPage = styled.div`
  margin: 0 auto;
  /* width: 100%; */
  height: 100%;
  padding: 20px;
  width: 1000px;
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
  margin: 20px 0px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BoxTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Separator = styled.div`
  height: 100%;
  width: 1px;
  background: white;
`;

const BoxOrders = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
