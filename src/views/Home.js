import "./Home.css"
import './App.css'
import axios from "axios";
import { useState, useEffect } from "react"
import Post from "../components/Post";
import AddPost from "../components/AddPost";

const Home = (props) => {
    const [posts, setPosts] = useState([]);

    const getLatestPosts = () => {
        axios
            .post("http://akademia108.pl/api/social-app/post/latest")
            .then((reqData) => {
                console.log(reqData.data)
                setPosts(reqData.data);
            })

            .catch((error) => {
                console.error(error);
            });
    };

    const getNextPosts = () => {
        axios
            .post("http://akademia108.pl/api/social-app/post/older-then", {
                date: posts[posts.length -1].created_at,
            })
            .then((res) => {
                setPosts(posts.concat(res.data));
            })

            .catch((error) => {
                console.error(error);
            });

    }

    const getPrevPosts = () => {
        axios
            .post("http://akademia108.pl/api/social-app/post/newer-then", {
                date: posts[0].created_at,
            })
            .then((res) => {
                setPosts(res.data.concat(posts));
            })

            .catch((error) => {
                console.error(error);
            });

    }

    useEffect(() => {
        getLatestPosts();
    }, [props.user]);

    console.log(posts)

    return (
        <div className="home">
            {props.user && <AddPost getPrevPosts={getPrevPosts} />}
            <div classname="postList">
            {posts.map((post) => {
               return <Post post={post} key={post.id} />
                })}
           </div>
           <button className="btn loadMore" onClick={getNextPosts}>
            Dodaj wiecej
           </button>
        </div>
    );
}

export default Home;
