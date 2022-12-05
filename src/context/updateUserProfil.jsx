import { useState } from "react";
import { createContext } from "react";

export const UpdateProfilContext = createContext();

export const UpdateprofileProvider = ({children})=>{
    const [user,setUser] = useState({});

    const SetStoredUser = (user,jwt,googleToken)=>{
        let tokenStorage = JSON.parse(localStorage.getItem('token'));
        if (!tokenStorage) {
            localStorage.setItem('token',JSON.stringify({'jwt':jwt,"googleId":googleToken}));
        }
        setUser({...user,'jwt':jwt,"googleId":googleToken});
        localStorage.setItem('user',JSON.stringify({...user,'jwt':jwt,"googleId":googleToken}));
    }

    return(
        <UpdateProfilContext.Provider value={{user,SetStoredUser}}>
            {children}
        </UpdateProfilContext.Provider>
    )
}