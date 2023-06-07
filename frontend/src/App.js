import React from "react";
import "./styles/App.css"

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/appRouter";
import Navbar from "./components/header/navbar"


function App() {
    return(
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
