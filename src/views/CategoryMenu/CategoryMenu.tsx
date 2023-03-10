import styled from "styled-components";
import BgCategory from "../../assets/img/categorymenu.webp";
import { MenuCard } from "../../components/MenuCard/MenuCard";

export const CategoryMenu = () => {
  return (
    <Wrapper>
      <StripesContener>
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
        <StripeOne />
      </StripesContener>
      <ContentPage>
        <MenuCard />
      </ContentPage>
    </Wrapper>
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
  width: 100%;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1488px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

const StripesContener = styled.ul`
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0%;
  left: -25%;
  transform: translate(0%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  li:nth-child(even) {
    width: 0%;
    transform: translate(40%, 60%) rotate(-45deg) skew(-45deg);
  }
`;

const StripeOne = styled.li`
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  transform: translate(0%, 50%) rotate(-45deg) skew(-45deg);
`;

