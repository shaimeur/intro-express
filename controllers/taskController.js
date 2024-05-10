const fs  = require("fs")
const Task = require("../models/taskModel")


// param middle ware


const checkParam = (req,res,next,val)=>{

    console.log(val)


    next()

}

const getAllTasks =  async (req,res)=>{
    //  console.log(req)
        try {
            const tasks =  await Task.find()
            // console.log(tasks)
            res.status(200).json({
                status : 'success',
                data : {
                    tasks,
                    message : 'all tasks'
                }
            })
        } catch (error) {
            res.status(404).json({
                status : 'fail',
                message : "not found"
            })
        }

    // try {
    //     console.log('===>')
    //     fs.readFile(`${__dirname}/../task.json`,(err,data)=>{
    //         if(err) return err

    //         console.log(JSON.parse(data))

    //         res.status(200).json({
    //             data : JSON.parse(data)
    //         })})
    //         console.log('===>')
    //     } catch (error) {
    //         console.log(error)
    //     }
    }

const  getOneTask = async (req,res)=>{

    try {
        const id = req.params.id

        const task = await Task.findById(id)

        res.status(200).json({
            status : "success",
            data : {
                task
            }
        })
    } catch (error) {
        res.status(500).json({
            status : "fail",
            message : "user not found"
        })
    }


    // const id = +req.params.id
    // fs.readFile(`${__dirname}/../task.json`,(err,data)=>{
    //     if(err) return err
    //     const myData = JSON.parse(data)
    //     console.log(myData)
    //    const result =  myData.find(item => item.id === id)
    //  res.status(200).json({
    //     result
    //  })
    // })

}

const createTask =  async (req,res)=>{

        try {
                const {task , complete} = req.body
                const newTask = {
                    task,
                    complete
                }
                const addedTask = await Task.create(newTask)
                res.status(201).json({
                    status : "succes",
                    data : {
                        addedTask
                    }
                })
        } catch (error) {
                res.status(500).json({
                    status : "fail",
                    message : console.log(error)
                })
        }


    // const task = req.body.task
    // const id = Math.floor(Math.random() * 1000)

    // const newTask  = {
    //     id: id ,
    //     task : task
    // }
    // console.log('===>',newTask)
    // fs.readFile(`${__dirname}/../task.json`,(err,data)=>{
    //     if (err) return err

    //     console.log(JSON.parse(data))

    //     const newData = [...JSON.parse(data),newTask]

    //     // console.log('===newData',newData)

    //     fs.writeFile(`${__dirname}/../task.json`,JSON.stringify(newData),(err)=>{
    //         if(err) return err
    //         res.status(201).json({
    //             result : JSON.stringify(newData)
    //         })
    //     })
    // })
}

const updateTask =  async (req,res)=>{

    try {

        const id = req.params.id
        const {task,complete} = req.body

        const updatedTask = {
            task,
            complete
        }

        const newUpdatedTask = await Task.findByIdAndUpdate(id,updatedTask)

        if(!updatedTask){
            return res.status(400).json({
                status : "fail",
                message : "user not found!!"
            })
        }

        res.status(200).json({
            status : "success",
            data : {
                newUpdatedTask
            }
        })


    } catch (error) {
            res.status(500).json({
                status : "fail",
                message : console.log(error)
            })
    }


    // const id = req.params.id

    // res.end("done")
}

const deleteTask = async (req,res)=>{

    try {
        const id = req.params.id


        const deletedTask = await Task.findOneAndDelete(id)
        res.status(204).json({
            status : "success",
            message : "task deleted!!",
            deleteTask
        })
    } catch (error) {
        res.status(500).json({
            status : 'fail',
            message : "task not found",
            deletedTask
        })
    }

//     const id = +req.params.id
//     fs.readFile(`${__dirname}/../task.json`,(err,data)=>{
//     if(err) return err
//     const myData = JSON.parse(data)
//     console.log(myData)
//     const result = myData.filter(item => item.id !== id)

//     fs.writeFile(`${__dirname}/../task.json`,JSON.stringify(result),err =>{
//         if(err) return err
//         res.status(200).json({
//             result
//          })
//     })
// })

}

module.exports = {deleteTask,getAllTasks,updateTask,getOneTask,createTask ,checkParam}