const express = require('express');
const { loginController, userController } = require('./controllers');
const { validateUser } = require('./middlewares');

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

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
