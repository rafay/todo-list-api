var express = require('express');
var router = express.Router();
var todoListController = require('../controllers/todolist.controller');
let AUTHORIZE_MIDDLEWARE = require('../middlewares/authorization.middleware');

/* POST Create new Task. */
router.post('/', AUTHORIZE_MIDDLEWARE, todoListController.createTask);

/* GET all tasks for user */
router.get('/all', AUTHORIZE_MIDDLEWARE, todoListController.getTasks);

/* PUT Mark a task as done */
router.put('/done/:taskId', AUTHORIZE_MIDDLEWARE, todoListController.markAsDone);

/* DEKETE Mark a task as deleted */
router.delete('/delete/:taskId', AUTHORIZE_MIDDLEWARE, todoListController.markAsDeleted);

module.exports = router;