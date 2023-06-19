import ErrorAPI from '../error/errorAPI.js'
import { Game } from "../models/game.js"
import { Genre } from "../models/genre.js"
import Jwt from 'jsonwebtoken'
import { compare } from 'bcrypt' 

class HomeController {
    async getHomeInfo(req, res, next) {
        const genreList = await Genre.find({}, {genre: 1, _id: 0}).limit(5)
        const gameList = await Game.find({}, {title: 1, _id: 1})

        const homeInfo = '{ "genres" : ' + JSON.stringify(genreList) + "," +
            '"games" : ' + JSON.stringify(gameList) + '}'
        const jsonHomeInfo = JSON.parse(homeInfo)
        
        return res.json(jsonHomeInfo)
    }
}

export default HomeController;