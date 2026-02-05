import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL;

const pool = new Pool(
  databaseUrl
    ? { connectionString: databaseUrl }
    : {
        host: process.env.PGHOST,
        port: process.env.PGPORT ? Number(process.env.PGPORT) : undefined,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
      },
);

pool.on('error', (error) => {
  console.error('Unexpected PostgreSQL client error', error);
});

export { pool };
