let todoListService = require('../services/todolist.service');

exports.createTask = async (req, res) => {
    try {
        let taskData = req.body;
        taskData["userId"] = req.user ? req.user.userId : null;

        let response = await todoListService.createTask(taskData);
        res.send(response);

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        });
    }
};

exports.getTasks = async (req, res) => {
    try {
        let userId = req.user ? req.user.userId : null;
        let response = await todoListService.getTasks(userId);
        res.send(response);

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        });
    }
};

exports.markAsDone = async (req, res) => {
    try {
        let taskId = req.params["taskId"];

        let response = await todoListService.markAsDone(taskId);
        res.send(response);

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        });
    }
};

exports.markAsDeleted = async (req, res) => {
    try {
        let taskId = req.params["taskId"];

        let response = await todoListService.markAsDeleted(taskId);
        res.send(response);

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        });
    }
};