const validateUser = require('./validateUser');
const { jwtCreate } = require('./JWT');
const { checkJWT } = require('./JWTCheck');
const checkPost = require('./categoriesValidation');
const { validatePostFields } = require('./updatePost');

module.exports = { validateUser, jwtCreate, checkJWT, checkPost, validatePostFields };
