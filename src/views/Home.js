import React, { useState, useEffect } from 'react';
import Post from './components/Post';

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const getLatestPosts = () => {
    fetch('http://akademia108.pl/api/social-app/post/latest', {
      method: 'GET'
    })
      .then((req) => req.json()) // Parse the response directly to JSON
      .then((reqData) => {
        setPosts(reqData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getLatestPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post  />
      ))}
    </div>
  );
}

export default Home;
