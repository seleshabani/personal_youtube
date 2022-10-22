import React from "react";
import { Link,NavLink } from "react-router-dom";
import { Container, Logo, MenuEl, MenuWrapper } from "./styled";

export const VerticalMenu = ()=>{
    return(
        <Container>
            <Logo>
                <NavLink to="/home">YouTube App</NavLink>
            </Logo>
            <MenuWrapper>
                <MenuEl>
                    <i className="fa fa-home"></i>
                    <NavLink to='/home'>Accueil</NavLink>
                </MenuEl>
               {/*  <MenuEl>
                    <i className="fa fa-heart"></i>
                    <NavLink to='/favoris'>Favoris</NavLink>
                </MenuEl> */}
                <MenuEl>
                    <i className="fa fa-tv"></i>
                    <NavLink to='/channels'>Mes Chaînes</NavLink>
                </MenuEl>
            </MenuWrapper>
        </Container>
    )
}