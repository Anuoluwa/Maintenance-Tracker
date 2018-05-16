import express from 'express';
import bodyParser from 'body-parser';
import requests from './models/db';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/requests', (request, response) => {
  if (!requests) {
    response.status(404).json({ message: 'No contacts found' });
  }
  response.json(requests);
});

if (!module.parent) { app.listen(port); }
console.log(`Server is running at http://localhost:${port}`); // eslint-disable-line no-console

export default app;
