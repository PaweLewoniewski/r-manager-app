import { Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BgMain from "../../assets/img/restaurant.webp";
import { getCategories } from "../../queries/queries";

export const MainPage = () => {

const queryClient = useQueryClient();
  const onHoverPrefetch = () => {
    queryClient.prefetchQuery({
      queryKey:['MenuCategoriesData'],
      queryFn: () => getCategories(),
    })
  }

  return (
    <Wrapper>
      <ContentPage>
        <Link
          to={"/category"}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding:'10px'
          }}
          onMouseEnter={onHoverPrefetch}
        >
          <NavBox>
            <Typography
              fontSize={"3.5rem"}
              sx={{ color: "white", transition: "all 0.3s ease-in-out" }}
            >
              Takeaway
            </Typography>
          </NavBox>
        </Link>
        <Separator />
        <Link
          to={"/category"}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding:'10px'
          }}
          onMouseEnter={onHoverPrefetch}
        >
          <NavBox>
            <Typography
              fontSize={"3.5rem"}
              sx={{ color: "white", transition: "all 0.3s ease-in-out" }}
            >
              At location
            </Typography>
          </NavBox>
        </Link>
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
  background: url(${BgMain}) no-repeat;
  background-position: center;
  background-size: cover;
`;

const NavBox = styled.span`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(255, 255, 255, 0.2);
  }
  &:hover p {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
  @media (max-width: 900px) {
    padding:10px;
  }
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
  @media (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 100%;
  background: white;
  z-index: 10;
  @media (max-width: 900px) {
    display: none;
  }
`;
