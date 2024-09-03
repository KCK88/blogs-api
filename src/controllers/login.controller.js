const jwt = require('jsonwebtoken');
const loginService = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const reqBody = (username, password) => username && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!reqBody(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const userLogin = await loginService.login(email, password);
    console.log(userLogin);
  
    if (userLogin === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

    const token = jwt.sign({ data: { userId: userLogin.id } }, secret, jwtConfig);

    res.status(200).json({ token }); 
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno error: err.message' });
  }
};

module.exports = { login };