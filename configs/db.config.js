var mongoose = require('mongoose');

exports.connect=()=>{
    mongoose.connect("mongodb+srv://admin:admin@universitydb.qlent.mongodb.net/universitydb?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true  },
        function(err){
            if(err){
                console.log(err.message)
            }else{
                console.log("Database Connected!")
            }
        }
    )
}