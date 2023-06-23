import ErrorAPI from '../error/errorAPI.js'
import { Game } from "../models/game.js"
import { User } from '../models/user.js'
import { Genre } from '../models/genre.js'
import { Role } from '../models/role.js'

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

    async deleteGenre(req, res, next) {
        try {
            const { id } = req.params
            console.log(req.params)

        const item = await Genre.findById(id, {genre: 1, _id: 0})
        await Genre.findByIdAndDelete(id)

        res.json({genre: item.genre })
        } catch(err) {
            console.log(err)
        }
    }

    async getGenres(req, res, next) {
        const genres = await Genre.find({}, {genre: 1, _id: 1})
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

    async createModerator(req, res, next) {
        const { userId } = req.body
        const user = await User.findById(userId, { login: 1, roles: 1, _id: 1 })

        const role = await Role.findOne({role: "MODERATOR"})

        user.roles.push(role._id)
        user.save()

        res.json({user: user})
    }

    async deleteModerator(req, res, next) {
        try {
            const { id } = req.params
            console.log(req.params)

        let user = await User.findById(id)
            .populate("roles")

        const updatedUserRoles = user.roles.filter((item) => item.role !== "MODERATOR")
        //console.log(updatedUser)
        user.roles = updatedUserRoles
        user.save()

        res.json(user)

        } catch(err) {
            console.log(err)
        }
    }

    async getGames(req, res, next) {
        const games = await Game.find({})
        res.json({games})
    }

    async deleteGame(req, res, next) {
        const { id } = req.params
        const game = await Game.findById(id, { title: 1, _id: 0 })
        await Game.findByIdAndDelete(id)

        res.json({game: game.title})
    }

    async getUsers(req, res, next) {
        const users = await User.find({}, { login: 1, roles: 1, _id: 1 })
            .populate("roles", "role -_id");
        
        res.json({users})
    }

    async deleteUser(req, res, next) {
        const { id } = req.params
        const user = await User.findById(id, { login: 1, _id: 0 })
        await User.findByIdAndDelete(id)

        res.json({user: user.login})
    }

}

export default AdminController;