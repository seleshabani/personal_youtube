import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { UpdateProfilContext } from "../../context/updateUserProfil";
import { BlocContainer, ProfilContainer, ProfilImage, ProfilImageContainer } from "./styled";

export const Profil = ()=>{

    const userNameInpRef = useRef(null);
    const h1ref = useRef(null);
    const {user,SetStoredUser} = useContext(UpdateProfilContext);
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = JSON.parse(localStorage.getItem('token'));
    const [userName,setUserName] = useState(storedUser.nom)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:3500/user/profil',{
            headers:{
                'Authorization':storedUser.jwt,
                'Content-Type': 'application/json'
            }
        })
        .then(data=>data.json())
        .then(data=>SetStoredUser(data,storedToken.jwt,storedToken.googleId))
    },[])

    const handlerUserNameChange = async (e) =>{
        e.preventDefault();
        let input = userNameInpRef.current.value;
        fetch('http://localhost:3500/user/profil/name',{
            method:'PUT',
            body:JSON.stringify({
                name:input
            }),
            headers:{
                'Authorization':storedToken.jwt,
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>{
            setUserName(data);
            storedUser.nom = data;
            user.name = data;
            localStorage.setItem('user',JSON.stringify(storedUser));
            userNameInpRef.current.value=''
            h1ref.current.innerText = data;
        })
    }
    const handleChangePicture = async (e)=>{
        setIsLoading(true);
        let formData = new FormData();
        formData.append('file',e.target.files[0]);
        formData.append('upload_preset','youtube_app_sele');
      //  const storedUser = JSON.parse(localStorage.getItem('user'));
        console.log(storedToken);
        fetch(`https://api.cloudinary.com/v1_1/youtube_app_sele/upload/?api_key=925779913113135`,
        {
            method: 'POST',
            body: formData
        })
        .then(data=>data.json())
        .then(data=>{
            fetch('http://localhost:3500/user/profil/photo',{
                method:'PUT',
                body:JSON.stringify({
                    photo:data.url
                }),
                headers:{
                    'Authorization':storedToken.jwt,
                    'Content-Type': 'application/json'
                }
            })
            .then(data=>data.json())
            .then(data=>{
                SetStoredUser(data);
                setIsLoading(false);
                //console.log(data);
            })
        })
    }
    return(
        <ProfilContainer>
            <ProfilImageContainer>
                <ProfilImage>
                    {!storedUser.picture?<i className="fa fa-user"></i>:<img src={storedUser.picture} alt='user profil'/>}
                </ProfilImage>
                <div className="form_container">
                    <h1 ref={h1ref}>{storedUser.name}</h1>
                    <form action="">
                        <div>
                            <input type="file" name="profil_picture" id="profil_picture" onChange={handleChangePicture}/>
                            <label htmlFor="profil_picture">Cliquez pour changer votre profil</label>
                            {isLoading?<p>Changement en cours...</p>:<></>}
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