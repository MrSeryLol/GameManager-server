import { $authHost, $host } from "./index.js";
import jwt_decode from "jwt-decode"

export const getHomeInfo = async() =>{
    const { data } = await $host.get("/")
    return data
}