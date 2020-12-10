const Action = {
  DISPLAY_ERROR : 'DISPLAY_ERROR',
  DISPLAY_SUCESS : 'DISPLAY_SUCESS',
  HIDE_PROGRESS : 'HIDE_PROGRESS',
  SHOW_PROGRESS : 'SHOW_PROGRESS',
  GET_BLOG_LIST : 'GET_BLOG_LIST',
  HIDE_BLOG_DETAILS : 'HIDE_BLOG_DETAILS',
  SHOW_BLOG_COMMENTS : 'SHOW_BLOG_COMMENTS',

  showProgress : function(){
    return { type:this.SHOW_PROGRESS}
  },
  hideProgress : function(){
    return {type:this.HIDE_PROGRESS}
  },    
  displayErrorMsg : function(error){
    return { type:this.DISPLAY_ERROR, payload : error }
  },
  displaySuccessMsg : function(msg){
    return { type:this.DISPLAY_SUCESS, payload : msg }
  },
  getBlogList : function(list){
    return { type:this.GET_BLOG_LIST, payload : list }
  },
  hideBlogDetails : function(){
    return { type:this.HIDE_BLOG_DETAILS}
  },
  showBlogComments : function(val){
    return { type:this.SHOW_BLOG_COMMENTS, payload : val }
  }         
}
export default Action;
