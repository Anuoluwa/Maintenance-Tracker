import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import app from '../app';


const db = require('../db/index');

const router = express.Router();

export default class Auth {
  static signUp(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const sql = {
      text: 'INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *',
      values: [req.body.username, req.body.email, hashedPassword],
    };
    db.query(sql, (err, response) => {
      if (err) {
        return res.status(500).json({ message: 'Email and username already taken' });
      }
      return res.status(200).json(response.rows[0]);
    });
  }
  static login(req, res) {
    const sql = {
      text: 'SELECT * FROM users WHERE email = $1 ',
      values: [req.body.email],
    };
    db.query(sql, (err, response) => {
      if (err) {
        // throw err;
        return res.json({ message: 'Email and password do not exist, please sign up' });
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password, response.rows[0].password);
      if (req.body.email !== response.rows[0].email || !passwordIsValid) {
        return res.status(404).send({ auth: false, token: null, message: 'Unauthorized! Invalid email or password' });
      }
      if (req.body.email == response.rows[0].email && passwordIsValid) {
        const token = jwt.sign(
          { id: response.rows[0].user_id, email: req.body.email }, process.env.SECRET_KEY,
          {
            expiresIn: 86400,
          },
        );
        res.status(200).send({ auth: true, token, message: 'Copy and keep token for protected endpoints' });
      } else {
        return res.json({ message: 'Email and password do not exist, please sign up' });
      }
      // if (req.body.email !== response.rows[0].email || !passwordIsValid) {
      //   return res.status(404).send({ auth: false, token: null, message: 'Unauthorized'});
      // }
    });
  }
}
