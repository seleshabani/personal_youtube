import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoCard } from "../../components/VideoCard";
import { VideoContainer } from "./styled";

export const VideosForChannel = ()=>{
    const {channelId} = useParams()
    const [videos,setVideos] = useState([])
    const [isload,setIsLoad] = useState(true)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA`)
        .then(response=>response.json())
        .then(data=>{setVideos(data.items);setIsLoad(false)})
    },[])

    const VideosMap = ()=>{
        if (videos.length ===0) return <>Aucune données</>
        return videos.map(video=><VideoCard key={video.id.videoID} title={video.snippet.title} 
            thumbnail={video.snippet.thumbnails.medium.url} channelThumb="#"
            channel={video.snippet.channelTitle}/>)
    }

    return(
        <VideoContainer>
            {isload?<h1>Chargement en cours...</h1>:<VideosMap/>}
        </VideoContainer>
    )
}