import React, { useContext, useEffect } from "react";
import Error from "../pages/error";
import { Route, Navigate, Routes } from "react-router-dom";
import Home from "../pages/home";
import Registration from "../pages/registration";
import Authorization from "../pages/authorization";
import DevPage from "../pages/devPage";
import AdminPage from "../pages/adminPage";
import GamePage from "../pages/gamePage";

const AppRouter = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Authorization/>}/>
            <Route path="/devpage" element={<DevPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/game/:id" element={<GamePage/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to="/error" replace />}/>
        </Routes>
    )
};

export default AppRouter;