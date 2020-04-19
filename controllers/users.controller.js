let userService = require('../services/users.service');

function UsersController() {
    createUser = async (req, res) => {
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

    authenticateUser = async (req, res) => {
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

    return {createUser, authenticateUser};
};

module.exports = UsersController();