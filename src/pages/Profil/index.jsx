import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { BlocContainer, ProfilContainer, ProfilImage, ProfilImageContainer } from "./styled";

export const Profil = ()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const userNameInpRef = useRef(null);
    const [userName,setUserName] = useState(user.nom)
    const storedUser = JSON.parse(localStorage.getItem('user'));

    const handlerUserNameChange = async (e) =>{
        e.preventDefault();
        let input = userNameInpRef.current.value;
        fetch('http://localhost:3500/user/profil/'+storedUser.email,{
            method:'PUT',
            body:JSON.stringify({
                name:input
            }),
            headers:{
                'Authorization':storedUser.jwt,
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>{
            setUserName(data)
        })
    }

    return(
        <ProfilContainer>
            <ProfilImageContainer>
                <ProfilImage>
                <img src={user.profil_picture} alt='user profil'/>
                </ProfilImage>
                <div className="form_container">
                    <h1>{userName}</h1>
                    <form action="">
                        <div>
                            <input  type="file" name="profil_picture" id="profil_picture"/>
                            <label htmlFor="profil_picture">Cliquez pour changer votre profil</label>
                        </div>
                    </form>
                </div>
            </ProfilImageContainer>
            <BlocContainer>
                <div className="bloc_title">
                    <h2>Changer votre nom d’utilisateur</h2>
                    <form action="" onSubmit={handlerUserNameChange}>
                        <div>
                            <input ref={userNameInpRef} type="text" name="" id="" placeholder="nouveau nom d'utilisateur" />
                        </div>
                        <button>Changer</button>
                    </form>
                </div>
            </BlocContainer>
        </ProfilContainer>
    )
}