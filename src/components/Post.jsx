import classes from './Post.module.css';

function Post({author,body}) {
    
          const onClickButton = ()=> {
        alert();
    };

    const contentStyle = {
        color:"blue",
        fontSize:"20px"
    };
    const contentStyle1 = {
        color:"orange",
        fontSize:"20px"
    };
    return  (
          <li className ={classes.post}>
            <p className ={classes.author}>Post<a style ={contentStyle1}>{author}</a></p>
            <p className ={classes.text}>Post<a style ={contentStyle}>{body}</a></p>
            <p className ={classes.text}>Postは素敵！=======================</p>
            <button onClick = {onClickButton}> 클릭 </button >
          </li>
        );
}
   export default Post;