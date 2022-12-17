import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/Logo.png"
import { ThreeDots } from 'react-loader-spinner'
import InformationUser from "../contexts/auth"

export default function LoginPage() {
    const navegation = useNavigate()
    const [disable, setDisable] = useState(false)
    const {setInfo} = useContext(InformationUser)
    const [dots, setDots] = useState(false)

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    function dadosUser(e, key) {
        setLogin({ ...login, [key]: e.target.value })
    }
    function LogarUser(e) {
        e.preventDefault()
        setDisable(true)
        setDots(true)
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promise = axios.post(url, login)
        promise.then((success)=>{
            navegation('/hoje')
            setInfo(success.data)
        })
        promise.catch((error)=>{
            setDisable(false)
            setDots(false)
            alert('ERROR: ' + error.response.data.message)
        })
    }

    return (
        <Login>
            <img src={logo} />
            <FormeLogin onSubmit={(e) => LogarUser(e)} >
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e)=> dadosUser(e, 'email')}
                    value={login.email}
                    disabled={disable}
                    required
                />

                <input
                    type="password"
                    placeholder="senha"
                    onChange={(e)=> dadosUser(e, 'password')}
                    value={login.password}
                    disabled={disable}
                    required
                />
                <button disabled={disable} type="submit" > <Loading>{dots? <ThreeDots color="#fff"  height="20"/> : 'Entrar'}</Loading></button>
            </FormeLogin >
            <Link to={'/cadastro'}><p>Não tem uma conta? Cadastre-se!</p></Link>
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
const Loading =styled.div`
    position: absolute;
    left: 115px;
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