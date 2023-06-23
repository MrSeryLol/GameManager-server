import { Router } from 'express';
import DeveloperController from '../controllers/developerController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = new Router();
const developerController = new DeveloperController()

router.post("/", authMiddleware, developerController.createDeveloper)
router.get("/", authMiddleware, developerController.getDevPage)
router.get("/genres", authMiddleware, developerController.getGenres)
router.post("/creategame", authMiddleware, developerController.createGame)

export const developerRouter = router;