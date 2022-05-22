const express=require('express');
const router=express.Router();
const {getAlltask,createTask, singleTask,updateTask,deleteTask}=require('../controller/tsk-controller')


router.route('/').get(getAlltask).post(createTask);
router.route('/:id').get(singleTask).patch(updateTask).delete(deleteTask);




module.exports=router;