import { Router } from 'express';
import AuthController from "../controllers/authController.js"
import { check } from 'express-validator';
const router = new Router();
const authController = new AuthController()

router.post("/registration", [
    check("login", "Логин не может быть пустым!").notEmpty(),
    check("password", "Пароль не может быть меньше 4 символов").isLength({min: 4})
], authController.registration)
router.post("/login", authController.login)

export const authRouter = router;