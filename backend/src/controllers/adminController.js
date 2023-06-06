import ErrorAPI from '../error/errorAPI.js'
import { Game } from "../models/game.js"
import Jwt from 'jsonwebtoken'
import { compare } from 'bcrypt' 
import { Role } from '../models/role.js'
import { User } from '../models/user.js'
import { Genre } from '../models/genre.js'

class AdminController {
    async createGenre(req, res, next) {
        const { genres } = req.body

        console.log(genres)

        try {
            if (!Array.isArray(genres)) {
                const newGenre = new Genre({genre: genres})
                newGenre.save()
                return res.json({ genres: newGenre.genre })
            }
    
            const genreList = await Promise.all(genres.map(async (genre) => {
                const newGenre = new Genre({genre: genre})
                newGenre.save()
                return newGenre
            }))

            return res.json({ genreList })
        } catch(err) {
            next(ErrorAPI.badRequest(`Произошла ошибка: ${err.message}`))
        }
    }

    async getGenres(req, res, next) {
        const genres = await Genre.find({}, {genre: 1, _id: 0})
        console.log(genres)

        res.json({ genres })
    }




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