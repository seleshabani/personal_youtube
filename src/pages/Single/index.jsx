import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../../components/Comment";
import { Spinner } from "../../components/Spinner";
import { CommentsContainer, CommentsForm, CommentsFormContainer, CommentsFormProfil, CommentsList, ContainerWrapper } from "./styled";
import socketClient  from "socket.io-client";

export const Single = ()=>{
    const [comments, addComment] = useState([]);
    const {id} = useParams()
    const [video,setVideo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const inputRef = useRef(null)
    const user = JSON.parse(localStorage.getItem('user'));
    const socket = socketClient('http://localhost:3500');

    useEffect(()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA`)
        .then(response=>response.json())
        .then(async data=> {
          setVideo(data.items);
          setIsLoading(false)
            socket.emit('comment:read',id)
        })
        .catch(error=>console.log(error))
    },[])

    socket.on('comment:get',(data)=>{
        //console.log(data);
        addComment(JSON.parse(data))
    })

    const handleForm = async (e)=>{
        e.preventDefault();
        let inputValue = inputRef.current.value;
        const dataToSend = {
            contenue:inputValue,
            token:user.jwt,
            videoId:id,
            userMail:user.email
        }
        socket.emit('comment:create',JSON.stringify(dataToSend))
        inputRef.current.value = ""
    }
    return(
       <ContainerWrapper isLoading={isLoading}>
            {isLoading?<Spinner/>:<>
            <iframe src={`https://www.youtube.com/embed/${id}`}></iframe>
            <h1>{video[0].snippet.title}</h1>
            <CommentsContainer>
                <CommentsFormContainer>
                    <CommentsFormProfil>
                    {user?<img src={user.picture} alt="profil utilisateur" />:<i className="fa fa-user"></i>}
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
                            comments ? comments.map((comment,index)=><Comment key={index} content={comment.content} user={comment.author}/>):<h1>Aucun Commentaire</h1>
                        }
                </CommentsList>
            </CommentsContainer>
            </>}
        </ContainerWrapper>
    )
}