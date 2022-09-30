import React from "react"
import { useContext } from "react"
import { UserLoginStatusContext } from "./context/userLoginStatus"
import {Login} from './pages/Login';
import {Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";

export default function App() {
  const {isLogin} = useContext(UserLoginStatusContext);

  if (!isLogin) {
    return <Login/>
  }

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}
