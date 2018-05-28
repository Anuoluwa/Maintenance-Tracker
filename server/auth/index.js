import express from 'express';

const router = express.Roueter();

router('/', (req, res) => {

});

function validUser(user) {
  const validEmail = typeof user.email === 'string' && user.email.trim() != '';
  const validPassword = typeof user.password === 'string' && user.password.trim() != '' && user.password.trim().length >= 6;
}
router.post('/signup', (req, res, next) => {
  if (validUser(req.body)) {
    // User
    //   .uniqueEmail(req.body.email)
    //   .then((user) => {
    //     console.log('user', user);
    // if (!user) {
    //   // this is in unique email
    // hash password
    bcrypt.hash(res.body.password, 10)
      .then((hash) => {
        // insert user into db create the function in the db
        const user = {
          email: req.body.email,
          password: hash,
          created: new Date(),
        };
        // function created in db
        user
          .create(user) // function created in db
          .then((id) => {
            res.json({
              id,
              message: '',
            });
          });
        // redirect
      });

    //   res.json({
    //     user,
    //     message: '',
    //   });

    // } else {
    //   // email in use
    // }

    //     res.json({ message: '' });
    //   });
  } else {
    next(res.json({
      message: 'Invalid User',
      error: 403,
    }));
  }
});

function uniqueEmail(email) {
  // db queries use method

}

router.post('/login', (req, res) => {
    if(validUser(req.body)) {
      // check to see if it in db
      User 
      .getOneByEmail(req.body.email) {
        then(user => {
          console.log('user', user);
          if(user) {
            bcrypt
              .compare(req.body.password, user.password)
              .then((result) => {
                if(result) {
                  res.json({
                    result, 
                    message: 'Loging in...'
                  })
                } else {
                  res.json({ message: 'Invalid login' })
                }
               
              })
          } else {
            res.json({ message: 'Invalid login' })
          }
        })
      }
    } else {

    }

});

export default router;
