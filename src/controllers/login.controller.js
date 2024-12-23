const { loginService } = require('../services');
const { jwtCreate } = require('../middlewares');

const reqBody = (username, password) => username && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!reqBody(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const userLogin = await loginService(email, password);

    if (userLogin === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
 
    const token = jwtCreate(userLogin);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: `Erro interno error: ${err.message}` });
  }
};

module.exports = { login };