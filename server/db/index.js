import { Pool } from 'pg';
import dotenv from 'dotenv';
import app from '../app';

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  ssl: process.env.PGSSLMODE,
  max: 10,
  idleTimeoutMillis: 30000,
};

const pool = new Pool(config);


module.exports = {
  pool,
  config,
  query: (text, params, callback) => pool.query(text, params, callback),
};

// const conString = process.env.DATABASE_URL;

// export {
//   pool,
//   conString,
// };

// pool.query('SELECT * FROM requests WHERE title= $1', ['projector'])
// .then((res)=> {

// }).catch((err)=>{
// })
