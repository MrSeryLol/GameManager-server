import { makeAutoObservable } from "mobx"

export default class GameStore {
    constructor() {
        this._title = ""
        this._description = ""
        this._genres = []
        this._type = []
        makeAutoObservable(this)
    }

    setTitle(title) {
        this._title = title
    }

    get title() {
        return this._title
    }

    setDescription(description) {
        this._description = description
    }

    get description() {
        return this._description
    }

    setGenres(genres) {
        this._genres = genres
    }

    get genres() {
        return this._genres
    }

    setType(type) {
        this._type = type
    }

    get type() {
        return this._type
    }
}