import React, { useState } from "react";
import MyButton from "./UI/button/myButton";
import MyInput from "./UI/input/myInput";

//Производим деструктуризацию функции create из props, т.е. props.create
const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})

    const addNewPost = (e) => {
        e.preventDefault()

        //Создаём новый пост
        const newPost = {
            ...post, id: Date.now()
        }
        // const newPost = {
        //     id: Date.now(),
        //     title,
        //     body,
        // }

        //setPosts([...posts, newPost])
        //setTitle("")
        //setBody("")

        //setPosts([...posts, {...post, id: Date.now()}])
        //Вызываем переданную функцию create, которая сработает и на верхнем уровне
        create(newPost)
        setPost({title: "", body: ""})

        //console.log(newPost)
        // console.log(title)
        //console.log(bodyInputRef.current.value)
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                //onChange={e => setTitle(e.target.value)}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Название поста" />

            {/* <input ref={bodyInputRef} type="text"/> */}
            {/* Неуправляемый/Неконтроллируемый элемент компонент */}
            {/* <MyInput 
                ref={bodyInputRef}
                type="text" 
                placeholder="Описание поста"/> */}

            <MyInput
                value={post.body}
                //onChange={e => setBody(e.target.value)}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Описание поста" />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm;