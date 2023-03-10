import styled from "styled-components";
import GlobalStyled from "./GlobalStyled";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage"
import RigistrationPage from "./pages/RigistrationPage"
import HabitPage from "./pages/HabitPage"
import TodayPage from "./pages/TodayPage"
import HistoricPage from "./pages/HistoricPage"
import InformationUser from "./contexts/auth";
import { useState } from "react";


function App() {
  const [info, setInfo] = useState({})
  const [porcentagemHabits, setPorcentagemhabits] = useState(0)
  return (
    <Conteiner>
      <InformationUser.Provider value={{setInfo, info, porcentagemHabits, setPorcentagemhabits}}>
        <GlobalStyled />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/cadastro" element={<RigistrationPage />}></Route>
            <Route path="/habitos" element={<HabitPage />}></Route>
            <Route path="/hoje" element={<TodayPage />}></Route>
            <Route path="/historico" element={<HistoricPage />}></Route>
          </Routes>
        </BrowserRouter>
      </InformationUser.Provider>
    </Conteiner>
  );
}

export default App;

const Conteiner = styled.div`
  text-align: center;
`