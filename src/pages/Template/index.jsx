import React from "react";
import { Container, ContentWrapper, RightContainer } from "./styled";
import { HorizontalMenu } from "../../components/HorizontalMenu";
import {VerticalMenu} from "../../components/VerticalMenu";
import { useContext } from "react";
import { UserLoginStatusContext } from "../../context/userLoginStatus";
import { Login } from "../Login";
import { Outlet } from "react-router";

export const Template = ({children})=>{
    const {isLogin} = useContext(UserLoginStatusContext);
    const isLogedStorage = localStorage.getItem('isLogin');
    if ((isLogin===false) && (isLogedStorage !== 'true')) {
        return <Login/>
    }
    return(
            <Container>
                <VerticalMenu/>
                <RightContainer>
                    <HorizontalMenu/>
                    <ContentWrapper>
                    <Outlet/>
                    </ContentWrapper>
                </RightContainer>
            </Container>
    )
}