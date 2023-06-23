import { Router } from 'express';
import HomeController from '../controllers/homeController.js';
const router = new Router();
const homeController = new HomeController()

router.get("/", homeController.getHomeInfo)

export const homeRouter = router;