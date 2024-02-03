import"./AddPost.css";
import React, { useState } from 'react';
import axios from 'axios';

const AddPost = ({ user, getPrevPosts }) => {
  

  const AddPost = (props) => {
    const [postContent, setPostContent] = useState('');
    if () {
      axios
        .post('https://akademia108.pl/api/social-app/post/add', {
          user_id: user.id,
          content: postContent,
        })
        .then((res) => {
          console.log(res.data);
         
          getPrevPosts(newestPOstDate);
          setPostContent('');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <form className='addPostForm'>
      <textarea placeholder="Add post..." > </ textarea>
      <button className='btn'>Add</button>
    </form >
  );

};

export default AddPost;
