import dotenvFlow from 'dotenv-flow';
import { z } from 'zod';

dotenvFlow.config();

const envSchema = z
  .object({
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    PORT: z.coerce.number().int().positive().default(3000),
    DATABASE_URL: z.string().url().optional(),
    PGHOST: z.string().optional(),
    PGPORT: z.coerce.number().int().positive().optional(),
    PGUSER: z.string().optional(),
    PGPASSWORD: z.string().optional(),
    PGDATABASE: z.string().optional(),
  })
  .superRefine((values, ctx) => {
    if (values.NODE_ENV !== 'production') {
      return;
    }

    const hasDatabaseUrl = Boolean(values.DATABASE_URL);
    const hasPgConfig =
      Boolean(values.PGHOST) &&
      values.PGPORT !== undefined &&
      Boolean(values.PGUSER) &&
      Boolean(values.PGPASSWORD) &&
      Boolean(values.PGDATABASE);

    if (!hasDatabaseUrl && !hasPgConfig) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['DATABASE_URL'],
        message: 'Production requires DATABASE_URL or PG* connection values.',
      });
    }
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
