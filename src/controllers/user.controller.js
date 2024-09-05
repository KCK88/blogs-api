const { jwtCreate } = require('../middlewares/JWT');
const { userService } = require('../services');

const insertUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await userService.createUser(displayName, email, password, image);
  const token = jwtCreate({ displayName, email, password, image });

  return res.status(201).json({ token });
};

const listUsers = async (_req, res) => {
  const userList = await userService.listUsers();
  return res.status(200).json(userList);
};

module.exports = { insertUser, listUsers };