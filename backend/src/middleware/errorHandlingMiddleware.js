import ErrorAPI from "../error/errorAPI.js"

function errorHandling(err, req, res, next) {
    if (err instanceof ErrorAPI) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Непредвиденная ошибка!"})
}

export {errorHandling}