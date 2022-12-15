import { AiFillPlusSquare} from "react-icons/ai";
import styled from "styled-components";
export default function CreateHobit(){
    return(
        <CreateHobitPage>
            <h2>Meus hábitos</h2>

            <AiFillPlusSquare fontSize="35px" color="#52B6FF"/>
        </CreateHobitPage>

    )
}

const CreateHobitPage = styled.div`
    margin-top: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h2{
        font-weight: 400;
        font-size: 22px;

        color: #126BA5;
    }
`