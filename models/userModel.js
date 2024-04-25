const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type :String,
        require : [true , "the user must have a name"],
    },
    email : {
        type : String,
        require : [true , "the user must have an email"],
        unique : true,
    },
    password : {
        type : String,
        require : [true , "the user must have a password"],
    },

})

const User = mongoose.model('User',userSchema);


module.exports = User;