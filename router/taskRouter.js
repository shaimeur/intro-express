const router = require('express').Router();

const { createTask, getAllTasks, getOneTask, updateTask, deleteTask } = require('../controllers/taskController');


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').put(updateTask).delete(deleteTask).get(getOneTask)

module.exports = router;

