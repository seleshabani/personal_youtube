import React from "react"
import { ButtonContainer, ConnectWithContainer, Container, FormContainer, FormWithInput, ImageContainer, InputContainer, LeftContainer, LeftContainerWrapper, LeftTitleContainer, LinkContainer, RightContainer, RightContainerWrapper} from "./styled"
import login from '../../img/login.png'
import { useContext } from "react"
import { UserLoginStatusContext } from "../../context/userLoginStatus"
export const Login = ()=>{

    const {switchIsLogin} = useContext(UserLoginStatusContext);

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        switchIsLogin();
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
                        <FormWithInput onSubmit={handleFormSubmit}>
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
                        </FormWithInput>
                        <ConnectWithContainer>
                            <button>Connectez vous avec Google</button>
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