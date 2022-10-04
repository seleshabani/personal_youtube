import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, ChannelImgWrapper, ImgWrapper, TextWrapper, VideoInfoWrapper } from "./styled";

export const VideoCard = ({thumbnail,channelThumb,title,channel,id})=>{
    return(
        <CardContainer>
            <ImgWrapper>
                <Link to={`/video/${id}`}>
                    <img src={thumbnail} alt="" />
                </Link>
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