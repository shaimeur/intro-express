
const mongoose = require('mongoose');
require('dotenv').config({path:"../config.env"});


const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);


const dbConnection =  async ()=>{
    try {
      await  mongoose.connect(DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    console.log('the database is connected')

    } catch (error) {
    console.log(error,'the database is not connected')
    }
}

// mongoose.connect(DB,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log('the database is connected')
// }).catch((err)=>{
//     console.log(err,'the database is not connected')
// })

module.exports = {dbConnection};