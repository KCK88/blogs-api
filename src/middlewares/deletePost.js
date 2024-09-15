const { BlogPost, User } = require('../models');

const deleteValidation = async (req, res, next) => {
  const { id } = req.params;
  const userToken = res.locals.user.data.userId;

  const idFromDB = await BlogPost.findByPk(id, {
    include: 
    { model: User, as: 'user', attributes: { exclude: 'password' } },
  });
  
  if (!idFromDB) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  if (userToken !== idFromDB.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  
  next();
};

module.exports = { deleteValidation };