import styled from "styled-components";

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({isLoading})=>isLoading?'center':'space-between'};
     & iframe{
        margin-top: 30px;
        width: 100%;
        height: 400px;
        border: none;
        outline: none;
        border-radius: 5px;
    }
    & h1{
        font-family: 'Poppins';
    }
`
export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
`
export const CommentsFormContainer = styled.div`
    width:60% ;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`
export const CommentsFormProfil = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    overflow: hidden;
    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const CommentsForm = styled.form`
    width: calc(100% - 100px);
    & .input_container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        & input{
            border: none;
            border-bottom:solid 1px black;
            width: 100%;
        }
    }
    & .btn_container{
        width: 100%;
        display: flex;
        justify-content: end;
        & button{
            cursor: pointer;
        }
    }
`
export const CommentsList = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`