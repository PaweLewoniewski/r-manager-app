import React from 'react';
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { InputTextField } from "../../assets/InputextField/InputextField";

export const DataStep = () => {
  return (
    <Wrapper>
      <ContentPage>
        <Title>
          <Typography component={"span"} sx={{ color: "white" }}>
            Your data information
          </Typography>
        </Title>
        <ContentBox>
            <InputTextField label={"First Name"} />
            <InputTextField label={"Last Name"} />
            <InputTextField label={"Phone"} />
            <InputTextField label={"Adress"} />
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
