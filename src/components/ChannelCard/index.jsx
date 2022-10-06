import React from "react";
import { CardContainer,ImgWrapper } from "./styled";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export const ChannelCard = ({id,thumbnail,title})=>{
    useEffect(()=>{
        console.log(thumbnail)
    },[])
    return(
        <CardContainer>
            <ImgWrapper>
                <Link to={`/channels/${id}`}>
                    <img src={thumbnail} alt="" />
                </Link>
            </ImgWrapper>
            <p>{title}</p>
        </CardContainer>
    )
}