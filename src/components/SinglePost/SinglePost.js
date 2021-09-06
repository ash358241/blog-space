import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SinglePost.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Spinner } from "react-bootstrap";

const motionEffect = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
};

const titleMotion = {
  hidden: {
    y: -500,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 1,
    },
  },
};

const SinglePost = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState([]);

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch(`https://sleepy-mesa-38580.herokuapp.com/blog/${blogId}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data)
        setSpinner(false)
      });
  }, [blogId]);
  return (
    <div className="singlePost">
      <div className="spinner">
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
      <div className="singlePostWrapper">
      <img className="singlePostImg" src={blog.imageURL} alt="" />
        <motion.h1
          variants={titleMotion}
          initial="hidden"
          animate="visible"
          className="singlePostTitle"
        >
          {blog.title}
        </motion.h1>
        <motion.pre
          variants={motionEffect}
          initial="hidden"
          animate="visible"
          className="singlePostDesc"
        >
          {blog.description}
        </motion.pre>
        <br />
        <motion.h5
        variants={motionEffect}
        initial="hidden"
        animate="visible"
        >
          <Link className="link" to="/home">
            - Back to Home
          </Link>
        </motion.h5>
      </div>
    </div>
  );
};

export default SinglePost;
