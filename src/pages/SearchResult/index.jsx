import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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

    return (
        <>
            <h1>Résultat</h1>
        </>
    )
}