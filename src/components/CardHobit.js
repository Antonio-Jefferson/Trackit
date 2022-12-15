import styled from "styled-components"
import {AiFillCheckSquare} from "react-icons/ai";

export default function CardHobit() {
    return (
        <CardToday>
            <div>
                <h4>Ler 1 capítulo de livro</h4>
                <div>
                    Sequência atual: 3 dias <br />
                    Seu recorde: 5 dias
                </div>
            </div>
            <AiFillCheckSquare fontSize="69px" color="#8FC549" />
        </CardToday>
    )
}

const CardToday = styled.div`
    display: flex;
    justify-content: space-between;
    justify-items: center;
    width: 340px;
    height: 94px;
    padding: 13px 15px;
    margin: 0px auto 12px auto;

    background: #FFFFFF;
    border-radius: 5px;
    div{
        font-weight: 400;
        font-size: 12.976px;
        color: #666666;
    }
    h4{
        font-weight: 400;
        font-size: 19.976px;
        margin-bottom: 7px;
        color: #666666;
    }
`