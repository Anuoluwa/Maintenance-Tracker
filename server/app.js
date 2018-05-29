import express from 'express';
import bodyParser from 'body-parser';
import index from './db';
import user from './routes/user';
import request from './routes/request';


const app = express();
const port = 9000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', request);
// app.use('/users', user);


app.listen(port, () => {
  console.log(`app started at localost ${port}`);
});

export default app;
