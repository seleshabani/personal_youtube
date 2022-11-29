import React, { useEffect } from "react"
import { ButtonContainer, ConnectWithContainer, Container, FormContainer, FormWithInput, ImageContainer, InputContainer, LeftContainer, LeftContainerWrapper, LeftTitleContainer, LinkContainer, RightContainer, RightContainerWrapper} from "./styled"
import login from '../../img/login.png'
import { useContext } from "react"
import { UserLoginStatusContext } from "../../context/userLoginStatus"
import { gapi, loadAuth2 } from 'gapi-script';
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"
import { useState } from "react"

/* import GoogleLogin from "react-google-login" */
export const Login = ()=>{
    const clientId = "86725510865-s9kseu1lfqjg1jgrh4pb6utarkv7qnor.apps.googleusercontent.com"
    const {switchIsLogin} = useContext(UserLoginStatusContext);
    const navigateTo = useNavigate();
    const [loginError, setLoginError] = useState(false)
    useEffect(()=>{
        const setAuth2 = async ()=>{
            const auth2 = await loadAuth2(gapi,clientId,'https://www.googleapis.com/auth/youtube');
          //  if(auth2.isSignedIn.get()){
          //      let user = auth2.currentUser.le
          //      localStorage.setItem("user",JSON.stringify({"nom":user.wt.rV,"profil_picture":user.wt.getImageUrl(),"googleId":user.xc.access_token}))
          //      switchIsLogin();
          //      navigateTo('/home');
          //     attacheSignIn(document.getElementById('gapi_btn'),auth2)
          //  }else{
                attacheSignIn(document.getElementById('gapi_btn'),auth2) 
          //  }
        }
        setAuth2();
    })
    const attacheSignIn = (element,auth2) =>{
        auth2.attachClickHandler(element,{},async (user)=>{
            let tokenresult = await loginRequest(user.wt.cu,user.wt.NT);
            console.log(tokenresult);
            if (!tokenresult) return setLoginError(true);
            localStorage.setItem("user",JSON.stringify({
                "nom":user.wt.rV,"profil_picture":user.wt.getImageUrl(),
                "googleId":user.xc.access_token,"jwt":tokenresult,"email":user.wt.cu
            }))
            switchIsLogin();
            navigateTo('/home');
        },(error)=>console.log(error))
    }

    const loginRequest = async (email,googleId)=>{
        const result = await fetch('http://localhost:3500/auth/login',{
            method:'POST',
            body:JSON.stringify({
                "email":email,
                "googleId":googleId
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        return result.json();
    }   
    return(
        <Container>
            <LeftContainer>
                <LeftContainerWrapper>
                    <LeftTitleContainer>
                        <h1>YouTube app</h1>
                        <p>
                            Bienvenue, Veillez remplir le formulaire ou choisissez un autre mode de connexion.
                        </p>
                    </LeftTitleContainer>
                    <FormContainer>
                        {/* <FormWithInput onSubmit={handleFormSubmit}>
                            <InputContainer>
                                <label htmlFor="email">Email</label>
                                <input type="email"  name="email"/>
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="email">Mot de passe</label>
                                <input type="password"  name="email"/>
                            </InputContainer>
                            <ButtonContainer>
                                <button>Connexion</button>
                            </ButtonContainer>
                        </FormWithInput> */}
                        <ConnectWithContainer>
                            <button id="gapi_btn"> <i className="fa-brands fa-google"></i> Login with google</button>
                        </ConnectWithContainer>
                        <LinkContainer>
                            <Link to={"/subscribe"}>Vous n'avez pas de compte?</Link>
                        </LinkContainer>
                    </FormContainer>
                </LeftContainerWrapper>
            </LeftContainer>
            <RightContainer>
                <RightContainerWrapper>
                    <h1>Découvez YouTube, comme Jamais auparavant!</h1>
                    <ImageContainer>
                        <img src={login} alt="une image"/>
                    </ImageContainer>
                </RightContainerWrapper>
            </RightContainer>
        </Container>
    )
}