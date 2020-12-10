const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  createDate : {
    type : String
  },  
  author : {
    type : String,    
    required : true,
    maxlength : 25   
  },
  blogTitle : String,
  blogBody : {
    type : String,    
    required : true,  
  }
});

const Author = new mongoose.model('Author',authorSchema);
module.exports = Author;