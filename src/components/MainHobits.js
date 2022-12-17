import styled from "styled-components";
import CreateHobit from "./CreateHobit";
import Create from "./Create";
import { useState } from "react";
import Hobit from "./Hobit";

export default function MainHobits() {
    const [render, setRender] = useState(false)
    const [idsWeekDay, setIdsWeekDay] = useState([])
    const [listHabits, setListHabits] = useState([])
    const [rotate, setRotate] = useState(false)
    console.log(listHabits)

    function renderCreteHabit(){
        setRender(true)
    }
    return (
        <>
            <CreateHobit renderCreteHabit={renderCreteHabit} />
            {render? <Create rotate={rotate} setRotate={setRotate} setListHabits={setListHabits} idsWeekDay={idsWeekDay} setIdsWeekDay={setIdsWeekDay} setRender={setRender} /> : ''}
            {listHabits.length !== 0? (listHabits.map((e)=> <Hobit setRotate={setRotate} rotate={rotate} elements={e}/>)): <Paragrafo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Paragrafo> }
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


