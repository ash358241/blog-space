import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';
import './Posts.css';


const Posts = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-mesa-38580.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data)) 
    }, [])

    return (
        <div className="blogsDiv pt-5">
            <h1>Blogs For You</h1>
            <div className="blogsContainer">
            {
                blogs.map(blogData => <Post blogData={blogData} key={blogData._id}></Post>)
            }
        </div>
        </div>
    );
};

export default Posts;