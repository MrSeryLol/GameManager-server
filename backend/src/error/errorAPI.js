export default class ErrorAPI extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        return new ErrorAPI(400, message)
    }

    static internal(message) {
        return new ErrorAPI(500, message)
    }

    static forbidden(message) {
        return new ErrorAPI(403, message)
    }

    static unauthorized(message) {
        return new ErrorAPI(401, message)
    }
}
