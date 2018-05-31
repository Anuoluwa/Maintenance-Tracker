import express from 'express';

const db = require('../db/index');

export default class User {
  static getRequests(req, res) {
    const { user_id } = req.userid;
    const sql = {
      text: 'SELECT * FROM requests WHERE user_id = $1',
      value: [req.userid],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(response.rows);
    });
  }

  static createRequests(req, res) {
    const { userid } = req.userid;
    const sql = {
      text: `INSERT INTO requests (user_id, title, operations, description, location, created, status) 
      VALUES($1, $2, $3, $4, $5, Now(), $6 ) RETURNING *`,
      values: [
        req.userid,
        req.body.title,
        req.body.operations,
        req.body.description,
        req.body.location,
        req.body.status,
      ],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(response.rows);
    });
  }

  static getRequest(req, res) {
    const { userid } = req.userid;
    const sql = {
      text: 'SELECT * FROM requests WHERE request_id=$1 AND user_id=$2',
      values: [req.params.id, req.userid],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(response.rows[0]);
    });
  }
  static editRequest(req, res) {
    const { userid } = req.userid;
    const sql = {
      text: 'UPDATE requests SET title=$1, operations=$2, description=$3, location=$4, status=$5 WHERE request_id=$6',
      values: [
        req.body.title,
        req.body.operations,
        req.body.description,
        req.body.location,
        req.body.status,
        req.params.id,
      ],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json({ message: 'Updated successfully' });
    });
  }
}
