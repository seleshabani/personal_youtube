import styled from "styled-components";

export const CardContainer = styled.div`
    width: 20%;
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
        height: auto;
    }
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`
export const ChannelImgWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    & img{
        width: 100%;
        height: auto;
    }
`
export const VideoInfoWrapper = styled.div`
    width: calc(100% - 70px);
    font-family: 'Poppins';
    & h2{
        font-size: 2vw;
    }
    & h3 {
        font-size: 1.7vw;
    }
`
