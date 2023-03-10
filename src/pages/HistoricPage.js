import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function HistoricPage(){
    return(
        <>
            <Header/>
            <MainHistoric>
                <h3>Histórico</h3>
                <p>Em breve você poderá ver o histórico <br/> dos seus hábitos aqui!</p>
            </MainHistoric>
            <Footer/>
        </>
    )
}
const MainHistoric = styled.div`
    margin-top: 98px;
    padding: 12px;
    h3{
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        margin-bottom: 17px;
        color: #126BA5;
    }
    p{
        font-weight: 400;
        font-size: 17.976px;
        color: #666666;
    }
`