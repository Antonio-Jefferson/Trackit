import styled from "styled-components";
import GlobalStyled from "./GlobalStyled";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage"
import RigistrationPage from "./pages/RigistrationPage"
import HobitPage from "./pages/HobitPage"
import TodayPage from "./pages/TodayPage"
import HistoricPage from "./pages/HistoricPage"


function App() {
  return (
    <Conteiner>
      <GlobalStyled />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/cadastro" element={<RigistrationPage/>}></Route>
        <Route path="/habitos" element={<HobitPage/>}></Route>
        <Route path="/hoje" element={<TodayPage/>}></Route>
        <Route path="/historico" element={<HistoricPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </Conteiner>
  );
}

export default App;

const Conteiner = styled.div`
  text-align: center;
`