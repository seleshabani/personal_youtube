import React, { useState } from "react";
import { useContext } from "react";
import { CustomThemeContext } from "../../context/customTheme";
import { UserLoginStatusContext } from "../../context/userLoginStatus";
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {  BtnsActionContainer, MenuBar, MenuContainer, MobileMenu, MobileMenuItem, MobileMenuLogOut, MobileMenuThemeTrigger, MobileMenuTrigger, MobileMenuWrapper, ProfileBtnContainer, ThemeBtnContainer } from "./styled";
import { gapi,loadAuth2 } from "gapi-script";
import { Search } from "../Search";

export const HorizontalMenu = ()=>{
    const {switchIsLogin} = useContext(UserLoginStatusContext);
    const {theme,themeSwitcher} = useContext(CustomThemeContext);
    const [mobileIsVisible,setmobileIsVisible] = useState(false);

    const navigateTo = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'));
    const clientId = "86725510865-s9kseu1lfqjg1jgrh4pb6utarkv7qnor.apps.googleusercontent.com"

    const logOut = ()=>{
        const setAuth2 = async ()=>{
            const auth2 = await loadAuth2(gapi,clientId,'https://www.googleapis.com/auth/youtube');
            if(auth2.isSignedIn.get()){
               await auth2.signOut();
            }
        }
        setAuth2().then(()=>{
            switchIsLogin();
            navigateTo('/login');
            window.location.reload();
        })
    }

    return(
        <MenuContainer isVisible={mobileIsVisible} isDark={theme}>
            <MobileMenu isVisible={mobileIsVisible}>
                <MobileMenuWrapper>
                    <MobileMenuItem>
                        <NavLink to='/home'>
                            Accueil
                        </NavLink>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <NavLink to='/channels'>
                            Mes chaînes
                        </NavLink>
                    </MobileMenuItem>
                </MobileMenuWrapper>
            </MobileMenu>
            <MenuBar isDark={theme}>
                <Search/>
                <BtnsActionContainer>
                    
                    <ProfileBtnContainer isDark={theme}>
                        <div className="logout">
                            <span onClick={logOut}>déconnexion</span>
                        </div>
                        <div className="profil_img">
                        {user?<Link to={'/profil'}><img src={user.profil_picture} alt="profil utilisateur" /></Link>:<i className="fa fa-user"></i>}
                        </div>
                    </ProfileBtnContainer>
                    <ThemeBtnContainer onClick={themeSwitcher}>
                        {(theme === 'light')?<i className="fa fa-sun"></i>:<i className="fa fa-moon"></i>}
                    </ThemeBtnContainer>
                </BtnsActionContainer>
                <MobileMenuThemeTrigger onClick={themeSwitcher}>
                {(theme === 'light')?<i className="fa fa-sun"></i>:<i className="fa fa-moon"></i>}
                </MobileMenuThemeTrigger>
                <MobileMenuLogOut onClick={logOut}>
                    <i onClick={logOut} className="fa fa-sign-out"></i>
                </MobileMenuLogOut>
                <MobileMenuTrigger onClick={()=>setmobileIsVisible(!mobileIsVisible)}>
                    <i onClick={()=>setmobileIsVisible(!mobileIsVisible)} className="fa fa-hamburger"></i>
                </MobileMenuTrigger>
                
            </MenuBar>
        </MenuContainer>
    )
}