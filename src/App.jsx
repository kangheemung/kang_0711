import { useState } from 'react';
import Post from './components/Post';
import './index.css';
import {ColoredMessage } from './components/ColoredMessage';
import PostList from './components/PostsList';
import MainHeader from './components/MainHeader';

export function App () {
    const [ modalIsVisible,setModalIsVisibl ] = useState(true);
    const onClickButton=()=>{
        alert();
    };
  
    const contentPinkStyle = {
        color:"pink",
        fonSize:"20px"
    };
   function hideModalHandler() { 
     setModalIsVisible(false);
   }
    
    function showModalHandle () {
        setModalIsVisibl(true);
    }
    function hideModalHandler () {
      setModalIsVisibl(false);
    }
    
    return(
        <>
          <MainHeader onCreatePost ={showModalHandle}/>
          <main className= "body">
            <ColoredMessage color="green" massage="hi"/>
              <PostList 
                is Posting = {modalIsVisible}
                onStopPosting={hideModalHandler}
              />
            <button onClick = {onClickButton}> 클릭 </button >
          </main>
        </>
    );
  };
   
  
    
   export default App;
    
