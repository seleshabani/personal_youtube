import React, { useEffect } from "react"
import { ButtonContainer, ConnectWithContainer, Container, FormContainer, FormWithInput, ImageContainer, InputContainer, LeftContainer, LeftContainerWrapper, LeftTitleContainer, LinkContainer, RightContainer, RightContainerWrapper} from "./styled"
import login from '../../img/login.png'
import { useContext } from "react"
import { UserLoginStatusContext } from "../../context/userLoginStatus"
import { gapi, loadAuth2 } from 'gapi-script';
import {useNavigate} from 'react-router-dom'


/* import GoogleLogin from "react-google-login" */
export const Login = ()=>{
    const clientId = "86725510865-s9kseu1lfqjg1jgrh4pb6utarkv7qnor.apps.googleusercontent.com"
    const {switchIsLogin} = useContext(UserLoginStatusContext);
    const navigateTo = useNavigate();

    useEffect(()=>{
        const setAuth2 = async ()=>{
            const auth2 = await loadAuth2(gapi,clientId,'https://www.googleapis.com/auth/youtube');
            if(auth2.isSignedIn.get()){
                 let user = auth2.currentUser.le
                localStorage.setItem("user",JSON.stringify({"nom":user.wt.rV,"profil_picture":user.wt.getImageUrl(),"googleId":user.xc.access_token}))
                switchIsLogin();
                navigateTo('/home');
               // console.log("déjà connecté")
               attacheSignIn(document.getElementById('gapi_btn'),auth2)
            }else{
                attacheSignIn(document.getElementById('gapi_btn'),auth2) 
            }
        }
        setAuth2();
    })
    const attacheSignIn = (element,auth2) =>{
        auth2.attachClickHandler(element,{},(user)=>{
            console.log(user)
            //redirection
            localStorage.setItem("user",JSON.stringify({"nom":user.wt.rV,"profil_picture":user.wt.getImageUrl(),"googleId":user.xc.access_token}))
            switchIsLogin();
            navigateTo('/home');
        },(error)=>console.log(error))
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        //switchIsLogin();
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
                            <LinkContainer>
                                <a href="https://youtube.com" target='_blank'>Vous n'avez pas de compte Youtube?</a>
                            </LinkContainer>
                            <ButtonContainer>
                                <button>Connexion</button>
                            </ButtonContainer>
                        </FormWithInput> */}
                        <ConnectWithContainer>
                            <button id="gapi_btn"> <i className="fa-brands fa-google"></i> Login with google</button>
                        </ConnectWithContainer>
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