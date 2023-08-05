const express = require('express')
const { createTask,gettasks, getsingle, updatetask, deletetask } = require('../cotrollers/taskcontroller')

const router=express.Router()



router.post('/',createTask);
router.get('/',gettasks);
router.get('/:id',getsingle);
router.put('/e-tasks/:id',updatetask);
router.delete('/:id',deletetask);


module.exports = router;