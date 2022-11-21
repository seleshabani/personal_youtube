import React from "react"
import {Login} from './Login';
import {Routes, Route} from 'react-router-dom';
import { Home } from "./Home";
import {Favoris} from "./Favoris"
import { Template } from "./Template";
import { Channels } from "./Channels";
import { Single } from "./Single";
import { VideosForChannel } from "./VideosForChannel";
import { SearchResult } from "./SearchResult";
import { Subscribe } from "./Subscribe";

export default function App() {
  return (
      <>
          <Routes>
            <Route element={<Template/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>} />
              <Route path="/favoris" element={<Favoris/>} />
              <Route path="/channels" element={<Channels/>} />
              <Route path="/channels/:channelId" element={<VideosForChannel/>} />
              <Route path="/video/:id" element={<Single/>} />
              <Route path="/search/:query" element={<SearchResult/>} />
            </Route>
            <Route>
              <Route path="/subscribe" element={<Subscribe/>} />
              <Route path="/login" element={<Login/>} />
            </Route>
          </Routes>
      </>
  )
}
