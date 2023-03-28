import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { CardCart } from "../../components/CartCard/CartCard";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export const CartStep = () => {
  const { cartItems } = useShoppingCart();

  return (
    <Wrapper>
      <ContentPage>
        <Title>
          <Typography component={"span"} sx={{ color: "white" }}>
            Your Cart
          </Typography>
        </Title>
        <ContentBox>
          {cartItems !== undefined
            ? cartItems.map((item) => <CardCart key={item.id} {...item} />)
            : ""}
        </ContentBox>
      </ContentPage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid white;
  margin: 20px 5px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom: 1px solid white;
  padding: 5px;
`;
