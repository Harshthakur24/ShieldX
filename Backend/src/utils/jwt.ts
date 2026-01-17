import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export interface JWTPayload {
  user_id: string;
  email: string;
  issued_at: number;
  expires_at: number;
}

/**
 * Sign a JWT token with user information
 * @param userId - User ID
 * @param email - User email
 * @returns JWT token string
 */
export const signToken = (userId: string, email: string): string => {
  if (!env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not configured');
  }

  const now = Math.floor(Date.now() / 1000); // Current time in seconds
  const ttl = parseInt(env.JWT_TTL || '3600', 10); // Default to 1 hour if not set
  const expiresAt = now + ttl;

  const payload: JWTPayload = {
    user_id: userId,
    email: email,
    issued_at: now,
    expires_at: expiresAt,
  };

  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: ttl,
  });
};

/**
 * Verify and decode a JWT token
 * @param token - JWT token string
 * @returns Decoded payload if valid
 * @throws Error if token is invalid or expired
 */
export const verifyToken = (token: string): JWTPayload => {
  if (!env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not configured');
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JWTPayload;
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token has expired');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid token');
    }
    throw new Error('Token verification failed');
  }
};

/**
 * Decode a JWT token without verification (for inspection only)
 * @param token - JWT token string
 * @returns Decoded payload (not verified)
 */
export const decodeToken = (token: string): JWTPayload | null => {
  try {
    const decoded = jwt.decode(token) as JWTPayload | null;
    return decoded;
  } catch (error) {
    return null;
  }
};

