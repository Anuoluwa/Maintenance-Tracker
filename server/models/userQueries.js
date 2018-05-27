// import promise from 'bluebird';

// const pgp = require('pg-promise')();

// // const db = pgp('postgres://aptserver:anuoluwa@localhost:5432/maintrackerdb');


// db.one('SELECT $1 AS value', 123)
//   .then((data) => {
//     console.log('DATA:', data.value);
//   })
//   .catch((error) => {
//     console.log('ERROR:', error);
//   });

// export default class Request {
//   static getRequests(req, res, next) {
//     db.any('SELECT * FROM users WHERE user_id = $1')
//       .then((data) => {
//         res.status(200)
//           .json({
//             status: 'success',
//             data,
//             message: 'Retrieve all users',
//           });
//       })
//       .catch(err => next(err));
//   }

//   static getRequest(req, res) {

//   }
//   static createRequest(req, res) {

//   }
// }
