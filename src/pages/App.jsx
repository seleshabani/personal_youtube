import React from "react"
import { useContext } from "react"
import { UserLoginStatusContext } from "../context/userLoginStatus"
import {Login} from './Login';
import {Routes, Route} from 'react-router-dom';
import { Home } from "./Home";
import { Template } from "./Template";

export default function App() {
  const {isLogin} = useContext(UserLoginStatusContext);

  if (!isLogin) {
    return <Login/>
  }

  return (
    
      <Template>
        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Template>
    
  )
}
