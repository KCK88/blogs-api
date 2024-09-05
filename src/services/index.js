const userService = require('./user.service');
const categoriesService = require('./categories.service');
const { loginService } = require('./login.service');

module.exports = { loginService, userService, categoriesService };