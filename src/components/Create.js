import styled from "styled-components"
import week from "../constants/constants"
export default function Create() {
    return (
        <ConteinerCreate>
            <input type="text" placeholder="nome do hábito" />
            <BoxDaysWeek>
                {week.map((d)=> <p>{d}</p>)}
            </BoxDaysWeek>
            <BoxBtns>
                <button>Cancelar</button>
                <button>Salvar</button>
            </BoxBtns>
        </ConteinerCreate>
    )
}

const ConteinerCreate = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 18px 19px;
    margin: 20px auto;
    input{
        width: 303px;
        height: 45px;
        padding: 12px;
        margin-bottom: 8px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        opacity: 0.5;

        color: #000;
    }
`
const BoxBtns = styled.div`
    display: flex;
    gap: 23px;
    justify-content: right;
    justify-items: center;
    button:nth-child(1){
        color: #52B6FF;
        background-color: transparent;
    }
    button:nth-child(2){
        width: 84px;
        height: 35px;

        background: #52B6FF;
        border-radius: 4.63636px;
        color: #fff;
    }
`
const BoxDaysWeek = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 29px;
    p{
        width: 30px;
        height: 30px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;

        color: #DBDBDB;
    }
`