import React, { useContext, useEffect } from "react";
import "./styles/App.css"

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/appRouter";
import Navbar from "./components/header/navbar"
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./API/authAPI";


const App = observer(() => {
    const { user } = useContext(Context)
    
    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        })
    }, [])


    return(
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
})

export default App;
