const fs  = require("fs")

// param middle ware


const checkParam = (req,res,next,val)=>{

    console.log(val)


    next()

}

const getAllTasks =  (req,res)=>{
    //  console.log(req)
    try {
        console.log('===>')
        fs.readFile(`${__dirname}/../task.json`,(err,data)=>{
            if(err) return err

            console.log(JSON.parse(data))

            res.status(200).json({
                data : JSON.parse(data)
            })})
            console.log('===>')
        } catch (error) {
            console.log(error)
        }
    }

const  getOneTask = (req,res)=>{
    const id = +req.params.id
    fs.readFile(`${__dirname}/../task.json`,(err,data)=>{
        if(err) return err
        const myData = JSON.parse(data)
        console.log(myData)
       const result =  myData.find(item => item.id === id)
     res.status(200).json({
        result
     })
    })

}

const createTask = (req,res)=>{
    const task = req.body.task
    const id = Math.floor(Math.random() * 1000)

    const newTask  = {
        id: id ,
        task : task
    }
    console.log('===>',newTask)
    fs.readFile(`${__dirname}/../task.json`,(err,data)=>{
        if (err) return err

        console.log(JSON.parse(data))

        const newData = [...JSON.parse(data),newTask]

        // console.log('===newData',newData)

        fs.writeFile(`${__dirname}/../task.json`,JSON.stringify(newData),(err)=>{
            if(err) return err
            res.status(201).json({
                result : JSON.stringify(newData)
            })
        })
    })
}

const updateTask = (req,res)=>{
    const id = req.params.id

    res.end("done")
}

const deleteTask = (req,res)=>{
    const id = +req.params.id
fs.readFile(`${__dirname}/../task.json`,(err,data)=>{
    if(err) return err
    const myData = JSON.parse(data)
    console.log(myData)
    const result = myData.filter(item => item.id !== id)

    fs.writeFile(`${__dirname}/../task.json`,JSON.stringify(result),err =>{
        if(err) return err
        res.status(200).json({
            result
         })
    })
})

}

module.exports = {deleteTask,getAllTasks,updateTask,getOneTask,createTask ,checkParam}