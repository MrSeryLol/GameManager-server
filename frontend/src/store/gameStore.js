import { makeAutoObservable } from "mobx"

export default class GameStore {
    constructor() {
        this._games = []
        makeAutoObservable(this)
    }

    setGames(games) {
        this._games = games
    }

    get games() {
        return this._games
    }
}