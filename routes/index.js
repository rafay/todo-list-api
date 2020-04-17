var express = require('express');
var router = express.Router();
var ToDoList = require('../db_models/todo-list.schema');

/* GET home page. */
router.get('/', function (req, res, next) {
  try{
    /*let newTodoItem = {
      task: "Testing Task",
      userId: "1234"
    };

    let result = new ToDoList(newTodoItem).save();*/
    res.send("Server running.");
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error
    });
  }
});

module.exports = router;
