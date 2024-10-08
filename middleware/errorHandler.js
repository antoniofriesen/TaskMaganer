const { CustomAPIError } = require("../errors/customError.js");

const errorHandlerMiddleware = (error, req, res, next) => {
    if (error instanceof CustomAPIError) {
        return res.status(error.statusCode).json({ msg: error.message });
    }
    return res.status(500).json({ msg: "Something went wrong. Please try again later." });
};

module.exports = errorHandlerMiddleware;