import { Collapse, Slide, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BgMain from "../../assets/img/restaurant.webp";
import { getCategories } from "../../queries/queries";

export const MainPage = () => {
  const [enterAnimation, setEnterAnimation] = useState(false);

  const containerRef = useRef(null);
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: ["MenuCategoriesData"],
    queryFn: () => getCategories(),
  });

  const onHoverPrefetch = () => {
    queryClient.prefetchQuery({
      queryKey: ["MenuCategoriesData"],
      queryFn: () => getCategories(),
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setEnterAnimation(true);
    }, 500);
  }, []);

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
          <LinkBoxLeft ref={containerRef}>
            <Slide
              direction="left"
              in={enterAnimation}
              container={containerRef.current}
              {...(enterAnimation ? { timeout: 500 } : {})}
            >
              <Link
                to={"/category"}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
            </Slide>
          </LinkBoxLeft>
          <LinkBoxRight>
            <Slide
              direction="right"
              in={enterAnimation}
              container={containerRef.current}
              {...(enterAnimation ? { timeout: 500 } : {})}
            >
              <Link
                to={"/category"}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
            </Slide>
          </LinkBoxRight>
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
  background: url(${BgMain}) no-repeat;
  background-position: center;
  background-size: cover;
`;

const NavBox = styled.span`
  width: 100%;
  height: 50%;
  display: flex;
  padding: 15px;
  border-radius: 2px;
  border: 1px solid white;
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
    padding: 10px;
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

const LinkBoxLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  transform: perspective(200px) rotateY(0deg);
  overflow: hidden;
  padding:15px;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: perspective(200px) rotateY(3deg);
  }
`;

const LinkBoxRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  transform: perspective(200px) rotateY(360deg);
  overflow: hidden;
  padding:15px;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: perspective(200px) rotateY(357deg);
  }
`;
