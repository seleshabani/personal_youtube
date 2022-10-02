import React from "react";
import { useContext } from "react";
import { UserLoginStatusContext } from "../../context/userLoginStatus";
import { BtnContainer, BtnsActionContainer, InputContainer, MenuBar, ProfileBtnContainer, SearchContainer, ThemeBtnContainer } from "./styled";

export const HorizontalMenu = ()=>{
    const {switchIsLogin} = useContext(UserLoginStatusContext);

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
                <ThemeBtnContainer>
                    <i className="fa fa-sun"></i>
                </ThemeBtnContainer>
                <ProfileBtnContainer>
                    <div className="trigger"></div>
                    <div className="dropdowns">
                        <span onClick={switchIsLogin}>deconnexion</span>
                        <span>pref</span>
                    </div>
                </ProfileBtnContainer>
            </BtnsActionContainer>
        </MenuBar>
    )
}