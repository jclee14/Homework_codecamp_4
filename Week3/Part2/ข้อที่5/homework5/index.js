const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const userService = require('./services/user');
const todoService = require('./services/todo');
const userTodoService = require('./services/user_todo');
const app = express();

app.use(bodyParser.urlencoded({
    exteneded: false
}));

app.use(bodyParser.json());

db.sequelize.sync({ force: false }).then(() => {
    userService(app, db);
    todoService(app, db);
    userTodoService(app, db);

    app.listen(8080, () =>
        console.log('Server is running'));
});