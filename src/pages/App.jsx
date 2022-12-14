import React from "react"
import { useContext } from "react"
import { UserLoginStatusContext } from "../context/userLoginStatus"
import {Login} from './Login';
import {Routes, Route} from 'react-router-dom';
import { Home } from "./Home";
import {Favoris} from "./Favoris"
import { Template } from "./Template";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { Channels } from "./Channels";
import { Single } from "./Single";
import { VideosForChannel } from "./VideosForChannel";
import { SearchResult } from "./SearchResult";

export default function App() {
  const {isLogin} = useContext(UserLoginStatusContext);
  const isLogedStorage = localStorage.getItem('isLogin');

  if ((isLogin===false) && (isLogedStorage !== 'true')) {
    return <Login/>
  }

  return (
      <>
        <Template>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/favoris" element={<Favoris/>} />
            <Route path="/channels" element={<Channels/>} />
            <Route path="/channels/:channelId" element={<VideosForChannel/>} />
            <Route path="/video/:id" element={<Single/>} />
            <Route path="/search/:query" element={<SearchResult/>} />
          </Routes>
        </Template>
      </>
  )
}
