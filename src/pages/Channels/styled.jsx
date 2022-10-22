import styled from "styled-components"

export const ContainerWrapper = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: ${({isLoading})=>isLoading?'center':'space-between'};
    flex-wrap: wrap;
    word-wrap: break-word;
   padding-top:10px;
`