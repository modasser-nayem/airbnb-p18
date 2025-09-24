import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: req.method + ": Route is not found for " + req.originalUrl,
    error: {},
  });
};

export default notFound;
