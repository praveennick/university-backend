var express = require('express');
var app = express();

var DB= require('./configs/db.config');
var userRouter=require('./routes/user.route');



DB.connect();


app.use(express.json());

//app.use('/admin',userRouter);
app.use(userRouter);

app.listen(9545,function(){
    console.log("Server started!")
})