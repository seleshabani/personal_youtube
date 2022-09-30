import { useState } from "react";
import { createContext } from "react"

export const UserLoginStatusContext = createContext();

export const UserLoginStatusProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(false);

    const switchIsLogin = ()=>{
        setIsLogin(!isLogin);
    }
    return(
        <UserLoginStatusContext.Provider value={{isLogin,switchIsLogin}}>
            {children}
        </UserLoginStatusContext.Provider>
    )
}