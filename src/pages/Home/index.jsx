import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { VideoCard } from "../../components/VideoCard";
import { UserLoginStatusContext } from "../../context/userLoginStatus";
import { ContainerWrapper } from "./styled";
import { Spinner } from "../../components/Spinner";

export const Home = ()=>{
    const [isLoading, setIsLoading] = useState(true)
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))
    const navigateTo = useNavigate()

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
        <ContainerWrapper isLoading={isLoading}>
             {isLoading?<Spinner/>:<VideosMap/>}
        </ContainerWrapper>
    )
    

    
}