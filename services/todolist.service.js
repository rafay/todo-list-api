const TodoList = require('../db_models/todo-list.schema');
const {v1} = require('uuid');

exports.createTask = (todoItem) => {
    return new Promise((resolve, reject) => {
        try {
            if (todoItem.task && todoItem.userId) {
                let newTask = {
                    task: todoItem.task,
                    userId: todoItem.userId
                }

                new TodoList(newTask)
                    .save()
                    .then((savedData) => {
                        resolve("NEW_TASK_CREATED");
                    })
                    .catch((error) => {
                        console.error(`ERROR: ${error}`);
                        reject("INTERNAL_SERVER_ERROR");
                    });
            } else {
                reject("INSUFFICIENT_DATA");
            }
        } catch (error) {
            console.error(`ERROR: ${error}`);
            reject("INTERNAL_SERVER_ERROR");
        }
    });
};

exports.getTasks = (userId) => {
    return new Promise((resolve, reject) => {
        try {
            TodoList.find({
                userId: userId,
                deleted: false
            })
                .lean()
                .then((tasks) => {
                    resolve(tasks);
                })
                .catch(err => {
                    console.error(`ERROR: ${error}`);
                    reject("INTERNAL_SERVER_ERROR");
                })
        } catch (error) {
            console.error(`ERROR: ${error}`);
            reject("INTERNAL_SERVER_ERROR");
        }
    });
};

exports.markAsDone = (taskId) => {
    return new Promise((resolve, reject) => {
        try {
            TodoList.findByIdAndUpdate({_id: taskId}, {done: true}, {new: true})
                .lean()
                .then((task) => {
                    resolve(task);
                })
                .catch(err => {
                    console.error(`ERROR: ${err}`);
                    reject("INTERNAL_SERVER_ERROR");
                })
        } catch (error) {
            console.error(`ERROR: ${error}`);
            reject("INTERNAL_SERVER_ERROR");
        }
    });
};

exports.markAsDeleted = (taskId) => {
    return new Promise((resolve, reject) => {
        try {
            TodoList.findByIdAndUpdate({_id: taskId}, {deleted: true}, {new: true})
                .lean()
                .then((task) => {
                    resolve(task);
                })
                .catch(err => {
                    console.error(`ERROR: ${err}`);
                    reject("INTERNAL_SERVER_ERROR");
                })
        } catch (error) {
            console.error(`ERROR: ${error}`);
            reject("INTERNAL_SERVER_ERROR");
        }
    });
};