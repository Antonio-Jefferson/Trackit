import styled from "styled-components"

export default function Footer(){
    return(
        <BoxFooter>
            <p>Hábitos</p>
            <div>Hoje</div>
            <p>Histórico</p>
        </BoxFooter>
    )
}

const BoxFooter = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;

    display: flex;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 70px;
   
    background: #FFFFFF;
    color: #52B6FF;
    font-weight: 400;
    font-size: 17.976px;

    div{
        position: absolute;
        width: 91px;
        height: 91px;
        border-radius: 50%;
        background: #52B6FF;
        color: #FFf;
        bottom: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


`