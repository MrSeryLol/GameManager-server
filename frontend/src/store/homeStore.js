import { makeAutoObservable } from "mobx"

export default class HomeStore {
    constructor() {
        this._games = []
        this._genres = []
        makeAutoObservable(this)
    }

    setGames(games) {
        this._games = games
    }

    setGenres(genres) {
        this._genres = genres
    }

    get games() {
        return this._games
    }

    get genres() {
        return this._genres
    }
    
}