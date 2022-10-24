import styled from "styled-components";

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({isLoading})=>isLoading?'center':'space-between'};
     & iframe{
        margin-top: 30px;
        width: 100%;
        height: 400px;
        border: none;
        outline: none;
        border-radius: 5px;
    }
    & h1{
        font-family: 'Poppins';
    }
`