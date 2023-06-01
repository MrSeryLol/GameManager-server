import ErrorAPI from '../error/errorAPI.js'
import { Game } from "../models/game.js"
import Jwt from 'jsonwebtoken'
import { compare } from 'bcrypt' 

class HomeController {
    async getHomeInfo(req, res, next) {
        return res.json({message: "УРАААА"})
    }

}

export default HomeController;