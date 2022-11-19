import styled from "styled-components";

export const SubscribeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`
export const Title = styled.div`
    margin-top: 30px;
    line-height: 45px;
    margin-bottom: 20px;
    & h1{
        color: #EE4343;
        font-family: 'Poppins';
        font-weight: 800;
        font-size: 4vw;
    }
    & p{
        font-family: 'Poppins';
        margin-left: 20px;
    }
`
export const SubscribeZoneContainer = styled.div`
    width: 50%;
    height: 100%;
    border: solid 1px gray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    & .img{
        width: 50%;
        height: 300px;
        & img{
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
    }
    padding-bottom: 20px;
`
export const ConnectWithContainer = styled.div`
    width: 70%;
    height: 40px;
    margin-top: 20px;
    & button{
        background-color: white;
        width: 100%;
        height: 100%;
        color: black;
        cursor: pointer;
        border-radius: 10px;
    }
`