import React from "react";
import About from "../pages/about";
import Posts from "../pages/posts";
import Error from "../pages/error";
import { Route, Navigate, Routes } from "react-router-dom";
import PostIdPage from "../pages/postIdPage";
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
            <Route path="/about" element={<About/>} />
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<PostIdPage/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to="/error" replace />}/>
        </Routes>
    )
}

export default AppRouter;