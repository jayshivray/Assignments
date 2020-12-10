const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  parent_blog_id : {
    type : String,
    required: true    
  },
  date : String,
  userName : {
    type : String,    
    required : true,
    maxlength : 25   
  },
  commnet : {
    type: String, default:'N/A',    
  },
  commnets:[]  
});

const User = new mongoose.model('User',userSchema);
module.exports = User;