import 'dotenv/config'

export const JWT_CONSTANTS = {
  SECRET: process.env.JWT_SECRET_KEY,
} as const;