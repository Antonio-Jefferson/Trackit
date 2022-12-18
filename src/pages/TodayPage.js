
import styled from "styled-components"
import CardHobit from "../components/CardHobit"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useContext, useEffect, useState } from "react"
import InformationUser from "../contexts/auth"
import axios from "axios"
export default function TodayPage() {
    const [myHabits, setMyHabits] = useState([])
    const [status, setStatus] = useState(false)
    const { info } = useContext(InformationUser)

    useEffect(() => {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const config = { headers: { Authorization: `Bearer ${info.token}` } }
        const promise = axios.get(url, config)
        promise.then((succss) => {
            setMyHabits(succss.data)
        })
        promise.catch((error) => console.log(error))
    }, [status])
  
    return (
        <>
            <Header />
            <MainToday>
                <div>
                    <h3>Segunda, 17/05</h3>
                    <p>Nenhum hábito concluído ainda</p>
                </div>
                <div>
                   {myHabits.map((e)=>  <CardHobit key={e.id} status={status} setStatus={setStatus} informations={e} /> )}
                </div>
            </MainToday>
            <Footer />
        </>
    )
}

const MainToday = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 98px;
    text-align: justify;
    h3{
        padding-left:12px ;
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
    p{
        padding-left:12px ;
        font-weight: 400;
        font-size: 17.976px;
        color: #BABABA;
        margin-bottom: 28px 
    }
  
`

