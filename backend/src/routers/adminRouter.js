import { Router } from 'express';
import AdminController from '../controllers/adminController.js';
import {checkRoleMiddleware} from '../middleware/checkRoleMiddleware.js';
const router = new Router();
const adminController = new AdminController()


router.get("/moderators", checkRoleMiddleware("ADMIN"), adminController.getModerators)
router.get("/games", checkRoleMiddleware("ADMIN"), adminController.getGames)
// router.post('/registration', HomeController)
// router.post('/login', authController.login)

export const adminRouter = router;