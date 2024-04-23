const mongoose = require('mongoose');
require('dotenv').config({path:"./config.env"});
const port = process.env.PORT ;
// const host = '127.0.0.1';
const host = process.env.HOST;
const  app = require('./index.js')


const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('the database is connected')
}).catch((err)=>{
    console.log(err,'the database is not connected')
})


const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:[true,'please provide the task'],
        unique:true
    },
    completed:{
        type:Boolean,
        default:false
    }

})

const Task = mongoose.model('Task',taskSchema)

    const newTask = new Task({
        task: 'go to the gym',
        completed: true
    })


    newTask.save().then(()=>{
        console.log('the task is saved')
    }).catch((err)=>{
        console.log(err)
    })




app.listen(port, host, () => {
    console.log(`the server is running on http://${host}:${port}`);
});

