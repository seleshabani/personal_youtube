import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import {useNavigate,Link} from "react-router-dom";
import { CustomThemeContext } from "../../context/customTheme";
import { BtnContainer, InputContainer, ResultContainer, SearchContainer } from "./styled";

export const Search = ()=>{
    const [isVisible, setIsVisible] = useState(false)
    const {theme} = useContext(CustomThemeContext)
    const inputSearchRef = useRef(null)
    const navigate = useNavigate()
    const [results,setResults] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    const searchHandler = ()=>{
        let query = inputSearchRef.current.value
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA`,{
            method:'GET',
            headers:new Headers({'Authorization':'Bearer '+user.googleId})
        })
        .then(response=>response.json())
        .then(data=>setResults(data.items))
        
    }
    const handlerForm = (e)=>{
        e.preventDefault()
        setIsVisible(false)
        navigate('/search/'+inputSearchRef.current.value);
    }
    const RenderResults = ()=>{
        if(results===undefined) return <h1>Erreur</h1>
       return results.map((result,index)=><Link key={index} onClick={()=>{setIsVisible(false)}} to={`video/${result.id.videoId}`}>{result.snippet.title}</Link>)
    }
    return(
        <SearchContainer>
            <form action="" onSubmit={handlerForm}>
                <InputContainer>
                    <input type="text" ref={inputSearchRef} onChange={searchHandler} onClick={()=>{setIsVisible(!isVisible)}}/>
                </InputContainer>
                <BtnContainer>
                    <button>ok</button>
                </BtnContainer>
            </form>
            <ResultContainer visible={isVisible} isDark={theme}>
                <RenderResults/>
            </ResultContainer>
        </SearchContainer>
    )
}