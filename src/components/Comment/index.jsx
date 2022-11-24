import React from "react";
import { CommentContainer, CommentContent, CommentContentActions, CommentContentText, CommentUser } from "./styled";

export const Comment = ({user,content,likes,dislikes})=>{
    return(
        <CommentContainer>
            <CommentUser>
                {user?<img src={user}/>:<i className="fa fa-user"></i>}
            </CommentUser>
            <CommentContent>
                <CommentContentText>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam sint. Suscipit, alias!</p>
                </CommentContentText>
                <CommentContentActions>
                    
                </CommentContentActions>
            </CommentContent>
        </CommentContainer>
    )
}