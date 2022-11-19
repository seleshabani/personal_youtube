import React from "react"
import { ConnectWithContainer, SubscribeContainer, SubscribeZoneContainer, Title } from "./styled"
import subscribe_pic from '../../img/subscribe_pic.png';
import { Link } from "react-router-dom";
import { LinkContainer } from "../Login/styled";
export const Subscribe = () =>{
    return (
        <SubscribeContainer>
            <Title>
                <h1>YouTube app</h1>
                <p>Youtube selon votre imagination.</p>
            </Title>
            <SubscribeZoneContainer>
                <div className="img">
                    <img src={subscribe_pic}  alt=""/>
                </div>
                <ConnectWithContainer>
                    <button id="gapi_btn"> <i className="fa-brands fa-google"></i> Inscrivez vous via google</button>
                </ConnectWithContainer>
                <LinkContainer>
                    <Link to={"/login"}>Vous avez dejà compte?</Link>
                </LinkContainer>
            </SubscribeZoneContainer>
        </SubscribeContainer>
    )
}