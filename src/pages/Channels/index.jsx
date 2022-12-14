import React,{useState,useEffect} from "react";
import { ChannelCard } from "../../components/ChannelCard";
import { ContainerWrapper } from "./styled";
import { CirclesWithBar } from 'react-loader-spinner'
import { Spinner } from "../../components/Spinner";

export const Channels = ()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const [channels,setChannels] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error,setError] = useState(false);

    useEffect(()=>{
        fetch(`https://www.googleapis.com/youtube/v3/subscriptions?part=id,snippet,contentDetails&maxResults=15&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA&mine=true`,
        {method:'GET',headers:new Headers({'Authorization':`Bearer ${user.googleId}`})})
        .then((response)=>response.json())
        .then(data=>{{setChannels(data.items);setIsLoading(false);}})
        .catch(()=>setError(true))
    },[]);
    const ChannelsMap = ()=>{
        if(channels === undefined) return <h1>Erreur lors de la récupèration des données au serveur</h1>
         return channels.map(channel=>(<ChannelCard key={channel.id} thumbnail={channel.snippet.thumbnails.medium.url} title={channel.snippet.title} id={channel.snippet.resourceId.channelId}/>))
     }
    if(error) return <>Erreur lors du chargement</>
    return (
        <ContainerWrapper isLoading={isLoading}>
             {isLoading?<Spinner/>:<ChannelsMap/>}
        </ContainerWrapper>
    )
}