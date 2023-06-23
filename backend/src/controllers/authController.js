import ErrorAPI from '../error/errorAPI.js'
import { User } from "../models/user.js"
import { Role } from "../models/role.js"
import Jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'


const generateAccessToken = (user_id, roles) => {
    const payload = {
        user_id,
        roles,
    }
    return Jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' })
}

class AuthController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                next(ErrorAPI.badRequest("Ошибка при регистрации " + errors))
            }

            const { login, password } = req.body
            const candidate = User.findOne({ where: login })

            if (candidate) {
                ErrorAPI.badRequest("Пользователь с таким логином уже существует")
            }

            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({ role: "USER" })

            const user = new User({ login: login, password: hashPassword, roles: [userRole._id] })
            await user.save()

            return res.json({ message: "Пользователь успешно зарегистрировался!" })
        } catch (err) {
            next(ErrorAPI.badRequest(err.message))
        }
    }

    async login(req, res, next) {
        try {
            const { login, password } = req.body
            const user = await User.findOne({ login: login })
            if (!user) {
                next(ErrorAPI.badRequest(`Пользователь с логином "${login}" не найден`))
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                next(ErrorAPI.badRequest("Введён неверный пароль"))
            }

            console.log(user)

            const roleList = await Promise.all(user.roles.map(async (roleId) => {
                const role = await Role.findById(roleId, { role: 1, _id: 0 })
                return role
            }))

            console.log(roleList)


            const token = generateAccessToken(user._id, roleList)
            return res.json({ token })
        } catch (err) {
            next(ErrorAPI.badRequest("Login error" + err))
        }
    }

    async check(req, res, next) {
        try {
            const { roles } = req.userInfo
            const token = generateAccessToken(req.userInfo.user_id, roles)
            res.json({ token })
        } catch (err) {
            console.log(err)
        }
    }
}

export default AuthController;