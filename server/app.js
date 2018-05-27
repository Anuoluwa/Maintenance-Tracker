import express from 'express';
import bodyParser from 'body-parser';
import user from './routes/user';
import request from './routes/request';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', user);
app.use('/request', request);


app.listen(4000, () => {
  console.log('app started at 3000');
});

export default app;
