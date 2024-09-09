const express = require('express');
const {
  loginController, 
  userController,
  categoriesController,
  blogPostController,
} = require('./controllers');
const { validateUser, checkJWT } = require('./middlewares');

const { isUserInDB, validUser } = validateUser;
// ...

const app = express();

// não remova ou mova esse endpoint.
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginController.login);

app.post('/user', validUser, isUserInDB, userController.insertUser);
app.get('/user', checkJWT, userController.listUsers);
app.get('/user/:id', checkJWT, userController.findUser);

app.post('/categories', checkJWT, categoriesController.createCategorie);
app.get('/categories', checkJWT, categoriesController.listCategories);

app.post('/post', checkJWT, blogPostController.createPost);
app.get('/post', checkJWT, blogPostController.listPosts);
app.get('/post/:id', checkJWT, blogPostController.listPosts);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
