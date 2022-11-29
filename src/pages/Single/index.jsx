import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../../components/Comment";
import { Spinner } from "../../components/Spinner";
import { CommentContext } from "../../context/commentContex";
import { CommentsContainer, CommentsForm, CommentsFormContainer, CommentsFormProfil, CommentsList, ContainerWrapper } from "./styled";

export const Single = ()=>{
    const [comments, addComment] = useState([]);
    const {id} = useParams()
    const [video,setVideo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const inputRef = useRef(null)
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA`)
        .then(response=>response.json())
        .then(async data=> {
          setVideo(data.items);
          setIsLoading(false)
          const comments = await getComments()
          addComment(comments)
        })
        .catch(error=>console.log(error))
    },[])
    
    const getComments = async ()=>{
        const comments = await fetch(`http://localhost:3500/user/comment/${id}`,{
            headers:{
            'Authorization':user.jwt,
            'Content-type': 'application/json; charset=UTF-8',
            'Accept':'*/*'
            }
        });
        return comments.json()
    }
   



    const handleForm = async (e)=>{
        e.preventDefault();
        let inputValue = inputRef.current.value;
        let comments = await fetch(`http://localhost:3500/user/comment/`,{
            method:'POST',
            headers:{
                'Authorization':user.jwt,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify({
                contenue:inputValue,
                videoId:id
            })
        })
        addComment(comments=>comments.json())
       // console.log(comments);
    }
    return(
       <ContainerWrapper isLoading={isLoading}>
            {isLoading?<Spinner/>:<>
            <iframe src={`https://www.youtube.com/embed/${id}`}></iframe>
            <h1>{video[0].snippet.title}</h1>
            <CommentsContainer>
                <CommentsFormContainer>
                    <CommentsFormProfil>
                    {user?<img src={user.profil_picture} alt="profil utilisateur" />:<i className="fa fa-user"></i>}
                    </CommentsFormProfil>
                    <CommentsForm>
                        <div className="input_container">
                            <input ref={inputRef} type={'text'} name='comment' placeholder="Ajoutez un commentaire"/>
                        </div>
                        <div className="btn_container">
                            <button onClick={handleForm}>Commenter</button>
                        </div>
                    </CommentsForm>
                </CommentsFormContainer>
                <CommentsList>
                        {
                            comments ? comments.map((comment,index)=><Comment key={index} content={comment.content}/>):'o'
                        }
                </CommentsList>
            </CommentsContainer>
            </>}
        </ContainerWrapper>
    )
}