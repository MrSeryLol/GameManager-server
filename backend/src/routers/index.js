import { Router } from 'express';
import { homeRouter } from './homeRouter.js';
import { authRouter } from './authRouter.js';
import { adminRouter } from "./adminRouter.js"
const router = new Router();


router.use("/", homeRouter)
router.use("/auth", authRouter)
router.use("/admin", adminRouter)


// router.use('/projects', projectsRouter)
// router.use('/tasks', taskRouter)
// router.use('/auth', authRouter)
// router.use('/history', historyOfWorkRouter)
// router.use('/employees', employeeRouter)

export const routing = router;