import { $authHost, $host } from "./index.js";
import jwt_decode from "jwt-decode"

export const getGameInfo = async(id) =>{
    const { data } = await $host.get(`/game/${id}`)
    return data
}