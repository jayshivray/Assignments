import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BlogContext} from '../App';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BlogCard(props){
  const {dispatch} = useContext(BlogContext);
  const classes = useStyles(); 
  let temp = props.body;
  let shortBody = temp.substring(1,25)+'...';

  return (
    <Card className={classes.root} style={props.style}>
      <CardContent>        
        <Typography variant="h6" component="h2" style={{marginBottom:'20px',marginTop:'10px'}}>
          <span>Title:</span>{props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          &emsp;{shortBody}
        </Typography>
      </CardContent>
      <CardActions>        
        <Button size="small" 
          keyName={props.keyName} 
          style={{color:'#000099'}}
          onClick={()=>props.clickHandler(dispatch,props.keyName)}>view</Button>
      </CardActions>
    </Card>
  );
}
