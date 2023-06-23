import { Router } from 'express';
import { homeRouter } from './homeRouter.js';
import { authRouter } from './authRouter.js';
import { adminRouter } from "./adminRouter.js";
import {checkRoleMiddleware} from '../middleware/checkRoleMiddleware.js';
import { developerRouter } from './developerRouter.js';
import { gameRouter } from './gameRouter.js';
const router = new Router();


router.use("/", homeRouter)
router.use("/auth", authRouter)
router.use("/admin", checkRoleMiddleware(["ADMIN"]), adminRouter)
router.use("/devpage", developerRouter)
router.use("/game", gameRouter)

export const routing = router;