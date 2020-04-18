var express = require('express');
var router = express.Router();
var ToDoList = require('../db_models/todo-list.schema');

/* GET home page. */
router.get('/', function (req, res, next) {
  try{
    res.send("Server running on port: 3000.");
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error
    });
  }
});

module.exports = router;
