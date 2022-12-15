import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo  from "../assets/Logo.png"
export default function LoginPage(){
    const navegation = useState()
    const [login, setLogin] = useState({
        email:'',
        password: ''
    })
    
    return(
        <Login>
            <img src={logo}/>
            <FormeLogin >
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="senha"/>
                <button type="submit">Entrar</button>
            </FormeLogin >
           <Link to={'/cadastro'}><p>Não tem uma conta? Cadastre-se!</p></Link> 
        </Login>
    )
}


const FormeLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    input{
        width: 303px;
        height: 45px;
        padding: 11px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-weight: 400;
        font-size: 19px;
        
    }
    button{
        width: 303px;
        height: 45px;

        font-weight: 400;
        font-size: 20px;
        color: #fff;
        background: #52B6FF;
        border-radius: 5px;
    }
`
const Login = styled.div`
    img{
        margin: 68px 0px 32px 0px;
    }  
    p{
        margin-top:25px ;
        font-weight: 400;
        font-size: 14px;
        text-decoration-line: underline;
        color: #52B6FF;
    }

`