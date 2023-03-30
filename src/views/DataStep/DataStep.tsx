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
