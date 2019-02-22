// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true},  (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Users').deleteMany({location: 'Raleigh, NC'}).then((result) => {
    //     console.log(result);
    // });

    //find and delete
    db.collection('Users').find({name: 'Steve'}).toArray().then((docs) => {
        db.collection('Users').findOneAndDelete({_id: docs[0]._id}).then((result) => {
            console.log(result);
        });
    });

    // client.close();
});