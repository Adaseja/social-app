import axios from 'axios';
import React,  { useState, useEffect } from 'react';
import Post from '../components/Post';

const Home = (props) => {
    const [posts, setPosts] = useState([]);

    const getLatestPosts = () => {
        axios
            .post('http://akademia108.pl/api/social-app/post/latest')
            .then((reqData) => {
                console.log(reqData.data)
                setPosts(reqData.data);
            })

            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getLatestPosts();
    }, [props.user]);

    console.log(posts)

    return (
        <div>
            {posts.map((post) => (
                <Post post={post} />
            ))}
           
        </div>
    );
}

export default Home;
