var mongoose = require('mongoose');

mongoose.Promise = global.Promise;//Will allow promises everywhere
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {
    mongoose: mongoose
};