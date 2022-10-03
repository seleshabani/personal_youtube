import React from "react";
import { CardContainer, ChannelImgWrapper, ImgWrapper, TextWrapper, VideoInfoWrapper } from "./styled";

export const VideoCard = ({thumbnail,channelThumb,title,channel})=>{
    return(
        <CardContainer>
            <ImgWrapper>
                <img src={thumbnail} alt="" />
            </ImgWrapper>
            <TextWrapper>
                <ChannelImgWrapper>
                    <img src={channelThumb} alt="" />
                </ChannelImgWrapper>
                <VideoInfoWrapper>
                    <h2>{title}</h2>
                    <h3>{channel}</h3>
                </VideoInfoWrapper>
            </TextWrapper>
        </CardContainer>
    )
}