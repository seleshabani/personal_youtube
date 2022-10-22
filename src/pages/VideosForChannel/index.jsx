import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { VideoCard } from "../../components/VideoCard";
import { VideoContainer } from "./styled";

export const VideosForChannel = ()=>{
    const {channelId} = useParams()
    const [videos,setVideos] = useState([])
    const [isload,setIsLoad] = useState(true)
    const user = JSON.parse(localStorage.getItem('user'))
    const [error,setError] = useState(false);

    useEffect(()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=15&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA`)
        .then(response=>response.json())
        .then(data=>{setVideos(data.items);setIsLoad(false)})
        .catch(()=>setError(true))
    },[])
    const VideosMap = ()=>{
        if (videos === undefined) setError(true) 
        if (videos.length ===0) return <>Aucune données</>
        return videos.map((video,index)=><VideoCard id={video.id.videoId} key={index} title={video.snippet.title} 
            thumbnail={video.snippet.thumbnails.medium.url} channelThumb="#"
            channel={video.snippet.channelTitle}/>)
    }
    if (error) return <h1>Erreur lors de la récupèration de vos données</h1>
    return(
        <VideoContainer isLoading={isload}>
            {isload?<Spinner/>:<VideosMap/>}
        </VideoContainer>
    )
}