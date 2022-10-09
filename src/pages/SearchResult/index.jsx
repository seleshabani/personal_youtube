import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoCard } from "../../components/VideoCard";
import { SearchResultContainer, SearchResultContainerWrapper } from "./styled";
export const SearchResult = ()=>{
    const {query} = useParams();
    const user = JSON.parse(localStorage.getItem('user'))
    const [results,setResults] = useState([])
    
    useEffect(()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA`,{
            method:'GET',
            headers:new Headers({'Authorization':'Bearer '+user.googleId})
        })
        .then(response=>response.json())
        .then(data=>setResults(data.items))
    },[])

    const ResultsMap = ()=>{
        if (results.length ===0) return <>Aucune données</>
        return results.map((video,index)=><VideoCard id={video.id.videoId} key={index} title={video.snippet.title} 
            thumbnail={video.snippet.thumbnails.medium.url} channelThumb="#"
            channel={video.snippet.channelTitle}/>)
    }

    return (
        <SearchResultContainer>
            <h1>Résultat pour : {query}</h1>
            <SearchResultContainerWrapper>
                <ResultsMap/>
            </SearchResultContainerWrapper>
        </SearchResultContainer>
    )
}