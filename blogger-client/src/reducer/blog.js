import BA from '../actionCreator/blog';

const blog =(state,action)=>{
    
  let error   = false;
  let success = false;
  let loading = false;
  //let list = [];
  //let showDetails = false;
  //let blogDetails = {};

  switch (action.type){
    case BA.SHOW_PROGRESS : 
      return {...state,error,success,loading : true} 
    case BA.HIDE_PROGRESS : 
      return {...state,error,success,loading}   
    case BA.GET_BLOG_LIST : 
      return {...state,loading,list : action.payload}   
    case BA.HIDE_BLOG_DETAILS : 
      return {...state,loading,showDetails : false}  
    case BA.SHOW_BLOG_COMMENTS : 
      return {...state,loading,showDetails: true,blogDetails : action.payload}                         
    case BA.DISPLAY_ERROR :       
      return {...state,error:true,success,loading,msg:action.payload} 
    case BA.DISPLAY_SUCESS :
      return {...state,success:true,error,loading,msg:action.payload}                                   
    default:
      return state;  
  }
}
export default blog;
