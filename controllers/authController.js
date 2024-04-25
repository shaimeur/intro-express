const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async(req,res)=>{
    try {
        const {name,email,password} = req.body
        console.log(name,email,password)
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = {
            name,
            email,
            password:hashedPassword
        }
        console.log(newUser)
        const createdUser = await User.create(newUser)
        res.status(201).json({
            message : "user created with success!!",
            createdUser
        })
    } catch (error) {
        console.log(error)
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        console.log(email,password)

        const loggedInUser = await User.findOne({email})
        if(!loggedInUser){
            return res.status(404).json({
                message : "email not found plz try to create an account!!"
            })
        }
        const validPassword = await bcrypt.compare(password,loggedInUser.password)
        if(!validPassword){
            return res.status(400).json({
                message : "wrong password!!"
            })
        }
        console.log("37",loggedInUser)
        res.status(200).json({
            message : "user logged in with success!!"
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {register,login}