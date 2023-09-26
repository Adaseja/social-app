import React, { useState, useEffect } from 'react';
import Post from './components/Post';


const [posts, setPosts] = useState([]);

const getLatestPosts = () => {
    fetch('http://akademia108.pl/api/social-app/post/latest', {
      method: 'GET' });

      useEffect(() => {
        getLatestPosts();
      }, []);

    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default Home;
