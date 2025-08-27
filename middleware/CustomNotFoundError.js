class CustomErrorNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        // So this returns NotFoundError: message
        // instead of Error: message
        this.name = "NotFoundError";
    }
}

export default CustomErrorNotFoundError;