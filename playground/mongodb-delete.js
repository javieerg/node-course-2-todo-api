// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return is used to stop the function if error
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to Mongo DB server');

    // delete Many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // delete One
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // find one and delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
    // db.close();
});