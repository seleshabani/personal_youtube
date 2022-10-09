import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, MenuEl, MenuWrapper } from "./styled";

export const VerticalMenu = ()=>{
    return(
        <Container>
            <Logo>
                <Link to="/home">YouTube App</Link>
            </Logo>
            <MenuWrapper>
                <MenuEl>
                    <i className="fa fa-home"></i>
                    <Link to='/home'>Accueil</Link>
                </MenuEl>
               {/*  <MenuEl>
                    <i className="fa fa-heart"></i>
                    <Link to='/favoris'>Favoris</Link>
                </MenuEl> */}
                <MenuEl>
                    <i className="fa fa-tv"></i>
                    <Link to='/channels'>Mes Chaînes</Link>
                </MenuEl>
            </MenuWrapper>
        </Container>
    )
}