import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { VideoCard } from "../../components/VideoCard";
import { ContainerWrapper } from "./styled";

export const Home = ()=>{
    const [isLoading, setIsLoading] = useState(true)
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&maxResults=15&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA&access_token='+user.googleId)
        .then(response=>response.json())
        .then(data=>{setVideos(data.items);setIsLoading(false)})
        .catch(()=>setError(true))
    },[])

    const VideosMap = ()=>{
       if(videos === undefined) return <h1>Erreur lors de la récupèration des données au serveur</h1>
        return videos.map(video=>(<VideoCard key={video.id} thumbnail={video.snippet.thumbnails.medium.url} title={video.snippet.title} channel={video.snippet.channelTitle} id={video.id}/>))
    }
    if (error) return <h1>Erreur dans la requête serveur</h1>
    
    return(
        <ContainerWrapper>
             {isLoading?<h1>Chargement en cours...</h1>:<VideosMap/>}
        </ContainerWrapper>
    )
    

    
}