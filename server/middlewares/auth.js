// import express from 'express';
import jwt from 'jsonwebtoken';
// import app from '../app';


// for user route
function login(req, res) {
  const user = {
    id: 1,
    username: 'admin',
    email: 'admin@gmail.com',
  };
  jwt.sign({ user }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
    res.json({
      token,
    });
  });
}


export default login;

