import React from 'react';
import SideBar from '../../SideBar/SideBar';

const ManageBlog = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
            <h1>this is manage blog section</h1>
            </div>
        </div>
    );
};

export default ManageBlog;