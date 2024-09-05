const express = require('express');
const { loginController, userController, categoriesController } = require('./controllers');
const { validateUser, CheckJWT } = require('./middlewares');

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
app.get('/user', CheckJWT, userController.listUsers);
app.get('/user/:id', CheckJWT, userController.findUser);

app.post('/categories', CheckJWT, categoriesController.createCategorie);
app.get('/categories', CheckJWT, categoriesController.listCategories);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
