import React from "react";
import { useContext } from "react";
import { CustomThemeContext } from "../../context/customTheme";
import { UserLoginStatusContext } from "../../context/userLoginStatus";
import { BtnContainer, BtnsActionContainer, InputContainer, MenuBar, ProfileBtnContainer, SearchContainer, ThemeBtnContainer } from "./styled";
import { gapi,loadAuth2 } from "gapi-script";
export const HorizontalMenu = ()=>{
    const {switchIsLogin} = useContext(UserLoginStatusContext);
    const {theme,themeSwitcher} = useContext(CustomThemeContext);
    const user = JSON.parse(localStorage.getItem('user'));
    const clientId = "86725510865-s9kseu1lfqjg1jgrh4pb6utarkv7qnor.apps.googleusercontent.com"

    const logOut = ()=>{
        const setAuth2 = async ()=>{
            const auth2 = await loadAuth2(gapi,clientId,'https://www.googleapis.com/auth/youtube');
            if(auth2.isSignedIn.get()){
                auth2.signOut();
            }
        }
        setAuth2();
        switchIsLogin();
    }

    return(
        <MenuBar>
            <SearchContainer>
                <form action="">
                    <InputContainer>
                        <input type="text" />
                    </InputContainer>
                    <BtnContainer>
                        <button>ok</button>
                    </BtnContainer>
                </form>
            </SearchContainer>
            <BtnsActionContainer>
                <ThemeBtnContainer onClick={themeSwitcher}>
                    {(theme === 'light')?<i className="fa fa-sun"></i>:<i className="fa fa-moon"></i>}
                </ThemeBtnContainer>
                <ProfileBtnContainer isDark={theme}>
                    <div className="trigger">
                    {user?<img src={user.profil_picture} alt="profil utilisateur" />:<i className="fa fa-user"></i>}
                    </div>
                    <div className="dropdowns">
                        <span onClick={logOut}>deconnexion</span>
                        <span>pref</span>
                    </div>
                </ProfileBtnContainer>
            </BtnsActionContainer>
        </MenuBar>
    )
}