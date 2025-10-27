import { config } from 'dotenv';
import { z } from 'zod';

const DEFAULT_ENV_FILE = '.env';
const ENV_FILE = process.env.NODE_ENV
  ? `.env.${process.env.NODE_ENV}`
  : DEFAULT_ENV_FILE;

config({
  path: DEFAULT_ENV_FILE,
});

if (ENV_FILE !== DEFAULT_ENV_FILE) {
  config({
    path: ENV_FILE,
    override: true,
  });
}

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    '❌ Invalid environment configuration',
    parsedEnv.error.flatten().fieldErrors,
  );
  process.exit(1);
}

export const env = parsedEnv.data;
