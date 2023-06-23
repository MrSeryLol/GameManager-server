import { $authHost, $host } from "./index.js";
import jwt_decode from "jwt-decode"

export const registration = async(login, password) => {
    const response = await $host.post("auth/registration", {login, password})
    return response
}

export const login = async(login, password) => {
    const { data } = await $host.post("auth/login", {login, password})
    console.log("Внутри login" + data)
    console.log(data.token)
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}

export const check = async() => {
    const { data } = await $authHost.get("auth/")
    console.log(data)
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}