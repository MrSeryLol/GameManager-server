import { $authHost, $host } from "./index.js";


export const createGame = async (title, description, genres) => {
    const { data } = await $authHost.post("devpage/creategame", {title, description, genres, type: "Браузерная"})
    return data
}

export const fetchGames = async () => {
    const { data } = await $authHost.get("devpage")
    console.log(`Из axios ${data}`)
    console.log(data.devInfo)
    return data.devInfo
}

export const fetchGenres = async () => {
    const { data } = await $authHost.get("devpage/genres")
    return data
}