import styled from "styled-components";
import CreateHobit from "./CreateHobit";
import Create from "./Create";
import Hobit from "./Hobit";

export default function MainHobits() {
    return (
        <>
            <CreateHobit />
            <Create/>
            <Hobit/>
            <Paragrafo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Paragrafo>
        </>
    )
}

const Paragrafo = styled.p`
    font-weight: 400;
    font-size: 17.976px;
    margin-top: 28px;
    text-align: justify;
    padding: 17px;

    color: #666666;
`


