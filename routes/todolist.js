var express = require('express');
var router = express.Router();
var todoListController = require('../controllers/todolist.controller');
let AUTHORIZE_MIDDLEWARE = require('../middlewares/authorization.middleware');

/* POST Create new user. */
router.get('/', AUTHORIZE_MIDDLEWARE, todoListController.test);

module.exports = router;