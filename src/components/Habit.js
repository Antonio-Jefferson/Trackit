import axios from "axios";
import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import week from "../constants/constants"
import InformationUser from "../contexts/auth";

export default function Hobit({elements, setRotate, rotate}) {
    const {info} = useContext(InformationUser)

   function isDelete(isID){
    if(window.confirm("Deseja apagar esse hábito?")){
        const config = {
            headers: { Authorization: `Bearer ${info.token}` }
        }
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${isID}`
        const promise = axios.delete(url, config)
        promise.then((succss)=> setRotate(!rotate))
        promise.catch((error)=> console.log(error))
       }
    }
   
    return (
        <CardHabit data-test="habit-container">
            <div>
                <h3 data-test="habit-name" >{elements.name}</h3>
                <BoxDaysWeek>
                    {week.map((d, id) => <button data-test="habit-day" className={elements.days.includes(id)? 'selected': 'available'}>{d}</button>)}
                </BoxDaysWeek>
            </div>
            <AiOutlineDelete data-test="habit-delete-btn" onClick={()=>isDelete(elements.id)} fontSize="24px" />
        </CardHabit>
    )
}
const BoxDaysWeek = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 29px;
    button{
        width: 30px;
        height: 30px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px; 
    }
    .selected{
        background-color: #CFCFCF;
        color: #fff;
    }
    .available{
        background-color:#fff;
        color: #DBDBDB;
    }
`

const CardHabit = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
    height: 91px;
    margin: 12px auto;
    padding: 13px 15px;

    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    h3{
        text-align: left;
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 19.976px;

        color: #666666;
    }

`