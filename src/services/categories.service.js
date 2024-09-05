const { Category } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Category.create({ name });
  return categorie;
};

const listCategories = async () => {
  const categoriesList = await Category.findAll();
  return categoriesList;
};

module.exports = { createCategorie, listCategories };
