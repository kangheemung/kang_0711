import { useState } from 'react';

import PostList from './components/PostsList';
import MainHeader from './components/MainHeader';

export function App () {
    const [ modalIsVisible,setModalIsVisible ] = useState(false);
  
    function showModalHandle () {
        setModalIsVisible(true);
    }
   function hideModalHandler() { 
       setModalIsVisible(false);
   }
    
    
  
    return(
        <>
          <MainHeader onCreatePost ={showModalHandle} />
          <main className= "body">
           
              <PostList 
                isPosting = {modalIsVisible}
                onStopPosting={hideModalHandler}
              />
           
          </main>
        </>
    );
  };
   
  
    
   export default App;
    
