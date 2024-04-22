const express = require('express');
const app = express();
const taskRouter = require('./router/taskRouter.js');


app.use(express.json());

// console.log(router);

app.get('/', (req, res) => {
    console.log('hello world!');
    res.send("hello world!");
});

app.use('/api/v1/tasks', taskRouter);



// Routes
// app.get("/tasks", getAllTasks);
// app.post("/tasks", createTask);
// app.get("/tasks/:id", getOneTask);
// app.put("/tasks/:id", updateTask);
// app.delete("/tasks/:id", deleteTask);

module.exports = app;

