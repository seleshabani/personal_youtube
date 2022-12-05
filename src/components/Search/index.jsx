import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate,Link} from "react-router-dom";
import { CustomThemeContext } from "../../context/customTheme";
import { useOutside } from "../../hooks/useOutside";
import { BtnContainer, InputContainer, ResultContainer, SearchContainer } from "./styled";

export const Search = ()=>{
    const [isVisible, setIsVisible] = useState(false)
    const {theme} = useContext(CustomThemeContext)
    const inputSearchRef = useRef(null)
    const navigate = useNavigate()
    const [results,setResults] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'));
    const {resultVisible,setResultVisible} = useOutside(inputSearchRef);

    const searchHandler = ()=>{
        let query = inputSearchRef.current.value
        setResultVisible(true);
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA`,{
            method:'GET',
            headers:new Headers({'Authorization':'Bearer '+token.googleId})
        })
        .then(response=>response.json())
        .then(data=>setResults(data.items))
        
    }
    const handlerForm = (e)=>{
        e.preventDefault()
        if (inputSearchRef.current.value.length!=0) {
            setIsVisible(false)
            navigate('/search/'+inputSearchRef.current.value);
        }else{
            console.log('vide')
        }
    }
    const RenderResults = ()=>{
        if(results===undefined) return <h1>Erreur</h1>
        return results.map((result,index)=><Link key={index} onClick={()=>{setIsVisible(false)}} to={`video/${result.id.videoId}`}>{result.snippet.title}</Link>)
    }
    return(
        <SearchContainer>
            <form action="" onSubmit={handlerForm}>
                <InputContainer>
                    <input type="text" ref={inputSearchRef} onChange={searchHandler}/>
                </InputContainer>
                <BtnContainer>
                    <button><i className="fa fa-search"></i></button>
                </BtnContainer>
            </form>
            
            <ResultContainer visible={resultVisible} isDark={theme}>
                <RenderResults/>
            </ResultContainer>
        </SearchContainer>
    )
}