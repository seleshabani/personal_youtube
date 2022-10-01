import React from "react";
import { Container, RightContainer } from "./styled";
import { HorizontalMenu } from "../../components/HorizontalMenu";
import {VerticalMenu} from "../../components/VerticalMenu";

export const Template = ({children})=>{
    return(
        <Container>
            <VerticalMenu/>
            <RightContainer>
                <HorizontalMenu/>
                {children}
            </RightContainer>
        </Container>
    )
}