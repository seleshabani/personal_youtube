import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
export const LeftContainer = styled.div`
    width: 50%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    @media only screen and (max-width: 500px){      
        width: 100%;
    } 
`
export const LeftContainerWrapper = styled.div`
    height: 500px;
    width: 80%;
    padding-top: 30px;
`
export const LeftTitleContainer = styled.div`
    & h1{
        color: ${props => props.theme.colors.red};
        font-family: 'Poppins';
        font-weight: 800;
        font-size: 4vw;
        margin-bottom: 20px;
    }
    & p{
        font-family: 'Poppins';
    }
    margin-bottom: 30px;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const FormWithInput = styled.form`
    display: flex;
    flex-direction: column;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    & input{
        height: 30px;
        border-radius: 10px;
        padding: 5px;
    }
    & label{
        font-weight: 800;
    }
`
export const LinkContainer = styled.div`
    margin-top: 30px;
    text-align: center;
    & a{
        color: ${props => props.theme.colors.red};
        font-family: 'Poppins';
    }
`
export const ButtonContainer = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 20px;
    & button{
        background-color: ${props => props.theme.colors.red};
        width: 100%;
        height: 100%;
        color: white;
        cursor: pointer;
        border-radius: 10px;
    }
`
export const ConnectWithContainer = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 20px;
    & button{
        background-color: ${props => props.theme.colors.text_white};
        width: 100%;
        height: 100%;
        color: ${props => props.theme.colors.text_black};;
        cursor: pointer;
        border-radius: 10px;
    }
`
/* right */

export const RightContainer = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: ${props => props.theme.colors.red};
    @media only screen and (max-width: 430px){      
        display: none;
    } 
`
export const RightContainerWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    & h1{
        color: ${props=>props.theme.colors.text_white};
        font-family: 'Poppins';
        font-size: 3vw;
        margin-bottom: 20px;
    }
`
export const ImageContainer = styled.div`
    width: 100%;
    height: 300px;
    
    & img{
        height: 100%;
        object-fit: contain;
    }
`
    
