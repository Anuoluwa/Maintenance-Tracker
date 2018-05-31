import express from 'express';

const db = require('../db/index');

export default class User {
  static getRequests(req, res) {
    const useremail = req.body;
    const userid = req.body;
    const sql = {
      text: 'SELECT * FROM requests WHERE email = $1',
      value: [useremail],
    };
    db.query(sql, (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(response.rows);
    });
  }

  static createRequests(req, res) {
    const useremail = req.body;
    const userid = req.body.useremail;
    console.log(userid);
    console.log(useremail);
    const sql = {
      text: `INSERT INTO requests (user_id, title, operations, description, location, created) 
      VALUES($1, $2, $3, $4, $5, Now()) RETURNING *`,
      values: [
        userid,
        req.body.title,
        req.body.operations,
        req.body.description,
        req.body.location,
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

  }
  static editRequest(req, res) {

  }
}
