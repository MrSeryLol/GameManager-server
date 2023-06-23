import { $authHost, $host } from "./index.js";

export const fetchGenres = async () => {
    const { data } = await $authHost.get("admin/genres")
    return data
}

export const createGenre = async (genre) => {
    const { data } = await $authHost.post("admin/genres", genre)
    return data
}

export const deleteGenre = async (genreId) => {
    const { data } = await $authHost.delete(`admin/genres/${genreId}`)
    return data
}

export const fetchModerators = async () => {
    const { data } = await $authHost.get("admin/moderators")
    return data
}

export const createModerator = async (userId) => {
    const { data } = await $authHost.post("admin/moderators", userId)
    return data;
}

export const deleteModerator = async (userId) => {
    const { data } = await $authHost.delete(`admin/moderators/${userId}`)
    return data
}

export const fetchUsers = async () => {
    const { data } = await $authHost.get("admin/users")
    return data
}

export const deleteUser = async (userId) => {
    const { data } = await $authHost.delete(`admin/users/${userId}`)
    return data
}

export const fetchGames = async () => {
    const { data } = await $authHost.get("admin/games")
    return data
}

export const deleteGame = async (gameId) => {
    const { data } = await $authHost.delete(`admin/games/${gameId}`)
    console.log(data)
    return data
}
