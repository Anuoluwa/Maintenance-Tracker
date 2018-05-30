// import express from 'express';
// const db = require('../db/index');

// const router = express.Router();


// function validUser(user) {
//   const validUsername = typeof user.username === 'string' && user.username.trim() != '';
//   const validEmail = typeof user.email === 'string' && user.email.trim() != '';
//   const validPassword = typeof user.password === 'string' && user.password.trim() != ''
// && user.password.trim().length >= 6;

//   return validUsername && validEmail && validPassword;
// }

// function uniqueEmail(email) {
//   // db queries use method

// }

// router.post('/login', (req, res) => {
//     if(validUser(req.body)) {
//       // check to see if it in db put User next line
//       .getOneByEmail(req.body.email) {
//         then(user => {
//           console.log('user', user);
//           if(user) {
//             bcrypt
//               .compare(req.body.password, user.password)
//               .then((result) => {
//                 if(result) {
//                   res.json({
//                     result
//                     message: 'Loging in...'
//                   })
//                 } else {
//                   res.json({ message: 'Invalid login' })
//                 }

//               })
//           } else {
//             res.json({ message: 'Invalid login' })
//           }
//         })
//       }
//     } else {

//     }

// });

// export default router;
