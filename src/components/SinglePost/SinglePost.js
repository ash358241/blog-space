import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePost.css';
import {Link} from 'react-router-dom';

const SinglePost = () => {
    const {blogId} = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`https://sleepy-mesa-38580.herokuapp.com/blog/${blogId}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [blogId]);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                className="singlePostImg"
                src={blog.imageURL}
                alt=""
                />
                <h1 className="singlePostTitle">
                    {blog.title}
                </h1>
                <pre className="singlePostDesc">
                    {blog.description}
                </pre>
                <br />
                <h5><Link className='link' to="/home">- Back to Home</Link></h5>
            </div>
        </div>
    );
};

export default SinglePost;