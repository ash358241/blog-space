import React from 'react';
import SideBar from '../../SideBar/SideBar';
import './AddBlog.css';

const AddBlog = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
            <div className="write">
            <div className="writeContent">
            <img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input id="fileInput" type="file" style={{ display: "none" }} />
                <input
                    className="writeInput"
                    placeholder="Title"
                    type="text"
                    autoFocus={true}
                />
                </div>
                <div className="writeFormGroup">
                <textarea
                    className="writeInput writeText"
                    placeholder="Add a story..."
                    type="text"
                    autoFocus={true}
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