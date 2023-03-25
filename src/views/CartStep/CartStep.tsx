import React from 'react';
import { Typography } from "@mui/material";
import styled from "styled-components";
import { CardCart } from "../../components/CartCard/CartCard";
import { useShoppingCart } from '../../context/ShoppingCartContext';

export const CartStep = () => {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

  return (
    <Wrapper>
      <ContentPage>
        <Title>
          <Typography variant="h6" sx={{ color: "white" }}>
            Your Cart
          </Typography>
        </Title>
        <ContentBox>
          <CardCart />
        </ContentBox>
      </ContentPage>
    </Wrapper>
  );
}


const Wrapper = styled.div`

`;

const ContentPage = styled.div`

`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid white;
  width: 100%;
  margin: 20px 5px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid white;
  width: 100%;
  padding:5px;
`;
