const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const instructorService = require('./services/instructor');
const app = express();

app.use(bodyParser.urlencoded({
    exteneded: false
}));

app.use(bodyParser.json());

db.sequelize.sync({ force: false }).then(() => {
    instructorService(app, db);

    app.listen(8080, () =>
        console.log('Server is running'));
});