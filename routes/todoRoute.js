const express = require('express');

const router = express.Router();

const routeController = require('../controllers/routeController');


router.get('/api/todo', routeController.listTasks);
router.post('/api/todo', routeController.createTask);
router.delete('/api/todo/:id', routeController.deleteTask);
router.patch('/api/todo/:id', routeController.changeIsDone)


module.exports = router;

//xQXpXJxUYjZTZqJj
