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
        .then(data=>{
           setVideo(data.items);
           setIsLoading(false)
        })
        .catch(error=>console.log(error))
    },[])

    const handleForm = (e)=>{
        e.preventDefault();
        let inputValue = inputRef.current.value;
        inputRef.current.value=''
        addComment(comments=>[...comments,inputValue])
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
                            comments ? comments.map(comment=><Comment content={comment}/>):'o'
                        }
                </CommentsList>
            </CommentsContainer>
            </>}
        </ContainerWrapper>
    )
}