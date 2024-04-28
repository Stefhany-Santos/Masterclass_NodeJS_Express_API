const express = require('express');

const app  = express();

app.get('/tasks', (request, response) => response.status(200).send('Hello world!'));


module.exports = app;