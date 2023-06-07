import { makeAutoObservable } from "mobx"

export default class DeveloperStore {
    constructor() {
        this._games = []
        this._genres = []
        makeAutoObservable(this)
    }

    setGames(games) {
        this._games = games
    }

    setGenres(geners) {
        this._genres = geners
    }

    get games() {
        return this._games
    }

    get genres() {
        return this._genres
    }
}