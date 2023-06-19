import ErrorAPI from '../error/errorAPI.js'
import { Game } from "../models/game.js"

class GameController {
    async getGameInfo(req, res, next) {
        const { id } = req.params

        const selectedGame = await Game.findById(id)
            .populate({ path: "genres", select: "genre -_id" })
        console.log(selectedGame)
        return res.json(selectedGame)
    }
}

export default GameController;