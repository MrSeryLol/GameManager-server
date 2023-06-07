import { $authHost, $host } from "./index.js";

export const fetchGenres = async () => {
    const { data } = await $authHost.get("admin/genres")
    return data
}

export const createGenre = async (genre) => {
    const { data } = await $authHost.post("admin/genres", genre)
    return data
}
