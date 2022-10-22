import React from "react";
import { useContext } from "react";
import { CustomThemeContext } from "../../context/customTheme";
import { UserLoginStatusContext } from "../../context/userLoginStatus";
import {Link, useNavigate} from 'react-router-dom'
import {  BtnsActionContainer, MenuBar, MenuContainer, MobileMenu, MobileMenuItem, MobileMenuWrapper, ProfileBtnContainer, ThemeBtnContainer } from "./styled";
import { gapi,loadAuth2 } from "gapi-script";
import { Search } from "../Search";

export const HorizontalMenu = ()=>{
    const {switchIsLogin} = useContext(UserLoginStatusContext);
    const {theme,themeSwitcher} = useContext(CustomThemeContext);
    const navigateTo = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'));
    const clientId = "86725510865-s9kseu1lfqjg1jgrh4pb6utarkv7qnor.apps.googleusercontent.com"

    const logOut = ()=>{
        const setAuth2 = async ()=>{
            const auth2 = await loadAuth2(gapi,clientId,'https://www.googleapis.com/auth/youtube');
            if(auth2.isSignedIn.get()){
                auth2.signOut();
            }
        }
        setAuth2().then(()=>{
            switchIsLogin();
            navigateTo('/');
        })
    }

    return(
        <MenuContainer isDark={theme}>
            <MobileMenu>
                <MobileMenuWrapper>
                    <MobileMenuItem>
                        <Link to='/home'>
                            <i className="fa fa-home"></i>
                        </Link>
                    </MobileMenuItem>
                    {/* <MobileMenuItem>
                        <Link to='/favoris'>
                            <i className="fa fa-heart"></i>
                        </Link>
                    </MobileMenuItem> */}
                    <MobileMenuItem>
                        <Link to='/channels'>
                            <i className="fa fa-tv"></i>
                        </Link>
                    </MobileMenuItem>
                </MobileMenuWrapper>
            </MobileMenu>
            <MenuBar isDark={theme}>
                <Search/>
                <BtnsActionContainer>
                    <ThemeBtnContainer onClick={themeSwitcher}>
                        {(theme === 'light')?<i className="fa fa-sun"></i>:<i className="fa fa-moon"></i>}
                    </ThemeBtnContainer>
                    <ProfileBtnContainer isDark={theme}>
                        <div className="logout">
                            <span onClick={logOut}>déconnexion</span>
                        </div>
                        <div className="profil_img">
                        {user?<img src={user.profil_picture} alt="profil utilisateur" />:<i className="fa fa-user"></i>}
                        </div>
                    </ProfileBtnContainer>
                </BtnsActionContainer>
            </MenuBar>
        </MenuContainer>
    )
}