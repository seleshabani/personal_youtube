import React from "react"
import { useContext } from "react"
import { UserLoginStatusContext } from "../context/userLoginStatus"
import {Login} from './Login';
import {Routes, Route} from 'react-router-dom';
import { Home } from "./Home";
import {Favoris} from "./Favoris"
import { Template } from "./Template";

export default function App() {
  const {isLogin} = useContext(UserLoginStatusContext);
  const isLogedStorage = localStorage.getItem('isLogin');

  if ((isLogin===false) && (isLogedStorage !== 'true')) {
    return <Login/>
  }

  return (
      <Template>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/favoris" element={<Favoris/>} />
        </Routes>
      </Template>
  )
}
