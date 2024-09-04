const { jwtCreate } = require('../middlewares/JWT');
const { userService } = require('../services');

const insertUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await userService.createUser(displayName, email, password, image);
  const token = jwtCreate({ displayName, email, password, image });

  return res.status(201).json({ token });
};

module.exports = { insertUser };