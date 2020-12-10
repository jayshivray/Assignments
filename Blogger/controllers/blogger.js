const User = require('../db/models/Users');
const Author = require('../db/models/Author');
const general = require('../helper/general');
const gen = require('../helper/general');

var methods = {
  statuscode : 200,
  response : { 
  },  
  get : async function(req,resp){
    try 
    {
      let authorId = req.params.id;
      if(authorId)
      {
        Author.find({_id:authorId},(err,data)=>{
          if(err)
            gen.writelog('error',`[blogger][get] Exception while fetching authore info: ${err}`);
    
          methods.response = methods.sendResponseObj(200,1,data,'success');   
          resp.status(methods.response.code).send(methods.response); 
        });
      }else{
        methods.response = methods.sendResponseObj(400);
        resp.status(methods.response.code).send(methods.response);
      }      
    } catch (error) {
      gen.writelog('error',`[blogger][get] Exception : ${error.message}`);  
    } 
  },
  list : async function(req,resp){
    try 
    {
      Author.find({},(err,data)=>{
        if(err)
        gen.writelog('error',`[blogger][get] Exception while fetching authore info: ${err}`);
  
        methods.response = methods.sendResponseObj(200,1,data,'success');   
        resp.status(methods.response.code).send(methods.response); 
      });      
    } catch (error) {
      gen.writelog('error',`[blogger][list] Exception : ${error.message}`);
    }        
  },  
  create : async function(req,resp){
    try 
    {
      const {author,blogTitle,blogBody} = req.body;
      if(author && blogTitle && blogBody)
      {
        let objAuthor = new Author({
          createDate : gen.getCurrentDateTime(),
          author,
          blogTitle,
          blogBody
        });
        objAuthor.save((err,data)=>{
          if(err)
            gen.writelog('error',`[blogger][create] Exception while creating new blog: ${err}`);        
          
          methods.response = methods.sendResponseObj(200,1,data,'success');   
          resp.status(methods.response.code).send(methods.response);      
        });
      }else{
        methods.response = methods.sendResponseObj(400);   
        resp.status(methods.response.code).send(methods.response);      
      }       
    } catch (error) {
      gen.writelog('error',`[blogger][create] Exception : ${error.message}`);
    }       
  },
  update : async function(req,resp){
    try 
    {
      let _id  = req.params.id;
      const {author,blogTitle,blogBody} = req.body;

      if(!_id){
        methods.response = methods.sendResponseObj(400);   
        resp.status(methods.response.code).send(methods.response); 
      }
      
      Author.updateOne({_id},{author,blogTitle,blogBody},(err,data)=>{
        if(err)
          gen.writelog('error',`[blogger][create] Exception while deleting blog: ${err}`); 
  
        methods.response = methods.sendResponseObj(200,1,data,'success');   
        resp.status(methods.response.code).send(methods.response); 
      });       
    } catch (error) {
      gen.writelog('error',`[blogger][update] Exception : ${error.message}`);
    }         
  },
  delete : async function(req,resp){
    try 
    {
      let _id  = req.params.id;
      
      if(!_id){
        methods.response = methods.sendResponseObj(400);   
        resp.status(methods.response.code).send(methods.response); 
      }

      Author.findByIdAndDelete({_id},(err,data)=>{
        if(err)
          gen.writelog('error',`[blogger][create] Exception while deleting blog: ${err}`); 
  
        methods.response = methods.sendResponseObj(200,1,data,'success');   
        resp.status(methods.response.code).send(methods.response); 
      });      
    } catch (error) {
      gen.writelog('error',`[blogger][delete] Exception : ${error.message}`);
    }         
  }, 
  addComment : async function(req,resp){
    try 
    {
      const _id  = req.params.id;
      const {userName,commnet} = req.body;
      
      if(!_id && !userName && !commnet){
        methods.response = methods.sendResponseObj(400);   
        resp.status(methods.response.code).send(methods.response); 
      }

      let data = await User.findOne({_id});
      if(!data){
        let objUser = new User({      
          parent_blog_id : _id,
          date : gen.getCurrentDateTime(),
          userName,
          commnet
        });
        objUser.save((err,data)=>{
          if(err)
            gen.writelog('error',`[blogger][create] Exception while creating new comment: ${err}`);        
          
          methods.response = methods.sendResponseObj(200,1,data,'success');   
          resp.status(methods.response.code).send(methods.response);      
        }); 
      }else{
        let obj = {userName,commnet};
        User.findByIdAndUpdate(
          {_id},
          { $push: { commnets : obj } },
          (err,data)=>{
            console.log('error',err);
  
            methods.response = methods.sendResponseObj(200,1,data,'success');   
            resp.status(methods.response.code).send(methods.response);  
          });
      }      
    } catch (error) {
      gen.writelog('error',`[blogger][addComment] Exception : ${error.message}`);
    }               
  },  
  sendResponseObj : function(code,status=0,data=null,message=null,error=null){
    return {code,status,data,message,error}
  },
  getBlogDetails : async function(req,resp){
    try 
    {
      const _id  = req.params.id;
      let blogData = {};
      let comments = [];
      if(!_id){
        methods.response = methods.sendResponseObj(400);   
        resp.status(methods.response.code).send(methods.response); 
      }
      Author.findById({_id},async(err,authdata)=>{
        const {_id,createDate,author,blogTitle,blogBody} = authdata;
        let comments = await User.find({parent_blog_id : _id});
       
        blogData._id = _id;
        blogData.createDate = createDate;
        blogData.author = author;
        blogData.blogTitle = blogTitle;
        blogData.blogBody = blogBody;
        blogData.comments = comments;

        methods.response = methods.sendResponseObj(200,1,blogData,'success');   
        resp.status(methods.response.code).send(methods.response);        
      });            
    } catch (error) {
      gen.writelog('error',`[blogger][getBlogComments] Exception : ${error.message}`);
    }        
  }
}
module.exports = methods;