import { createGlobalStyle } from "styled-components";

export const Theme = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding:0px;
        margin:0px;
    }
    body{
        background-color: ${props=>props.theme.colors.text_white};
    }
    * img{
        width: 100%;
        height: auto;
        aspect-ratio: 4/16;
    }
    input,textarea,button{
        outline: none;
        border: none;
        border: solid 1px ${props=>props.theme.colors.grey};
    }
    label{
        font-family: 'Poppins';
    }
`