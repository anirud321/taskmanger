const getAlltask=(req,res)=>{
    res.send("Get all Tasks")
}
const createTask=(req,res)=>{
    res.send("create Single Task");
}
    
const singleTask=(req,res)=>{
    res.send("Get Single Task");
}
const updateTask=(req,res)=>{
    res.send({
        task_id:req.params.id,
        Updtaed:true
    }) 
};
const deleteTask=(req,res)=>{
    res.send("Delete Task")
}
module.exports={getAlltask,createTask, singleTask,updateTask,deleteTask}
