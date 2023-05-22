import { useEffect } from "react";
import React from "react";
// import axios from "axios";
import "./App.css";
import { useState } from "react";
// import YouTube from "react-youtube";
import {MyRoutes} from "./routers/routes";
import { LandigPage } from "./pages/LandingPage";

function App() {
  return (<div>
        <header>
      <h1 className="title">Peliculas👍</h1>
    </header>
    <MyRoutes/>
  </div>
  );
}


export default App;
