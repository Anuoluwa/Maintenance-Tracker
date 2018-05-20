import jwt from 'jsonwebtoken';

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

