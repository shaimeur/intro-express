const mongoose = require('mongoose');

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

module.exports = Task;