import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/Logo.png"
import axios from "axios"
export default function RigistrationPage() {
    const navegation = useNavigate()
    const [registration, setRegistration] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    })
  

    function creteAccount(event, key) {
        setRegistration({ ...registration, [key]: event.target.value })
    }
    
    function rigistrationAccount(e) {
        e.preventDefault()
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(url, registration)
        promise.then(() => 
            navegation('/')
        )
        promise.catch((error)=>{
            console.log(error)
        })
    }

    return (
        <Login>
            <img src={logo} />
            <FormeLogin onSubmit={(e) => rigistrationAccount(e)}>
                <input
                    type="email"
                    placeholder="email"
                    onChange={(event) => creteAccount(event, 'email')}
                    value={registration.email}
                    required
                />

                <input
                    type="password"
                    placeholder="senha"
                    onChange={(event) => creteAccount(event, 'password')}
                    value={registration.password}
                    required
                />
                <input
                    type="text"
                    placeholder="nome"
                    onChange={(event) => creteAccount(event, 'name')}
                    value={registration.name}
                    required
                />
                <input
                    type="url"
                    placeholder="foto"
                    onChange={(event) => creteAccount(event, 'image')}
                    value={registration.image}
                    required
                />
                <button type="submit">Fazer cadastro</button>
            </FormeLogin >
            <Link to={'/'}><p>Já possou uma conta? Faça login!</p></Link>
        </Login>
    )
}

const FormeLogin = styled.form`
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