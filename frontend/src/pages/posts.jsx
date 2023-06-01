import React, { useState, useRef, useMemo, useEffect } from "react";
//import Counter from "./components/counter";
import "../styles/App.css"
//import PostItem from "./components/postItem";
import PostList from "../components/postList";
import MyButton from "../components/UI/button/myButton"
//import MyInput from "./components/UI/input/myInput";
import PostForm from "../components/postForm";
//import MySelect from "./components/UI/select/mySelect";
import PostFilter from "../components/postFilter";
import MyModal from "../components/UI/myModal/myModal";
import { usePosts } from "../hooks/usePosts";
import axios from "axios"
import { PostService } from "../API/postService";
import Loader from "../components/UI/loader/loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import Pagination from "../components/UI/pagination/pagination";

function Posts() {
    //const [likes, setLikes] = useState(0)
    //const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')

    const [posts, setPosts] = useState([
        { id: 1, title: "Javascript", body: "Description" },
        { id: 2, title: "Javascript 2", body: "Description" },
        { id: 3, title: "Javascript 3", body: "Description" },
    ])

    const [filter, setFilter] = useState({ sort: "", query: "" })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    //const [isPostsLoading, setIsPostsLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(0);


    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit))

    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    // const [posts2, setPosts2] = useState([
    //     {id: 1, title: "Python", body: "Description"},
    //     {id: 2, title: "Python 2", body: "Description"},
    //     {id: 3, title: "Python 3", body: "Description"},
    // ])

    //const [post, setPost] = useState({title: "", body: ""})

    // const [title, setTitle] = useState("")
    // const [body, setBody] = useState("")
    //const bodyInputRef = useRef();

    //const [selectedSort, setSelectedSort] = useState("")
    //const [searchQuery, setSearchQuery] = useState("")

    // function getSortedPosts() {
    //     console.log("Отработала функция сотред постс")
    //     if (selectedSort) {
    //         return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    //     }

    //     return posts
    // }


    // const sortedPosts = useMemo(() => {
    //     console.log("Отработала функция сотред постс")
    //     if (filter.sort) {
    //         return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    //     }
    //     return posts
    // }, [filter.sort, posts])

    // const sortedAndSearchedPosts = useMemo(() => {

    //     return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    // }, [filter.query, sortedPosts])
    //Это своеобразная функция-коллбэк, которая будет обновлять список новых постов
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>
                GET POSTS
            </button>
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                {/* Передаём props create с функцией createPost */}
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка</h1>
            }
            {isPostsLoading
                ? <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}><Loader /></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
            }

            <Pagination 
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
            {/* <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/> */}
        </div>
    );
}

export default Posts;