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

var userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, shardedSchema);

module.exports = mongoose.model('User', userSchema);