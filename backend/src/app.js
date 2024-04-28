const express = require('express');
const router = require('./router');

const app  = express();

app.get('/tasks', (request, response) => response.status(200).send('Hello world!'));
app.use(router);

module.exports = app;