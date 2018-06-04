const express = require('express');
const app = express();
const pug = require('pug');
//import models from './models/index.js';
const models = require('./models');

app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('template')
})

models.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Hi Mimi! Your Server listening on port 3000');
  });
});