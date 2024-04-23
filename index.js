const express = require('express');
const app = express();
const taskRouter = require('./router/taskRouter.js');


app.use(express.json());

// console.log(router);

app.get('/', (req, res) => {
    console.log('hello world!');
    res.send("hello world!");
});

// middleware



app.get('/api/v1/tasks', (req, res,next) => {
    console.log('hello from the middleware');
    next();
})

// app.param('val',(req,res,next,val)=>{
//     console.log(val)
//     next();
// })

app.get('/api/v1/tasks', (req, res,next) => {
    req.responseTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    console.log("the time is :",req.responseTime)
    next();
})


app.use('/api/v1/tasks',taskRouter);



// Routes
// app.get("/tasks", getAllTasks);
// app.post("/tasks", createTask);
// app.get("/tasks/:id", getOneTask);
// app.put("/tasks/:id", updateTask);
// app.delete("/tasks/:id", deleteTask);

module.exports = app;

