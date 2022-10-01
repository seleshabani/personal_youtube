import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo } from "./styled";

export const VerticalMenu = ()=>{
    return(
        <Container>
            <Logo>
                <Link to="/home">YouTube App</Link>
            </Logo>
        </Container>
    )
}