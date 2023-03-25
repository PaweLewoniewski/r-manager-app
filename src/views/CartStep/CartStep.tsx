import React, { useState } from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { CardCart } from "../../components/CartCard/CartCard";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useQuery } from "@tanstack/react-query";
import { getFoodMenu } from "../../queries/queries";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartStep = () => {
  const { cartItems } = useShoppingCart();

  const [cartItem, setCartItem] = useState<any[]>();

  const { refetch, status, data } = useQuery({
    queryKey: ["MenuFoodData"],
    queryFn: () => getFoodMenu("dinner"),
    // placeholderData: placeholdercardData,
    onSuccess: (data) => {
      setCartItem(data);
    },
  });

  if (status === "loading") return <div>Loading...</div>;

  if (status === "error") return <div>An error has occurred</div>;

  return (
    <Wrapper>
      <ContentPage>
        <Title>
          <Typography component={"span"} sx={{ color: "white" }}>
            Your Cart
          </Typography>
        </Title>
        <ContentBox>
          <CardCart />
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
  width: 100%;
  margin: 20px 5px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid white;
  width: 100%;
  padding: 5px;
`;
