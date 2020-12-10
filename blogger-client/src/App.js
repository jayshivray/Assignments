import React,{useEffect,useReducer} from 'react';
import './App.css';
import Blog from './components/Blog';
import BlogInfo from './components/BlogInfo';
import initState from './componentState/blogState';
import blog from './reducer/blog';
import methods from './services/blog';
export const BlogContext = React.createContext();

function App() {
  const [state,dispatch] = useReducer(blog,initState);
  
  useEffect(()=>{    
    methods.getBlogList(state,dispatch);        
  },[]);

  return (
    <BlogContext.Provider value={{state,dispatch}}>
      <>
        {!state.showDetails ? <Blog list={state.list}/> : <BlogInfo comments={state.blogDetails}/>}
      </>
    </BlogContext.Provider>
  );
}

export default App;
