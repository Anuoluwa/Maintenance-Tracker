import express from 'express';
import { Client } from 'pg';
import bodyParser from 'body-parser';
import userRouter from './routes/user';
import requestRouter from './routes/request';
import authRouter from './routes/auth';

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1/', userRouter, requestRouter, authRouter);

app.listen(3000, () => {
  console.log('app started at 3000');
});

export default app;
