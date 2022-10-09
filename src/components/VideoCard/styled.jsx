import styled from "styled-components";

export const CardContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    @media only screen and (max-width: 860px){
        width: 45%;
    }
    @media only screen and (max-width: 500px){
        width: 100%;
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
    margin-top: 5px;
    width: calc(100% - 70px);
    font-family: 'Poppins';
    & h2{
        font-size: 0.8vw;
        margin-bottom: 5px;
        
    }
    & h3 {
        font-size: 0.7vw;
        color: ${props=>props.theme.colors.red};
    }
    @media only screen and (max-width: 430px){
        & h2{
            font-size: 14px;
        }
        & h3{
            font-size: 12px;
        }
    }
    @media only screen and (max-width: 780px){
        & h2{
            font-size: 13px;
        }
        & h3{
            font-size: 11px;
        }
    }
`
