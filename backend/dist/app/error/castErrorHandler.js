"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const castErrorHandler = (err) => {
    const error = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: "Invalid _Id",
        error: error,
    };
};
exports.default = castErrorHandler;
