var express = require('express');
var userController = require('../controllers/user.controller');

var userRouter= express.Router();

//http://localhost:9545/register
userRouter.post('/register',userController.registerUser);

//http://localhost:9545/login
userRouter.post('/login',userController.loginUser);

//http://localhost:9545/allUsers
userRouter.get('/allUsers',userController.getAllUsers);

//http://localhost:9545/getUserById/
userRouter.get('/getUserById/:s_id',userController.getUserById);

//http://localhost:9545/deleteUser/
userRouter.delete('/deleteUser/:s_id',userController.deleteUser);

module.exports=userRouter;