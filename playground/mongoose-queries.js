const {ObjectID} = require('mongoose');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

// var id = '5c774919337e902ed01b94c611';

// if(!ObjectID.isValid(id)){
//     return console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => {
//     console.log(e);
// });

//User.findById
//Query works but no user
//user were found
//print error to screens

var id = '5c7203f434a5381cb83fd41d';

user.find({
    _id: id
}).then((users) => {
    console.log('Users', users);
}).catch((e) => {
    console.log(e);
});

user.findOne({
    _id: id
}).then((user) => {
    if(!user){
        return console.log('1 User with ID not found');
    }
    console.log('Users find one', user);
}).catch((e) => {
    console.log('Error with grabbing one user', e); 
});

user.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User by ID', user);
}).catch((e) => {
    console.log('Error with grabbing user by ID', e);
});

