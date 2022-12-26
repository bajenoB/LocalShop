const Router = require('express')
const router = new Router()
const userController = require('../controllers/usercontrol.js')
const authMiddleware = require('../middleware/auth')
const User=require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/api/register', userController.reg)
//router.post('/api/login', userController.login)
//router.post('/api/logout', userController.logout)
//router.get('/users', authMiddleware, userController.getUsers)

async function UserRouter(app){

    app.post('/api/register',async(req,res)=>{
        let username=req.body.username;
        let password=req.body.password;
        let email=req.body.email;
        let role=req.body.role;
        
        const hashPass = bcrypt.hashSync(password, 6)

        const user = new User({
            username:username,
            password: hashPass,
            email:email,
            role:role
        })
        await user.save();



    })
}

module.exports = {UserRouter}