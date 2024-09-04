const { User } = require('../models');

const createUser = (displayName, email, password, image) => User.create({
  displayName,
  email,
  password,
  image,
});
const registeredUser = async (displayName) => {
  const userLogin = await User.findOne({ where: { displayName } });
  
  return userLogin;
};

module.exports = { createUser, registeredUser };
