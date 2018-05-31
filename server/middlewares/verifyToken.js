import jwt from 'jsonwebtoken';

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  console.log(bearerHeader);
  jwt.verify(bearerHeader, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.usermail = decoded.email;
    req.userid = decoded.id;
    console.log(req.usermail);
    console.log(req.userid);
    next();
  });
}
export default verifyToken;
