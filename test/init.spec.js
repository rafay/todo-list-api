//const {MongoMemoryServer} = require('mongodb-memory-server');
const mongoUnit = require('mongo-unit');
const config = require('config');
var mongoose = require('mongoose');
var testData = require('./test_data');
const Users = require('../db_models/user.schema');
const TodoList = require('../db_models/todo-list.schema');
mongoose.Promise = Promise;

mongoUnit.start().then(() => {
    console.log('fake mongo is started: ', mongoUnit.getUrl());
    process.env.DATABASE_URL = mongoUnit.getUrl(); // this var process.env.DATABASE_URL = will keep link to fake mongo
    mongoose.connect(process.env.DATABASE_URL);
    run() // this line start mocha tests
});

before(() => {
    console.log('LOADING TEST DATA');
    Users.insertMany(testData.users);
    TodoList.insertMany(testData.todolists);
});

after(() => {
    mongoose.disconnect();
    return mongoUnit.stop()
});