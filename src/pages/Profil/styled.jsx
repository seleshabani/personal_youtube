import styled from "styled-components";

export const ProfilContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    & .form_container{
        & h1{
            font-family: 'Poppins';
            font-weight: 400;
        }
        form{
            div{
                input{
                    display: none;
                }
                label{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 5px;
                    height: 30px;
                    background-color: #EE4343;
                    border-radius: 10px;
                    color: white;
                }
            }
        }
    }
`
export const ProfilImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    gap: 20px;
`
export const ProfilImage = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const BlocContainer = styled.div`
    margin-top:20px;
    width: 100%;
    border-radius: 10px;
    border: solid black 1px;
    padding: 5px;
    & .bloc_title{
        h2{
            font-family: 'Poppins';
            font-weight: 400;
        }
        button{
            margin-top: 10px;
        }
    }
`