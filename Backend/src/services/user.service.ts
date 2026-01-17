import { prisma } from '../config/primsa';
import { hashPassword } from '../utils/password';
import { signToken } from '../utils/jwt';

export interface SignupData {
  email: string;
  password: string;
  name: string;
}

export interface SignupResult {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: Date;
  };
  token: string;
}

/**
 * Sign up a new user
 */
export const signup = async (data: SignupData): Promise<SignupResult> => {
  // Validate input
  if (!data.email || !data.password || !data.name) {
    const error = new Error('Email, password, and name are required');
    (error as any).statusCode = 400;
    throw error;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    const error = new Error('Invalid email format');
    (error as any).statusCode = 400;
    throw error;
  }

  // Validate password length
  if (data.password.length < 8) {
    const error = new Error('Password must be at least 8 characters long');
    (error as any).statusCode = 400;
    throw error;
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    const error = new Error('User with this email already exists');
    (error as any).statusCode = 409;
    throw error;
  }

  // Hash password
  const hashedPassword = await hashPassword(data.password);

  // Create user
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data.name,
    },
  });

  // Generate JWT token
  const token = signToken(user.id, user.email);

  // Return user data (without password) and token
  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
    },
    token,
  };
};

