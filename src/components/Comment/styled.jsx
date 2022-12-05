import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    align-content: center;
    margin-bottom: 20px;
    
`
export const CommentUser = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    overflow: hidden;
    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const CommentContent = styled.div`
    width: calc(100% - 100px);
    display: flex;
    flex-direction: column;
`
export const CommentContentText = styled.div`
    width: 100%;
    & p{
        width: 100%;
        text-align: justify;
        font-family: 'Poppins';
    }
    border-bottom: solid black 1px;
`
export const CommentContentActions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    & .icones{
        display: flex;
        flex-direction: row;
        gap: 10px;
        & svg{
            cursor: pointer;
        }
    }
`