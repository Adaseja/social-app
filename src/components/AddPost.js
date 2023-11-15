import React, { useState } from 'react';
import axios from 'axios';

const AddPost = ({ user, getPrevPosts }) => {
  const [postContent, setPostContent] = useState('');

  const addPost = () => {
    if  {
      axios
        .post('https://akademia108.pl/api/social-app/post/add', {
          user_id: user.id,
          content: postContent,
        })
        .then((res) => {
          console.log(res.data);
         
          getPrevPosts();
          setPostContent('');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div >
      <textarea />
      <button onClick={addPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
