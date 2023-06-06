import ErrorAPI from '../error/errorAPI.js'
import { Game } from "../models/game.js"
import { Genre } from "../models/genre.js"
import Jwt from 'jsonwebtoken'
import { compare } from 'bcrypt' 
import { Developer } from '../models/developer.js'

class DeveloperController {
    async createDeveloper(req, res, next) {
        const { name } = req.body
        const userInfo = req.userInfo
        const developer = new Developer({name: name, members: [userInfo.user_id]})
        await developer.save()

        res.json({ developer })
    }
    
    async getDevPage(req, res, next) {
        const userInfo = req.userInfo
        console.log(userInfo)
        const devInfo = await Developer.findOne({ members: userInfo.user_id })
        return res.json({ devInfo })
    }

    async createGame(req, res, next) {
        const { title, description, genres, type } = req.body
        
        const genreList = await Genre.find({genre: genres}, {_id: 1})
        const newGame = new Game({title: title, description: description, genres: genreList, type: type})
        newGame.save()

        res.json({ newGame })
    }

}

export default DeveloperController;