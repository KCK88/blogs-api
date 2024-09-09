const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtCreate = (userLogin) => {
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };  
  const token = jwt.sign({ data: { userId: userLogin.id } }, secret, jwtConfig);
  return token;
};
module.exports = {
  jwtCreate,
};
