"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: req.method + ": Route is not found for " + req.originalUrl,
        error: {},
    });
};
exports.default = notFound;
