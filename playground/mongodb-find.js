// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return is used to stop the function if error
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to Mongo DB server');

    db.collection('Users').find({name: 'Javier'}).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to count users', err);
    });

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.close();
});