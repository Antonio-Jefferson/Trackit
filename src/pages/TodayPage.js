
import styled from "styled-components"
import CardHobit from "../components/CardHobit"
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function TodayPage() {
    return (
        <>
            <Header />
            <MainToday>
                <div>
                    <h3>Segunda, 17/05</h3>
                    <p>Nenhum hábito concluído ainda</p>
                </div>
                <div>
                    <CardHobit/>
                    <CardHobit/>
                    <CardHobit/>
                </div>
            </MainToday>
            <Footer/>
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

