import { ErrorRequestHandler } from "express";
import config from "../config";
import { ZodError } from "zod";
import zodErrorHandler from "../error/zodErrorHandler";
import duplicateErrorHandler from "../error/duplicateErrorHandler";
import AppError from "../error/AppError";
import castErrorHandler from "../error/castErrorHandler";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorhandler: ErrorRequestHandler = (err, _req, res, _next) => {
  let message = err.message || "Something went wrong!";
  let statusCode = err.statusCode || 500;
  let error = err || null;
  const stack = err.stack || null;

  if (err instanceof ZodError) {
    const result = zodErrorHandler(err);
    statusCode = result.statusCode;
    message = result.message;
    error = result.error;
  } else if (err?.name === "CastError") {
    const result = castErrorHandler(err);
    statusCode = result.statusCode;
    message = result.message;
    error = result.error;
  } else if (err.code === 11000) {
    const result = duplicateErrorHandler(err);
    statusCode = result.statusCode;
    message = result.message;
    error = result.error;
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    error = null;
  } else if (err instanceof Error) {
    statusCode = 500;
    if (err.message) {
      message = err.message;
    } else {
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
    stack: config.NODE_ENV === "development" ? stack : null,
  });
};

export default globalErrorhandler;
