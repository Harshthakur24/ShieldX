import { Response } from 'express';

/**
 * Send a success response
 */
export const sendSuccess = (
  res: Response,
  data: any,
  message: string = 'Success',
  statusCode: number = 200
): void => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

/**
 * Send an error response
 */
export const sendError = (
  res: Response,
  message: string = 'Error',
  statusCode: number = 400
): void => {
  res.status(statusCode).json({
    success: false,
    message,
  });
};

