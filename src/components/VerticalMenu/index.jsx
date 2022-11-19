import React from "react";
import { Link,NavLink } from "react-router-dom";
import { Container, HomeIcon, Logo, MenuEl, MenuWrapper } from "./styled";
import { Icon } from '@iconify/react';

export const VerticalMenu = ()=>{
    return(
        <Container>
            <Logo>
                <NavLink to="/home">YouTube App</NavLink>
            </Logo>
            <MenuWrapper>
                <MenuEl>
                   {/*  <HomeIcon icon="ant-design:home-outlined"/> */}
                   <i className="fa fa-home"></i>
                    <NavLink to='/home'>Accueil</NavLink>
                </MenuEl>
               {/*  <MenuEl>
                    <i className="fa fa-heart"></i>
                    <NavLink to='/favoris'>Favoris</NavLink>
                </MenuEl> */}
                <MenuEl>
                    <i className="fa-solid fa-clapperboard"></i>
                    <NavLink to='/channels'>Mes Chaînes</NavLink>
                </MenuEl>
            </MenuWrapper>
        </Container>
    )
}