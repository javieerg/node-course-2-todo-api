const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return is used to stop the function if error
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to Mongo DB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c9123297fe809482aacba5c')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});