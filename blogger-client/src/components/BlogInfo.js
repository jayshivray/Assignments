import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';      //for bootstrap 
import {
  Container,
  Row,
  Col} from 'react-bootstrap';  //for bootstrap
import Paper from '@material-ui/core/Paper';
import { FaFeatherAlt,FaReply} from 'react-icons/fa';
import { BiComment} from 'react-icons/bi';
import { IoMdArrowRoundBack} from 'react-icons/io';
import {BlogContext} from '../App';
import methods from '../services/blog';

function BlogInfo(props) {
  const {dispatch} = useContext(BlogContext);
  const comments = props.comments;  
  const commList = comments.comments;

  return (
    <>
      <Container style={{display:'flex',justifyContent:'center',alignItems: 'center',marginTop:'20px',marginBottom:'20px'}}>
        <Row className="justify-content-md-center">
          <Col md="auto">          
            <Paper elevation={3} style={{padding:'5px'}}>               
               <FaFeatherAlt/>
               <h4>{comments.author}</h4> 
               <span>Title: {comments.blogTitle}</span> 
                <Paper elevation={3} style={{margin:'10px',minHeight:'100px',padding:'10px'}}>
                  {comments.blogBody}
                </Paper>
                <span style={{color:'#000099'}}>comments</span>
               {               
                  commList.map(items => (
                    <>
                      <div style={{margin:'10px'}}>
                        <span style={{fontWeight:'bold'}}><BiComment/> {items.userName}</span><br/>
                        <span>&emsp;{items.commnet}</span>
                        {
                          items.commnets.map(childItems => (
                            <>
                              <div>
                                <span style={{fontWeight:'bold'}}>&emsp;<FaReply/> {childItems.userName}</span><br/>
                                <span>&emsp;&emsp;{childItems.commnet}</span>
                              </div>
                            </>                   
                          ))                          
                        }
                      </div><hr/> 
                    </>                   
                  ))	                             
               } 
               <br/>
               <span onClick={()=>methods.displayBlogPage(dispatch)} style={{cursor: 'pointer',color:'#000099'}}><IoMdArrowRoundBack/>BACK</span>
            </Paper>                               
          </Col>
        </Row>
      </Container>      
    </>
  )
}
export default BlogInfo;
