const mongoose=require("mongoose");
const connectionString="mongodb+srv://admin123:admin123@projects.ukqkx.mongodb.net/TaskManager?retryWrites=true&w=majority"
 
// const connection=mongoose.connect(connectionString).then(()=>{
//     console.log('connected');
// }).catch((error)=>{
//     console.log(error);
// })
const connectDB=async(URL)=>{
    return mongoose.connect(URL);
}




module.exports=connectDB;