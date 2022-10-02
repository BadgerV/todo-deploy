require('../models/db');
const { trusted } = require('mongoose');
const Todo = require('../models/todo');


exports.listTasks = async(req, res) => {

    try {
        const todos = await Todo.find({});
        res.json(todos);
    } catch (err) {
        res.status(400).json({message : err})
    }   
}


exports.createTask = async (req, res) => {
    const newTodo = new Todo({
        id : req.body.id,
        task: req.body.task,
        time : req.body.time,
        isDone : req.body.isDone
    });

    try {
        await newTodo.save()
        res.json(newTodo)

    } catch (error) {
        res.status(400).json({ message : error})

    }
}

exports.changeIsDone = async (req, res) => {
    let paramID = req.params.id;

    try {
        const data = await Todo.findOneAndUpdate({ id: paramID }, {isDone : req.body.setIsDone})
        res.json(data)
    } catch (error) {
        res.status(400).json({message : error})
    }

}

exports.deleteTask = async (req, res) => {
    let paramID = req.params.id;
    try {
        const data = await Todo.deleteOne({ id: paramID })
        res.json(data)
    } catch (error) {
        res.status(400).json({message : error})
    }
}