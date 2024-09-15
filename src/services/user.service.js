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
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  }));
  return formattedUserList;
};

const findUser = async (id) => {
  const user = await User.findByPk(id);
  if (user === null) { return null; }
  const formattedUser = {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  };
  return formattedUser;
};

const deleteMe = async (id) => {
  const deleted = await User.destroy({
    where: {
      id,
    },
  });
  return deleted;
};

module.exports = {
  createUser,
  registeredUser,
  listUsers,
  findUser,
  deleteMe,
};
