import { useState } from "react";
import { createContext } from "react"
import {useNavigate} from 'react-router-dom'
export const UserLoginStatusContext = createContext();

export const UserLoginStatusProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(false);
    const navigateTo = useNavigate()

    const switchIsLogin = ()=>{
        if (isLogin === false) {
            localStorage.setItem('isLogin','true');
            setIsLogin(true);
            navigateTo('/')
        }else{
            localStorage.clear('isLogin');
            localStorage.clear("user");
            navigateTo('/home')
            setIsLogin(false);
        }
    }
    return(
        <UserLoginStatusContext.Provider value={{isLogin,switchIsLogin}}>
            {children}
        </UserLoginStatusContext.Provider>
    )
}