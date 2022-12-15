import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import week from "../constants/constants"
export default function Hobit() {
    return (
        <CardHobit>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <BoxDaysWeek>
                    {week.map((d) => <p>{d}</p>)}
                </BoxDaysWeek>
            </div>
            <AiOutlineDelete fontSize="24px" />
        </CardHobit>
    )
}
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

const CardHobit = styled.div`
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