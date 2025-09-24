"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const duplicateErrorHandler = (err) => {
    // Extract value within double quotes using regex
    const match = err.message.match(/"([^"]*)"/);
    // The extracted value will be in the first capturing group
    const extractedMessage = match && match[1];
    const message = `${extractedMessage} is already exists`;
    return {
        statusCode: 400,
        message: extractedMessage ? message : "Server Error!",
        error: {},
    };
};
exports.default = duplicateErrorHandler;
