let todoListServer = require('../services/todolist.service');

exports.test = async (req, res) => {
    try {
        res.send("Test-SUCCESS");

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        });
    }
};