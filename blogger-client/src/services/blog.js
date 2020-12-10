import blog from '../actionCreator/blog';
import axios from '../../node_modules/axios';

let methods = {
  getBlogList : async function(state,dispatch){
    try {
      let resp = await axios.get('http://localhost:300/blog');
      if(resp.data.data)
      {        
        dispatch(blog.getBlogList(resp.data.data));
      } 
    } catch (error) {
      console.log(`[blog][getBlogList] Exception ${error.message}`);
    }    
  },
  displayBlogDetails : async function(dispatch,id){
    try {
      dispatch(blog.showProgress());

      let resp = await axios.get(`http://localhost:300/blog/comments/${id}`);
      if(resp.data.data)
      { console.log(resp.data.data);        
        dispatch(blog.showBlogComments(resp.data.data));
      } 
    } catch (error) {
      console.log(`[blog][getBlogList] Exception ${error.message}`);
    }        
  },
  displayBlogPage : function(dispatch){
    dispatch(blog.hideBlogDetails());
  }
}
export default methods;