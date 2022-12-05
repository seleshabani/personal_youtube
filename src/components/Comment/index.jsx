import React from "react";
import { CommentContainer, CommentContent, CommentContentActions, CommentContentText, CommentUser } from "./styled";
import { Icon } from '@iconify/react';
import { useEffect } from "react";

export const Comment = ({user,content,likes,dislikes})=>{
    useEffect(()=>{
        //console.log(user);
    },[])
    return(
        <CommentContainer>
            <CommentUser>
                {user?<img src={user.picture}/>:<i className="fa fa-user"></i>}
            </CommentUser>
            <CommentContent>
                <CommentContentText> 
                    <p>{content}</p>
                </CommentContentText>
                <CommentContentActions>
                    <div className="icones">
                        <div className="icone">
                            <Icon icon="mdi:heart-outline" />
                        </div>
                        <div className="icone">
                            <Icon icon="mdi:heart-broken-outline" />
                        </div>
                    </div>
                    <div className="reponse_tog">
                        <p>Répondre</p>
                    </div>
                </CommentContentActions>
            </CommentContent>
        </CommentContainer>
    )
}