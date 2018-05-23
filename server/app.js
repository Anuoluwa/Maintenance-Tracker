import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/route';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1/', router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
