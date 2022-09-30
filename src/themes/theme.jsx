import { createGlobalStyle } from "styled-components";

export const Theme = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding:0px;
        margin:0px;
        background-color: ${props=>props.theme.colors.text_white};
    }
`