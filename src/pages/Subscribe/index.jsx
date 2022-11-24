import React from "react"
import { ConnectWithContainer, SubscribeContainer, SubscribeZoneContainer, Title } from "./styled"
import subscribe_pic from '../../img/subscribe_pic.png';
import { json, Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "../Login/styled";
import { useEffect } from "react";
import { gapi, loadAuth2 } from 'gapi-script';
import { useContext } from "react";
import { UserLoginStatusContext } from "../../context/userLoginStatus";
import { useState } from "react";

export const Subscribe = () =>{
    const {switchIsLogin} = useContext(UserLoginStatusContext);
    const navigateTo = useNavigate();
    const clientId = "86725510865-s9kseu1lfqjg1jgrh4pb6utarkv7qnor.apps.googleusercontent.com"
    const [userExist,setUserExist] = useState(false)
   
   
    useEffect(()=>{
        const SetAuth = async ()=>{
            const auth2 = await loadAuth2(gapi,clientId,'https://www.googleapis.com/auth/youtube');
            attachSignIn(document.getElementById('gapi_btn'),auth2) 
        }
        SetAuth();
    })
    const attachSignIn = async (element,auth2)=>{
        auth2.attachClickHandler(element,{},async (user)=>{
            let apiResponse = await subscribeRequest(user.wt.cu,user.wt.NT);
            if (apiResponse === false) {
                setUserExist(true)
            }else{
                setUserExist(false)
                localStorage.setItem("user",JSON.stringify({
                    "nom":user.wt.rV,"profil_picture":user.wt.getImageUrl(),
                    "googleId":user.xc.access_token,"jwt":apiResponse
                }))
                switchIsLogin();
                navigateTo('/home');
            }
        },(error)=>console.log(error))
    }

    const subscribeRequest = async (email,googleId) =>{
       const result = await fetch('http://localhost:3500/auth/subscribe',{
        method:'POST',
        body:JSON.stringify({
            "email":email,
            "googleId":googleId
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
       })
       return result.json()
    }
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
                <LinkContainer>
                    {userExist?<p>un utilisateur avec ce mail existe déjà</p>:''}
                </LinkContainer>
            </SubscribeZoneContainer>
        </SubscribeContainer>
    )
}