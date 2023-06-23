import { makeAutoObservable } from "mobx"

export default class AdminStore {
    constructor() {
        this._moderators = []
        this._genres = []
        this._users = []
        this._games = []
        makeAutoObservable(this)
    }

    setGenres(genres) {
        this._genres = genres
    }

    setModerators(moderators) {
        this._moderators = moderators
    }

    setUsers(users) {
        this._users = users
    }

    setGames(games) {
        this._games = games
    }

    get genres() {
        return this._genres
    }

    get moderators() {
        return this._moderators
    }

    get users() {
        return this._users
    }

    get games() {
        return this._games
    }
}