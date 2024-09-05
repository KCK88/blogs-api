const { categoriesService } = require('../services');

const createCategorie = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const categorie = await categoriesService.createCategorie(name);
  return res.status(201).json(categorie);
};

const listCategories = async (_req, res) => {
  const categoriesList = await categoriesService.listCategories();
  return res.status(200).json(categoriesList);
};

module.exports = { createCategorie, listCategories };
