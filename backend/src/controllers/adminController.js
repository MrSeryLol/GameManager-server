import ErrorAPI from '../error/errorAPI.js'
import { Game } from "../models/game.js"
import Jwt from 'jsonwebtoken'
import { compare } from 'bcrypt' 
import { Role } from '../models/role.js'
import { User } from '../models/user.js'

class AdminController {
    async getModerators(req, res, next) {
        const users = await User.find()
        .populate({
            path: "roles",
            match: { role: "MODERATOR"}
        })

        const filteredUsers = users.filter((user) => user.roles.length !== 0 );
        res.json({filteredUsers})
    }

    async getGames(req, res, next) {
        const games = await Game.find({})
        res.json({games})
    }

}

export default AdminController;