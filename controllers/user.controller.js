var userModel= require('../models/user.model');

exports.registerUser=function(request,response){
    console.log(request.body);
    var userData = request.body;
    var newUser =new userModel(userData);
    newUser.save(function(err,docs){
        if(err){
            response.send({error:err.message})
        }else{   
            response.send({result:true,message:"User created Successfully!"});
        }
    })
}

exports.loginUser=function(request,response){
    var userData = request.body;
    userModel.findOne({s_name:userData.s_name},function(err,docs){
        if(err){
            response.send({error:err.message})
        }
        if(docs.role==userData.role){
            if(docs.s_password == userData.s_password){
                response.send({result:true,message:"Login Success"})
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
    var s_name=request.params.s_name;
    userModel.findOne({s_name:s_name},function(err,docs){
        if(err){
            response.send({error:err.message})
        }
        if(docs){
            response.send(docs)
        }else{
            response.send({message:"User "+s_name+" not found!"});
        }
    })
}

exports.getUserByMailId=function(request,response){
    var s_email=request.params.s_email;
    userModel.findOne({s_email:s_email},function(err,docs){
        if(err){
            response.send({error:err.message})
        }
        if(docs){
            response.send(docs)
        }else{
            response.send({message:"User "+s_email+" not found!"});
        }
    })
}

exports.deleteUser=function(request,response){
    var s_name= request.params.s_name;
    userModel.deleteOne({s_name:s_name},function(err,docs){
        if(err){
            response.send({error:err.message,message:"hello"});
            return;
        }
        if(docs){
            if(docs.deletedCount<=0){
                response.send({message:"User "+s_name+" not found!"})
            }else{
                response.send({message:"User "+s_name+" deleted successfully!"})
            }
            
        }
    })
}


exports.updateUser=function(request,response){
    var s_name=request.params.s_name;
    var updatedUser=request.body;
    console.log("request",request,request.body)

    userModel.updateOne({s_name:s_name},updatedUser,function(err,docs){
        if(err){
            response.send({error:err.message})
        }
        if(docs){
            if(docs.ok<=0){
                response.send({result:false,message:"please check the syntax"});
            }else
            if(docs.n<=0){
                response.send({result:false,message:"User "+s_name+" not found!!"})
            }else
            if(docs.nModified<=0){
                response.send({result:false,message:"User "+s_name+" already updated!"});
            }else
            {
                response.send({result:true,message:"User "+s_name+" updated successfully!"});
            }
        }
    })
}