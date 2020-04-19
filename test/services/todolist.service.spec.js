var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var todoListService = require('../../services/todolist.service');

chai.use(chaiAsPromised);
chai.should();

describe('TodoListService', function () {
    describe('createTask', function () {
        it('Should create a new task successfully', function () {
            var newTask = {
                task: "TEST TASK - 1",
                userId: "5cbbf240-80f7-11ea-980d-8ba9667b7e93"
            };

            return todoListService.createTask(newTask).should.eventually.deep.equal("NEW_TASK_CREATED");
        });

        it('Should fail to create new task due to missing data', function () {
            var newTask = {
                task: "TEST TASK - 1"
            };

            return todoListService.createTask(newTask).should.be.rejectedWith("INSUFFICIENT_DATA");
        })
    });

    describe('getTasks', function () {
        it('Should return list of tasks for given userId', function () {
            let userId = '5cbbf240-80f7-11ea-980d-8ba9667b7e93';

            return todoListService.getTasks(userId).should.eventually.have.lengthOf(4);
        });
    });

    describe('markAsDone', function () {
        it('Should update given task as done', async function () {
            let userId = '5cbbf240-80f7-11ea-980d-8ba9667b7e93';
            let tasks = await todoListService.getTasks(userId)
            let firstTaskId = tasks[0]._id;
            return todoListService.markAsDone(firstTaskId).should.eventually.have.property('done').equal(true);
        });
    });

    describe('markAsDeleted', function () {
        it('Should update given task as deleted', async function () {
            let userId = '5cbbf240-80f7-11ea-980d-8ba9667b7e93';
            let tasks = await todoListService.getTasks(userId);
            let firstTaskId = tasks[0]._id;

            return todoListService.markAsDeleted(firstTaskId).should.eventually.have.property('deleted').equal(true);
        });
    });
});