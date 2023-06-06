import React, { useState, useRef, useMemo, useEffect, useContext } from "react";
import Counter from "./components/counter";
import "./styles/App.css"
import PostItem from "./components/postItem";
import PostList from "./components/postList";
import MyButton from "./components/UI/button/myButton"
import MyInput from "./components/UI/input/myInput";
import PostForm from "./components/postForm";
import MySelect from "./components/UI/select/mySelect";
import PostFilter from "./components/postFilter";
import MyModal from "./components/UI/myModal/myModal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios"
import { PostService } from "./API/postService";
import Loader from "./components/UI/loader/loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";
import Pagination from "./components/UI/pagination/pagination";

import {BrowserRouter, Link, Route, Routes, Red, Navigate} from "react-router-dom";
import About from "./pages/about";
import Posts from "./pages/posts"
import Error from "./pages/error";
//import Navbar from "./components/UI/navbar/navbar";
import AppRouter from "./components/appRouter";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar";
import Navbar from "./components/header/navbar"
import { observer } from "mobx-react-lite";
import { Context } from ".";


function App() {
    return(
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
