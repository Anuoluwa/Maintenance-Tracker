import pg from 'pg';

const config = {
  user: 'aptserver',
  database: 'maintrackerdb',
  password: 'anuoluwa',
  port: 5432,
  host: 'localhost',
  max: 100, // max number of connection can be open to database
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

export default pool;

