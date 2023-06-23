import { Router } from 'express';
import AdminController from '../controllers/adminController.js';
import {checkRoleMiddleware} from '../middleware/checkRoleMiddleware.js';
const router = new Router();
const adminController = new AdminController()

router.post("/genres", adminController.createGenre)
router.delete("/genres/:id", adminController.deleteGenre)
router.get("/genres", adminController.getGenres)
router.get("/moderators", adminController.getModerators)
router.post("/moderators", adminController.createModerator)
router.delete("/moderators/:id", adminController.deleteModerator)
router.get("/users", adminController.getUsers)
router.delete("/users/:id", adminController.deleteUser)
router.get("/games", adminController.getGames)
router.delete("/games/:id", adminController.deleteGame)


export const adminRouter = router;