const userService = require('./user.service');
const categoriesService = require('./categories.service');
const blogPostService = require('./blogPost.service');
const { loginService } = require('./login.service');

module.exports = { loginService, userService, categoriesService, blogPostService };