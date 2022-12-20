
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import week from "../constants/constants"
import axios from 'axios'
import InformationUser from "../contexts/auth";
import { ThreeDots } from 'react-loader-spinner'

export default function Create({ idsWeekDay, setIdsWeekDay, setRender, setListHabits, setRotate, rotate }) {
    const [nameHabit, setNameHabit] = useState()
    const [disable, setDisable] = useState(false)
    const { info } = useContext(InformationUser)
    const [dots, setDots] = useState(false)

    

    function selectedWeekDay(id) {
        if (idsWeekDay.includes(id)) {
            let newArr = idsWeekDay.filter((e) => e !== id);
            setIdsWeekDay(newArr)
        } else {
            const arr = [...idsWeekDay, id]
            setIdsWeekDay(arr)
        }

    }

    function registrationHabit() {
        if (idsWeekDay.length !== 0 && nameHabit !== "") {
            setDisable(true)
            setDots(true)
            const objHabit = {
                name: nameHabit,
                days: idsWeekDay
            }
            console.log(idsWeekDay)
            const config = { headers: { Authorization: `Bearer ${info.token}` } }
            const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
            const promise = axios.post(URL, objHabit, config);
            promise.then((succss) => {
                setDisable(false)
                setDots(false)
                setRender(false)
                setIdsWeekDay([])
                setRotate(!rotate)
            })
            promise.catch((error) => {
                alert('ERROR: ' + error.response.data.message)
            })
        } else {
            alert('Por favor prencha todos os campos')
        }
    }

    function cancel() {
        setRender(false)
    }


    return (
        <ConteinerCreate data-test="habit-create-container">
            <input
                data-test="habit-name-input"
                type="text"
                placeholder="nome do hábito"
                onChange={(e) => setNameHabit(e.target.value)}
                value={nameHabit}
                disabled={disable}
            />
            <BoxDaysWeek>
                {week.map((d, id) => <button data-test="habit-day" disabled={disable} className={idsWeekDay.includes(id) ? 'selected' : 'available'} onClick={() => selectedWeekDay(id)} key={id} >{d}</button>)}
            </BoxDaysWeek>
            <BoxBtns>
                <button disabled={disable} data-test="habit-create-cancel-btn" onClick={cancel}>Cancelar</button>
                <button disabled={disable} data-test="habit-create-save-btn" onClick={registrationHabit}>{dots ? <ThreeDots color="#fff" width="40" height="20" /> : 'Salvar'}</button>
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
    .selected{
        background-color: #CFCFCF;
        color: #fff;
    }
    .available{
        background-color:#fff;
        color: #DBDBDB;
    }
    button{
        width: 30px;
        height: 30px;

       
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
    }
`