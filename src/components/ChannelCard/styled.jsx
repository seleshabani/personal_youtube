import styled from "styled-components"

export const CardContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-bottom:10px;
    transition: all 300ms;
    @media only screen and (max-width: 860px){
        width: 45%;
    }
    @media only screen and (max-width: 500px){
        width: 100%;
    }
    & p{
        font-family: 'Poppins';
    }
    &:hover{
        color: ${props=>props.theme.colors.red};
    }
`

export const ImgWrapper = styled.div`
    height: 150px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    & img,& * img{
        width: 100%;
        height: 150px;
    }
    margin-bottom:10px;
`