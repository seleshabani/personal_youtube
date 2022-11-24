import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { CommentsContainer, CommentsForm, CommentsFormContainer, CommentsFormProfil, ContainerWrapper } from "./styled";

export const Single = ()=>{
    const {id} = useParams()
    const [video,setVideo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
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
    }
    return(
       <ContainerWrapper isLoading={isLoading}>
            {isLoading?<Spinner/>:<>
            <iframe src={`https://www.youtube.com/embed/${id}`}></iframe>
            <h1>{video[0].snippet.title}</h1>
            <CommentsContainer>
                <CommentsFormContainer onSubmit={handleForm}>
                    <CommentsFormProfil>
                    {user?<img src={user.profil_picture} alt="profil utilisateur" />:<i className="fa fa-user"></i>}
                    </CommentsFormProfil>
                    <CommentsForm>
                        <div className="input_container">
                            <input type={'text'} name='comment' placeholder="Ajoutez un commentaire"/>
                        </div>
                        <div className="btn_container">
                            <button>Commenter</button>
                        </div>
                    </CommentsForm>
                </CommentsFormContainer>
            </CommentsContainer>
            </>}
        </ContainerWrapper>
    )
}