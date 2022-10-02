import React from "react";
import { useContext } from "react";
import { CustomThemeContext } from "../../context/customTheme";
import { UserLoginStatusContext } from "../../context/userLoginStatus";
import { BtnContainer, BtnsActionContainer, InputContainer, MenuBar, ProfileBtnContainer, SearchContainer, ThemeBtnContainer } from "./styled";

export const HorizontalMenu = ()=>{
    const {switchIsLogin} = useContext(UserLoginStatusContext);
    const {theme,themeSwitcher} = useContext(CustomThemeContext);
    const user = JSON.parse(localStorage.getItem('user'));
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
                        <img src={user.profil_picture} alt="profil utilisateur" />
                    </div>
                    <div className="dropdowns">
                        <span onClick={switchIsLogin}>deconnexion</span>
                        <span>pref</span>
                    </div>
                </ProfileBtnContainer>
            </BtnsActionContainer>
        </MenuBar>
    )
}