import React from 'react';
import './SinglePost.css';

const SinglePost = () => {
    const admin = true;
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                className="singlePostImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor
                        {
                            admin && 
                            (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon far fa-trash-alt"> Delete</i>
                                </div>
                            )
                        }
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            SpecialOne
                        </b>
                    </span>
                    <span>1 day ago</span>
                </div>
                <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora dolores ut excepturi voluptates facere minus aut atque. Velit unde fugiat magni cumque ut nam, dolores eligendi a fuga possimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque consectetur, nulla molestiae nesciunt laborum illo soluta accusamus minus ducimus quisquam ipsum excepturi totam, sunt hic id modi. Perspiciatis ipsum rerum eligendi sed cum. Repellat hic natus numquam! Cum asperiores, consectetur adipisci quod, veniam est deserunt, quos quam expedita a praesentium.
                </p>
            </div>
        </div>
    );
};

export default SinglePost;