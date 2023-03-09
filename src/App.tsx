import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from "styled-components";
// import reactLogo from './assets/react.svg'
import "./App.css";
import MainMenuNav from "./components/MainMenuNav/MainMenuNav";
import { MainPage } from "./views/MainPage/MainPage";
import PageNotFound from "./views/PageNotFound/PageNotFound";

function App() {

  return (
    <div className="App">
      <Router>
        <Wrapper>
          <MainMenuNav />
          <Content>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/pagenotfound" element={<PageNotFound />} />
            </Routes>
          </Content>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;


const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  height:100%;
`;

const Content = styled.div`
  display: flex;
  width:100%;
`;
