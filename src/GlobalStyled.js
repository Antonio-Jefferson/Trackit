import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        border: none;
    }
    body{
        background-color: #E5E5E5;
        
    }

    a{
        text-decoration: none;
        color: #52B6FF;
    }
`
export default GlobalStyled;