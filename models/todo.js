const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schema for todo 
const TodoSchema = new Schema({
    id: {
        type: Number,
        required : true
    },
    task: {
        type: String,
        required: true
    },
    time: {
        type: String
    },
    isDone: {
        type: Boolean,
        default : false
    }
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;