const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result)
});

Todo.findOneAndRemove({_id: 'dfasdf43rkn4'}).then((todo) => {
    console.log(todo);
});

Todo.findById('dfjsdklfj43rjld').then((todo) => {
    console.log(todo);
});