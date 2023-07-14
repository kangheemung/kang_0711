import {useState} from 'react' ;
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';　
import Modal from './Modal';


function PostsList({isPosting, onStopPosting}) {
  const [posts, setPosts ]= useState([ ]);

 function addPostHandler(postData){
   setPosts((exisitingPosts) =>[postData,...existingPosts]);
 }
  //let modalContent;
    //if (modalIsVisible) {
      //modalContent =(
       // <Modal onClose ={hideModalHadler}>
         // <NewPost
        //    onBodyChange ={bodyChangeHandler}
         //   onAuthorChange={authorChangeHandler}
       //   />
       // </Modal>
        
       // );
 //   }

    return(
      <>
        {isPosting && (
        <Modal onClose = {onStopPosting}>
          <NewPost
            onCancel = {onStopPosting} onAddPost = {addPostHandler}
        />
        </Modal > 
        )}
       
        <ul className = {classes.posts}>
          <Post author ="マニュアル" body = "確認！素敵"/>
        </ul>
         
      </>
          );
}
export default PostsList;