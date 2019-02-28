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

//GET /todos/{id}
app.get('/todos/:id', (req, res) => {
    var objectId = require('mongodb').ObjectID;
    var id = req.params.id;

    if(!objectId.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch((e) => {
        return res.status(400).send();
    });
    //Have a valid id - if not pass back 404 send back empy boody
    //findbyid 
        //Success
            //if todo - send it back 
            //if no todo - send back 404 with empty body
        //error
            //400 - request was not valid - going to send empty body
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};