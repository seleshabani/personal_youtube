import styled from "styled-components";

export const VideoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: ${({isLoading})=>isLoading?'center':'space-between'};
    padding-top: 10px;
`