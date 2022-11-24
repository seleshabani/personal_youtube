import { Children, useState } from "react";
import { createContext } from "react";

export const CommentContext = createContext();

export const CommmentContextProvider = ({children})=>{
    const [comments,setComments] = useState([]);
    const addComment = (comment)=>{
       comments.push(comment)
       setComments(comments)
    }
    return(
        <CommentContext.Provider value={{comments, addComment}}>
            {children}
        </CommentContext.Provider>
    ) 
}