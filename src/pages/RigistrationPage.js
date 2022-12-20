import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/Logo.png"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'

export default function RigistrationPage() {
    const navegation = useNavigate()
    const [dots, setDots] = useState(false)
    const [disable, setDisable] = useState(false)
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
        setDisable(true)
        setDots(true)
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(url, registration)
        promise.then(() =>
            navegation('/')
        )
        promise.catch((error) => {
            alert('ERROR: ' + error.response.data.message)
            setDisable(false)
            setDots(false)
        })
    }

    return (
        <Login>
            <img src={logo} />
            <FormeLogin onSubmit={(e) => rigistrationAccount(e)}>
                <input
                    data-test="email-input"
                    type="email"
                    placeholder="email"
                    onChange={(event) => creteAccount(event, 'email')}
                    value={registration.email}
                    disabled={disable}
                    required
                />

                <input
                    data-test="password-input"
                    type="password"
                    placeholder="senha"
                    onChange={(event) => creteAccount(event, 'password')}
                    value={registration.password}
                    disabled={disable}
                    required
                />
                <input
                    data-test="user-name-input"
                    type="text"
                    placeholder="nome"
                    onChange={(event) => creteAccount(event, 'name')}
                    value={registration.name}
                    disabled={disable}
                    required
                />
                <input
                    data-test="user-image-input"
                    type="url"
                    placeholder="foto"
                    onChange={(event) => creteAccount(event, 'image')}
                    value={registration.image}
                    disabled={disable}
                    required
                />
                <button data-test="signup-btn" disabled={disable} type="submit" > <Loading>{dots ? <ThreeDots color="#fff" height="20" /> : 'Cadastrar'}</Loading></button>
            </FormeLogin >
            <Link data-test="login-link" to={'/'}><p>Já tem uma conta? Faça login!</p></Link>
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
        position: relative;
        width: 303px;
        height: 45px;

        font-weight: 400;
        font-size: 20px;
        color: #fff;
        background: #52B6FF;
        border-radius: 5px;
    }
`
const Loading = styled.div`
    position: absolute;
    left: 105px;
    top: 8px;

`
const Login = styled.div`
    background-color: #FFF;
    height: 100vh;
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