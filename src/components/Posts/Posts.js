import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";
import "./Posts.css";
import { Spinner } from "react-bootstrap";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("https://sleepy-mesa-38580.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setSpinner(false);
      });
  }, []);

  return (
    <>
      <div className="blogsDiv pt-5">
        <h1>Blogs For You</h1>
        <div className="text-center">
          {spinner && (
            <Spinner
              style={{ width: "100px", height: "100px" }}
              animation="grow"
              variant="success"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
        <div className="blogsContainer">
          {blogs.map((blogData) => (
            <Post blogData={blogData} key={blogData._id}></Post>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
