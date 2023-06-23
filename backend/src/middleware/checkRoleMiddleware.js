import ErrorAPI from "../error/errorAPI.js"
import Jwt from "jsonwebtoken"
import { Role } from "../models/role.js"

function checkRoleMiddleware(roles) {
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

            console.log(decoded.roles)
            const decodedRoles = decoded.roles.map(item => {
                return item.role
            })

            const neededRoles = decodedRoles.toString() === roles.toString()

            if (!neededRoles) {
                console.log("Роли разные")
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