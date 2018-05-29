import express from 'express';
import bodyParser from 'body-parser';
import index from './db';
import user from './routes/user';
import request from './routes/request';

require('dotenv').config();

const app = express();
const port = 9000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', request);
// app.use('/users', user);
if (!module.parent) { app.listen(port); }

console.log(`Server is running at http://localhost:${port}`);

export default app;
