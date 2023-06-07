import { Router } from 'express';
import DeveloperController from '../controllers/developerController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = new Router();
const developerController = new DeveloperController()

router.post("/", authMiddleware, developerController.createDeveloper)
router.get("/", authMiddleware, developerController.getDevPage)
router.post("/creategame", authMiddleware, developerController.createGame)

//router.get("/devpage", developerController.getHomeInfo)
// router.post('/registration', HomeController)
// router.post('/login', authController.login)

export const developerRouter = router;