const express=require('express');
const app=express();
const connectDB=require('./db/connection');
require('dotenv').config();
const taskRouter=require('./route/task-route');
app.use(express.urlencoded({
    extended:false
}));

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("welcome")
})
app.use('/api/tasks',taskRouter);

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(4000,(err,response)=>{
            if(err)
                console.log(err);
            console.log("port running at 4000");
        });

}catch(error){
    console.log(error);
};
}
start();