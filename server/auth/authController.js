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
      text: 'INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING user_id, email',
      values: [req.body.username, req.body.email, hashedPassword],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200);
    });

    jwt.sign({ email: req.body.email }, process.env.SECRET_KEY, { expiresIn: '2days' }, (err, token) => {
      console.log(req.body.email, ' ', process.env.SECRET_KEY, token);
      if (err) {
        console.log(err);
      }
      res.json({
        token,
      });
    });

  // res.status(200).send({ auth: true, token }).json({ message: 'Successful!' });
  }
}
// function validUser(user) {
//   const validUsername = typeof user.username === 'string' && user.username.trim() != '';
//   const validEmail = typeof user.email === 'string' && user.email.trim() != '';
//  const validPassword = typeof user.password === 'string' && user.password.trim() != ''
// && user.password.trim().length >= 6; return validUsername && validEmail && validPassword; }
