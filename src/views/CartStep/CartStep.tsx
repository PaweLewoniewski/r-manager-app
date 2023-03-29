import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { CardCart } from "../../components/CartCard/CartCard";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { pageHelper } from "../../queries/queryHelper";

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
        <SummaryPrice>
          <Typography component={"span"} sx={{ color: "white" }} variant="h6">
            Total: 
            {formatCurrency(cartItems.reduce((total, cartItem) => {
              const item = pageHelper(cartItem.storeCategory).find(i => i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0))}
          </Typography>
        </SummaryPrice>
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

const SummaryPrice = styled.div`
  display:flex;
  justify-content:flex-end;
  padding:10px 0px;
`;
