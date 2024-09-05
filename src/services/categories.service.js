const { Category } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Category.create({ name });
  return categorie;
};

module.exports = { createCategorie };
