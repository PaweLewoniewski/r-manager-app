import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { useShoppingCart } from '../../context/ShoppingCartContext';

export const SummaryShopping = () => {
    const [ finishShop, setFinishShop] = useState<boolean>(false);
    const { finishShopping } = useShoppingCart();

    useEffect(() => {
        setFinishShop(true);
        finishShopping();
    }, [finishShop])

    return (
        <Wrapper>
            <ContentPage>
                <Title>
                    <Typography variant='h6' component={"span"} sx={{ color: "white" }}>
                        Thank You for shopping
                    </Typography>
                </Title>
                <ContentBox>
                    <Typography variant='h6' component={"span"} sx={{ color: "white" }}>
                        Info shopping content
                    </Typography>
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
  flex-wrap:wrap;
  border-bottom: 1px solid white;
  padding: 20px;
`;
