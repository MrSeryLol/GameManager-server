import ErrorAPI from '../error/errorAPI.js'
import { Game } from "../models/game.js"
import { Genre } from "../models/genre.js"
import { Developer } from '../models/developer.js'
import { User } from '../models/user.js'

class DeveloperController {
    async createDeveloper(req, res, next) {
        const { name } = req.body
        const userInfo = req.userInfo
        const developer = new Developer({ name: name, members: [userInfo.user_id] })
        await developer.save()

        res.json({ developer })
    }

    async getDevPage(req, res, next) {
        const userInfo = req.userInfo
        console.log(userInfo)
        const devInfo = await Developer.findOne({ members: userInfo.user_id }, { games: 1 })
            .populate({
                path: "games"
            })


        return res.json({devInfo})
    }

    async getGenres(req, res, next) {
        const genres = await Genre.find({}, {genre: 1, _id: 0})
        console.log(genres)

        res.json({ genres })

    }

    async createGame(req, res, next) {
        const { title, description, genres, type } = req.body
        const userInfo = req.userInfo

        console.log(userInfo)

        const genreList = await Genre.find({ genre: genres }, { _id: 1 })
        const newGame = new Game({ title: title, description: description, genres: genreList, type: type })
        newGame.save()

        const user = await User.findById(userInfo.user_id)

        const devCandidate = await Developer.findOne({ name: user.login })

        if (!devCandidate) {
            const developer = new Developer({ name: user.login, members: [userInfo.user_id], games: [newGame] })
            await developer.save()
        }

        devCandidate.games.push(newGame)
        devCandidate.save()


        res.json({ newGame })
    }

}

export default DeveloperController;