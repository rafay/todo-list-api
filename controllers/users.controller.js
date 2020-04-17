let userService = require('../services/users.service');

exports.createUser = async (req, res) => {
    try {
        let userData = req.body;

        let response = await userService.createUser(userData);

        res.send(response);

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        });
    }
};

exports.authenticateUser = async (req, res) => {
    try {
        let userData = req.body;

        let response = await userService.authenticate(userData);

        res.send({
            success: true,
            auth_token: response
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        });
    }
};