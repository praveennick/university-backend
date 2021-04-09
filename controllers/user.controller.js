var userModel= require('../models/user.model');

exports.registerUser=function(request,response){
    console.log(request.body);
    var userData = request.body;
    var newUser =new userModel(userData);
    newUser.save(function(err,docs){
        if(err){
            response.send({error:err.message})
        }else{   
            response.send({result:"User created Successfully!"});
        }
    })
}

exports.loginUser=function(request,response){
    var userData = request.body;
    userModel.findOne({s_email:userData.s_email},function(err,docs){
        if(err){
            response.send({error:err.message})
        }
        if(docs.role==userData.role){
            if(docs.s_password == userData.s_password){
                response.send({result:"Login Success"})
            }else{
                response.send({result:false,message:"Incorrect Password!"});
            }
        }else{
            response.status(401).send({result:false,message:"Unauthorized Access!!"});
        }
    })
}

exports.getAllUsers=function(request,response){
    userModel.find({},function(err,docs){
        if(err){
            response.send({error:err.message})
        }else{
            response.send(docs);
        }
    })
}


exports.getUserById=function(request,response){
    var s_id=request.params.s_id;
    userModel.findOne({s_id:s_id},function(err,docs){
        if(err){
            response.send({error:err.message})
        }
        if(docs){
            response.send(docs)
        }else{
            response.send({message:"User "+s_id+" not found!"});
        }
    })
}

exports.deleteUser=function(request,response){
    var s_id= request.params.s_id;
    userModel.deleteOne({s_id:s_id},function(err,docs){
        if(err){
            response.send({error:err.message,message:"hello"});
            return;
        }
        if(docs){
            if(docs.deletedCount<=0){
                response.send({message:"User "+s_id+" not found!"})
            }else{
                response.send({message:"User "+s_id+" deleted successfully!"})
            }
            
        }
    })
}