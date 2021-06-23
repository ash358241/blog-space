import React from 'react';
import { useState } from 'react';
import SideBar from '../../SideBar/SideBar';
import './AddBlog.css';
import axios from 'axios';

const AddBlog = () => {

    const [blogData, setBlogData] = useState({});
    const [imageURL, setImageURL] = useState(null);

    const handleBlur = e => {
        const newData = { ...blogData };
        newData[e.target.name] = e.target.value;
        setBlogData(newData);
    }

    const handleSubmit = e => {

        const formData = {
            title: blogData.title,
            description: blogData.description,
            imageURL: imageURL
        }

        fetch('http://localhost:5000/addBlog', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert("Blog added successfully!")
                }
            })
            .catch(error => {
                console.error(error)
            })

            e.preventDefault();
    }


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
      const imageData = new FormData();
      imageData.set('key', 'b86c0ab7beeb42c384775d3b62a113c0');
      imageData.append('image', event.target.files[0])
  
      axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
  
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
            <div className="write">
            <div className="writeContent">
            <img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input id="fileInput" type="file" onChange={handleImageUpload} style={{ display: "none" }} />
                <input
                    className="writeInput"
                    placeholder="Title"
                    type="text"
                    autoFocus={true}
                    name="title"
                    onBlur={handleBlur}
                />
                </div>
                <div className="writeFormGroup">
                <textarea
                    className="writeInput writeText"
                    placeholder="Add a story..."
                    type="text"
                    autoFocus={true}
                    name="description"
                    onBlur={handleBlur}
                />
                </div>
                <button className="btn btn-info text-white" type="submit">
                Publish
                </button>
            </form>
            </div>
        </div>
            </div>
        </div>
    );
};

export default AddBlog;