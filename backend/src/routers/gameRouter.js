import { Router } from 'express';
import GameController from '../controllers/gameController.js';
const router = new Router();
const gameController = new GameController()

router.get("/:id", gameController.getGameInfo)
// router.post('/registration', HomeController)
// router.post('/login', authController.login)

export const gameRouter = router;