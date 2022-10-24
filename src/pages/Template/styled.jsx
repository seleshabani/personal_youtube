import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const RightContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-left: 25%;
    @media only screen and (max-width: 860px){
        width: 80%;
        margin-left: 20%;
    }
    @media only screen and (max-width: 500px){
        width: 100%;
        margin-left: 0px;
    }
`

export const ContentWrapper = styled.div`
    width: 90%;
    height: max-content;
`