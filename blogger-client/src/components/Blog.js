import React,{useContext} from 'react'
import {Container} from 'react-bootstrap';  //for bootstrap
import BlogCards from './BlogCards';
import CirculerProgress from './CirculerProgress';
import methods from '../services/blog';
import {BlogContext} from '../App';


function Blog(props) {
  const {state} = useContext(BlogContext);
  let listitems = props.list;  
  
  return (    
    <>
      <Container style={{marginTop:'30px'}}>
        <CirculerProgress visible={state.loading}/>
        {
          listitems.map(items => (
            <BlogCards 
              key={items._id}
              keyName={items._id}
              title={items.blogTitle} 
              body={items.blogBody} 
              clickHandler={methods.displayBlogDetails}
              style={{marginBottom:'10px'}}/>
          ))	          
        } 
      </Container>        
    </>   
  )
}

export default Blog;