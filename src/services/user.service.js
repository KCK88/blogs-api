const { User } = require('../models');

const createUser = (displayName, email, password, image) => User.create({
  displayName,
  email,
  password,
  image,
});
const registeredUser = async (email) => {
  const userLogin = await User.findOne({ where: { email } });
  
  return !!userLogin;
};

module.exports = { createUser, registeredUser };
