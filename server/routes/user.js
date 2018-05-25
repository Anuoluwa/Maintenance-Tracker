import express from 'express';
import { Client } from 'pg';

import lookupUser from '../middlewares/lookupUser';

const pg = require('pg');

const client = new Client('postgres://aptserver:anuoluwa@localhost/maintrackerdb');


const userRouter = express.Router();

userRouter.get('/users/requests', (req, res) => {

});
userRouter.get('/users/requests/requestId', lookupUser, (req, res) => {

});
userRouter.post('/users/requests', (req, res) => {
  const sql = 'INSERT INTO user_tbl (user_id, title, descrptn, department) VALUES ($1,$2,$3,$4) RETURNING id';
  // Retrieve the data to insert from the POST body
  const data = [
    req.body.title,
    req.body.descrptn,
    req.body.department,
  ];
  client.query(sql, data, (err, result) => {
    if (err) {
      // shield our clients from internal errors, but log them
      console.error(err);
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to create user'],
      });
    }
    const newUserId = result.rows[0].id;
    const sql2 = 'SELECT * FROM photo WHERE id = $1';
    client.query(sql2, [newUserId], () => {
      if (err) {
        // We shield our clients from internal errors, but log them
        console.error(err);
        res.statusCode = 500;
        return res.json({
          errors: ['Could not retrieve photo after create'],
        });
      }
      // The request created a new resource object
      res.statusCode = 201;
      // The result of CREATE should be the same as GET
      res.json(result.rows[0]);
    });
  });
});

export default userRouter;
