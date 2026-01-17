import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  CORS_ORIGIN: string;
  DATABASE_URL?: string;
  JWT_SECRET?: string;
  API_KEY?: string;
}

// Create env config with defaults
export const env: EnvConfig = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3000', 10),
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  API_KEY: process.env.API_KEY,
};

// Validate PORT is a valid number
if (isNaN(env.PORT) || env.PORT < 1 || env.PORT > 65535) {
  throw new Error('PORT must be a valid number between 1 and 65535');
}

// Validate required environment variables in production
if (env.NODE_ENV === 'production') {
  const requiredEnvVars: (keyof EnvConfig)[] = ['NODE_ENV', 'PORT', 'CORS_ORIGIN'];
  const missing = requiredEnvVars.filter(
    (varName) => !env[varName]
  );

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables in production: ${missing.join(', ')}`
    );
  }
}

