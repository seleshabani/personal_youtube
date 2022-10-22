import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 40%;
    height: 40px;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    overflow: visible;
    align-items: center;
    & form{
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
    }
    @media only screen and (max-width: 430px){     
        width: 80%;
    } 
`
export const InputContainer = styled.div`
    width: 85%;
    height: 30px;
    & input{
        width: 100%;
        height: 100%;
        padding: 5px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
`
export const BtnContainer = styled.div`
    width: 15%;
    & button{
        background-color: ${props=>props.theme.colors.red};
        color: white;
        width: 100%;
        height: 30px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        padding: 5px;
        cursor: pointer;
    }
`
export const ResultContainer = styled.div`
    width: 80%;
    min-height: 200px;
    overflow: scroll;
    padding: 5px;
    margin-top: 2px;
    background-color: ${props=>props.isDark=='light'?props.theme.colors.text_white:props.theme.colors.text_black};
    z-index: 10;
    box-shadow: 0px 1px 1px 2px;
    border-radius: 5px;
    word-wrap: break-word;
    display: ${props=>props.visible?"flex":"none"};
    flex-direction: column;
    overflow-x: hidden;
    & a{
        width: 100%;
        font-family: 'Poppins';
        cursor: pointer;
        transition: 300ms;
    }
    & a:hover{
        background-color: #99878a;
    }
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
    background-color: white;
    }
    &::-webkit-scrollbar-thumb {
    background-color: ${props=>props.theme.colors.red};
    }
`