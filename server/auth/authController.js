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
      if (err) {
        throw err;
      }
      res.json({
        token,
      });
    });
  }
  static login(req, res) {
    const sql = {
      text: 'SELECT * FROM users WHERE email = $1 ',
      values: [req.body.email],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password, response.rows[0].password);
      if (req.body.email == response.rows[0].email && passwordIsValid) {
        const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY, {
          expiresIn: 86400,
        });
        res.status(200).send({ auth: true, token });
      } else if (req.body.email !== response.rows[0].email || !passwordIsValid) {
        return res.status(404).send({ auth: false, token: null });
      }
    });
  }
}
