const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());//Provides middleware to express for parsing json

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((docs) => {
        res.send(docs);
    }, (e) => {
        res.status(400).send(e);
    });

    console.log(req.body);
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};