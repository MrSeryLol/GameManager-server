import ErrorAPI from "../error/errorAPI.js"
import Jwt from "jsonwebtoken"
import { Role } from "../models/role.js"

function checkRoleMiddleware(role) {
    return async function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return next(ErrorAPI.unauthorized('Пользователь не авторизован!'))
            }

            const decoded = Jwt.verify(token, process.env.SECRET_KEY)
            const decodedRole = await Role.findById(decoded.roles)

            if (decodedRole.role !== role) {
                return next(ErrorAPI.forbidden('Нет прав на выполнение операции'))
            }


            req.userInfo = decoded
            next()
            
        } catch(err) {
            next(ErrorAPI.unauthorized(`${err.message} пользователь не авторизован!`))
        }
    }
}

export {checkRoleMiddleware}