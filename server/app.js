import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import index from './models/index';
import user from './routes/user';
import request from './routes/request';

const conString = 'postgres://fmlaewzf:5bho1VnanYoL9IEUHogtc9SQUhwuJ5Ns@stampy.db.elephantsql.com:5432/fmlaewzf';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', user);
app.use('/requests', request);


app.listen(3000, () => {
  console.log('app started at 3000');
});

export default app;
