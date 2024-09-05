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

const listUsers = async () => {
  const userList = await User.findAll();
  const formattedUserList = userList.map((user) => ({
    id: user.id, // Supondo que o campo id existe no objeto user
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  }));
  return formattedUserList;
};

module.exports = { createUser, registeredUser, listUsers };
