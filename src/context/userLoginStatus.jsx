import { useState } from "react";
import { createContext } from "react"
import {useLocation} from 'react-router-dom'
export const UserLoginStatusContext = createContext();

export const UserLoginStatusProvider = ({children})=>{
    const [isLogin,setIsLogin] = useState(false);
    const location = useLocation()

    const switchIsLogin = ()=>{
        if (isLogin === false) {
            location.pathname = '/home'
            localStorage.setItem('isLogin','true');
            setIsLogin(true);
        }else{
            location.pathname = '/'
            localStorage.clear('isLogin');
            setIsLogin(false);
        }
    }
    return(
        <UserLoginStatusContext.Provider value={{isLogin,switchIsLogin}}>
            {children}
        </UserLoginStatusContext.Provider>
    )
}