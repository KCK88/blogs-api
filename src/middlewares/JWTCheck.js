const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const checkJWT = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const token = authorization.split(' ')[1];

  try {
    const data = jwt.verify(token, JWT_SECRET);
    
    res.locals.user = data;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { checkJWT };