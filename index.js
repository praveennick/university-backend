var express = require('express');
var cors= require('cors');
var app = express();

var DB= require('./configs/db.config');
var userRouter=require('./routes/user.route');

const PORT = process.env.PORT || 9545;


DB.connect();


app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    next();
  });

//app.use('/admin',userRouter);
app.use(userRouter);

app.get('/',(req,res)=>{
    res.send("Welcome to University Backend Application");
    
})

app.listen(PORT,function(){
    console.log("Server started!")
})