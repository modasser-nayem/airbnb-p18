"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const zod_1 = require("zod");
const zodErrorHandler_1 = __importDefault(require("../error/zodErrorHandler"));
const duplicateErrorHandler_1 = __importDefault(require("../error/duplicateErrorHandler"));
const AppError_1 = __importDefault(require("../error/AppError"));
const castErrorHandler_1 = __importDefault(require("../error/castErrorHandler"));
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorhandler = (err, _req, res, _next) => {
    let message = err.message || "Something went wrong!";
    let statusCode = err.statusCode || 500;
    let error = err || null;
    const stack = err.stack || null;
    if (err instanceof zod_1.ZodError) {
        const result = (0, zodErrorHandler_1.default)(err);
        statusCode = result.statusCode;
        message = result.message;
        error = result.error;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const result = (0, castErrorHandler_1.default)(err);
        statusCode = result.statusCode;
        message = result.message;
        error = result.error;
    }
    else if (err.code === 11000) {
        const result = (0, duplicateErrorHandler_1.default)(err);
        statusCode = result.statusCode;
        message = result.message;
        error = result.error;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
        error = null;
    }
    else if (err instanceof Error) {
        statusCode = 500;
        if (err.message) {
            message = err.message;
        }
        else {
            message =
                statusCode === 400
                    ? "Bad Request"
                    : statusCode === 404
                        ? "Not Found"
                        : statusCode === 401
                            ? "Unauthorized Access"
                            : statusCode === 403
                                ? "Forbidden Access"
                                : statusCode === 500
                                    ? "Server Error"
                                    : "Something went wrong";
        }
    }
    res.status(statusCode).json({
        success: false,
        message: message,
        error: error,
        stack: config_1.default.NODE_ENV === "development" ? stack : null,
    });
};
exports.default = globalErrorhandler;
