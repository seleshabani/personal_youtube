import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContainerWrapper } from "./styled";

export const Single = ()=>{
    const {id} = useParams()
    const [video,setVideo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA`)
        .then(response=>response.json())
        .then(data=>{
           setVideo(data.items);
           setIsLoading(false)
        })
        .catch(error=>console.log(error))
    },[])

    if(isLoading) return <h1>En cours de chargement</h1>
    return(
       <ContainerWrapper>
            <iframe width="460" height="230" src={`https://www.youtube.com/embed/${id}`}></iframe>
            <h1>{video[0].snippet.title}</h1>
        </ContainerWrapper>
    )
}