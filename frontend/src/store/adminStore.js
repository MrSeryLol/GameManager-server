import { makeAutoObservable } from "mobx"

export default class AdminStore {
    constructor() {
        this._moderators = []
        this._genres = []
        makeAutoObservable(this)
    }

    setGenres(genres) {
        this._genres = genres
    }

    setModerators(moderators) {
        this._moderators = moderators
    }

    get genres() {
        return this._genres
    }

    get moderators() {
        return this._moderators
    }
}