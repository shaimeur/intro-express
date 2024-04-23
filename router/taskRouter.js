const router = require('express').Router();

const { createTask, getAllTasks, getOneTask, updateTask, deleteTask ,checkParam } = require('../controllers/taskController');

router.param('id',checkParam)
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').put(updateTask).delete(deleteTask).get(getOneTask)

module.exports = router;

