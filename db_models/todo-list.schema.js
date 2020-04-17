let mongoose = require('mongoose');
let {
    DateTime
} = require('luxon');

let shardedSchema = {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'modified'
    }
};

var todoListSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        required: true
    }
}, shardedSchema);

module.exports = mongoose.model('ToDoList', todoListSchema);