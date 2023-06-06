import { $authHost, $host } from "./index.js";
import jwt_decode from "jwt-decode"


export const fetchGenres = async () => {
    const { data } = await $authHost.get("admin/genres")
    return data
}

export const createGenre = async (genre) => {
    const { data } = await $authHost.post("admin/genres", genre)
    return data
}

// export const registration = async(login, password) => {
//     const response = await $authHost.post("auth/registration", {login, password})
//     return response
// }

// export const login = async(login, password) => {
//     const { data } = await $host.post("auth/login", {login, password})
//     console.log("Внутри login" + data)
//     console.log(data.token)
//     localStorage.setItem("token", data.token)
//     return jwt_decode(data.token)
// }