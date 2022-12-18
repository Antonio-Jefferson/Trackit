import styled from "styled-components"
import { AiFillCheckSquare } from "react-icons/ai";
import { useContext, useState } from "react";
import InformationUser from "../contexts/auth";
import axios from "axios";

export default function CardHobit({ informations, setStatus, status }) {
    const [colorConcluido, setColorConcluido] = useState('#EBEBEB')
    const { info } = useContext(InformationUser)
    const concluido = (id) => {
        if (colorConcluido == '#8FC549') {
            setColorConcluido('#EBEBEB')
            habitsUncheck(id)
        } else {
            setColorConcluido('#8FC549')
            habitsConcluidos(id)
        }
    }
    const habitsConcluidos = (idConcluido) => {
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idConcluido}/check`
        const config = {
            headers: { Authorization: `Bearer ${info.token}` }
        }
        const promise = axios.post(url, {}, config)
        promise.then((succss) => {
            console.log(console.log('Sucesso'))
            setStatus(!status)
        })
        promise.catch((error) => console.log(error))
    }
    const habitsUncheck = (idUncheck) => {
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idUncheck}/uncheck`
        const config = {
            headers: { Authorization: `Bearer ${info.token}` }
        }
        const promise = axios.post(url, {}, config)
        promise.then((succss) => {
            console.log(console.log('Sucesso'))
            setStatus(!status)
        })
        promise.catch((error) => console.log("error: " + error))
    }
    return (
        <CardToday onClick={() => concluido(informations.id)}>
            <div>
                <h4>{informations.name}</h4>
                <div>
                    Sequência atual: {informations.currentSequence} <br />
                    Seu recorde: {informations.highestSequence}
                </div>
            </div>
            <AiFillCheckSquare fontSize="69px" color={colorConcluido} />
        </CardToday>
    )
}

const CardToday = styled.div`
    display: flex;
    justify-content: space-between;
    justify-items: center;
    width: 340px;
    height: 94px;
    padding: 13px 15px;
    margin: 0px auto 12px auto;

    background: #FFFFFF;
    border-radius: 5px;
    div{
        font-weight: 400;
        font-size: 12.976px;
        color: #666666;
    }
    h4{
        font-weight: 400;
        font-size: 19.976px;
        margin-bottom: 7px;
        color: #666666;
    }
`