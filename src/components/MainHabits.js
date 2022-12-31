import styled from "styled-components";
import CreateHobit from "./CreateHabit";
import Create from "./Create";
import { useState, useEffect, useContext } from "react";
import Hobit from "./Habit";
import axios from 'axios'
import InformationUser from "../contexts/auth";

export default function MainHabits() {
    const [render, setRender] = useState(false)
    const [idsWeekDay, setIdsWeekDay] = useState([])
    const [listHabits, setListHabits] = useState([])
    const [rotate, setRotate] = useState(false)
    const {info} = useContext(InformationUser)
    function renderCreteHabit(){
        setRender(true)
       
    }
    
    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = { headers: { Authorization: `Bearer ${info.token}` } }
        const promise = axios.get(url, config);
        promise.then((succss) => {
            console.log(succss.data)
            setListHabits(succss.data)
        })
        promise.catch((error) => console.log('Erro: ' + error))
    }, [rotate])

    return (
        <PageHabit>
            <CreateHobit renderCreteHabit={renderCreteHabit} />
            {render? <Create rotate={rotate} setRotate={setRotate} setListHabits={setListHabits} idsWeekDay={idsWeekDay} setIdsWeekDay={setIdsWeekDay} setRender={setRender} render={render} /> : ''}
            {listHabits.length !== 0? (listHabits.map((e)=> <Hobit setRotate={setRotate} rotate={rotate} elements={e}/>)): <Paragrafo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Paragrafo> }
        </PageHabit>
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
const PageHabit = styled.div` 
    margin-bottom: 100px;


`


