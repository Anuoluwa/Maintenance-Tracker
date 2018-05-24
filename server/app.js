import express from 'express';
import { Client } from 'pg';

const pg = require('pg');

const app = express();
const client = new Client('postgres://aptserver:anuoluwa@localhost/maintrackerdb');

client.connect((err) => {
  console.log(err);
});

// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message);
//   client.end();
// });

app.listen(3000, () => {
  console.log('app started at 3000');
});
