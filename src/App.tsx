import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
// import reactLogo from './assets/react.svg'
import "./App.css";
import MainMenuNav from "./components/MainMenuNav/MainMenuNav";
import About from "./views/About/About";
import { Checkout } from "./views/Checkout/Checkout";
import { CategoryMenu } from "./views/CategoryMenu/CategoryMenu";
import { FoodMenu } from "./views/FoodMenu/FoodMenu";
import { Kitchen } from "./views/Kitchen/Kitchen";
import { MainPage } from "./views/MainPage/MainPage";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Router>
          <Wrapper>
            <MainMenuNav />
            <Content>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/category" element={<CategoryMenu />} />
                <Route path="/food" element={<FoodMenu />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/kitchen" element={<Kitchen />} />
                <Route path="/cart" element={<Checkout />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/pagenotfound" element={<PageNotFound />} />
              </Routes>
            </Content>
          </Wrapper>
        </Router>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 100%;
  /* max-width:1488px; */
  /* padding:24px; */
  /* min-height:100vh; */
  min-height: calc(100vh - 70px); ;
`;
