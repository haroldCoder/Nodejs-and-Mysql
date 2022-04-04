const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
app.set('port',3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

app.use(bodyparser.urlencoded({extended: false}));

module.exports = app;