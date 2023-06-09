import React, {useState} from 'react';
import MyButton from "./UI/buttons/MyButton";
import MyInput from "./UI/inputs/MyInput";

const PostForm = ({create})=> {
    
  const [post, setPost] = useState({title:'', description:''})

  const addNewPost = (event)=> {
    event.preventDefault();
    const newpost = {...post, id:Date.now()};
    create(newpost)
    setPost({title:'', description:''})

  };

    return (
        <form style={{textAlign:'center'}}>
         {/* Component controllable */}
         <MyInput 
          type="text"
          value={post.title}
          onChange={(change) => setPost({...post, title:change.target.value})}
          placeholder="Your name"/>
        <MyInput
        //  ref={bodyInputRef} {/*property uncontrollable */}
         value={post.description}
         onChange={(e)=> setPost({...post, description:e.target.value})}
         type="text" 
         placeholder="Your feedback"/>
        <MyButton onClick={addNewPost}>Add a feedback</MyButton>
        </form>
    )
}
export default PostForm;