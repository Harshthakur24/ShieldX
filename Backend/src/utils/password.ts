import argon2 from 'argon2';

/**
 * Hash a password using Argon2
 * @param password - Plain text password
 * @returns Hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (error) {
    throw new Error('Failed to hash password');
  }
};

/**
 * Verify a password against a hash
 * @param hash - Hashed password
 * @param password - Plain text password to verify
 * @returns True if password matches, false otherwise
 */
export const verifyPassword = async (
  hash: string,
  password: string
): Promise<boolean> => {
  try {
    return await argon2.verify(hash, password);
  } catch (error) {
    return false;
  }
};

