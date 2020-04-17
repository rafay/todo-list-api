var express = require('express');
var router = express.Router();
var userController=require('../controllers/users.controller');

/* POST Create new user. */
router.post('/', userController.createUser);

/* POST Authenticate. */
router.post('/login', userController.authenticateUser);

module.exports = router;