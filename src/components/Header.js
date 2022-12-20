import styled from "styled-components"
import logoHeader from "../assets/TrackIt.png"
import { useContext } from "react"
import InformationUser from "../contexts/auth"
import { Link } from "react-router-dom"
export default function Header() {
    const {info} = useContext(InformationUser)
    return (
        <HeaderPage data-test="header" >
            <div>
                <Link to={'/'}><img src={logoHeader} alt="logo" /></Link>
                <Profile>
                    <img src={info.image} alt="avatar"/>
                </Profile>
            </div>
        </HeaderPage>
    )
}

const HeaderPage = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 4;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 10px 18px;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`

const Profile = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    img{
        width: 100%;
    }
`