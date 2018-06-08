import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import user from './routes/user';
import index from './db';
import auth from './routes/auth';
import request from './routes/request';
import swaggerDocument from '../swagger.json';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('api/v2/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('api/v2/auth', auth);
app.use('api/v2/', request);
app.use('api/v2/users', user);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
