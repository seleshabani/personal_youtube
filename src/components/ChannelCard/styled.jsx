import styled from "styled-components"

export const CardContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
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
`