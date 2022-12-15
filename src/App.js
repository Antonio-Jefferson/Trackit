import styled from "styled-components";
import GlobalStyled from "./GlobalStyled";



function App() {
  return (
    <Conteiner>
      <GlobalStyled />
    </Conteiner>
  );
}

export default App;

const Conteiner = styled.div`
  height: 100%;
  text-align: center;
`