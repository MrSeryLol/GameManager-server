import { Router } from 'express';
import AdminController from '../controllers/adminController.js';
import {checkRoleMiddleware} from '../middleware/checkRoleMiddleware.js';
const router = new Router();
const adminController = new AdminController()

//router.get("/genres", checkRoleMiddleware("ADMIN"), adminController.createGenre)
// router.get("/moderators", checkRoleMiddleware("ADMIN"), adminController.getModerators)
// router.get("/games", checkRoleMiddleware("ADMIN"), adminController.getGames)
// router.post('/registration', HomeController)
// router.post('/login', authController.login)
router.post("/genres", checkRoleMiddleware("ADMIN"), adminController.createGenre)
router.get("/genres", checkRoleMiddleware("ADMIN"), adminController.getGenres)

export const adminRouter = router;