const { userService } = require('../services');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = (email) => emailRegex.test(email);

const validUser = async (req, res, next) => {
  try {
    const { displayName, email, password } = req.body;
    if (displayName.length < 8) {
      return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    } if (!isValidEmail(email)) {
      return res.status(400)
        .json({ message: '"email" must be a valid email' });
    } if (password.length < 6) {
      return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
    }

    next();
  } catch (error) {
    return error;
  }
};

const isUserInDB = async (req, res, next) => {
  const { displayName } = req.body;
  const registeredUser = await userService.registeredUser(displayName);
  if (registeredUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = { validUser, isUserInDB };