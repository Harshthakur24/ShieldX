import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

/**
 * Sign up a new user
 */
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password, name } = req.body;

    const result = await userService.signup({
      email,
      password,
      name,
    });

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

