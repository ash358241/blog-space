import SideBar from '../../SideBar/SideBar';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FcFullTrash } from 'react-icons/fc'


const ManageBlog = () => {
    const [blogsData, setBlogsData] = useState([]);

    useEffect(() => {

        fetch('https://sleepy-mesa-38580.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogsData(data);
            })

    }, [])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://sleepy-mesa-38580.herokuapp.com/deleteBlog/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    const newBlogsData = blogsData.filter(service => service._id !== id);
                    setBlogsData(newBlogsData)
                }
            })
    }

    return (
        <div className="row w-100">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className='col-md-10'>
                <h2 className="text-info mt-3 mb-3" style={{ marginLeft: '105px' }}>Manage Blogs</h2>

                <Table striped bordered hover style={{ width: "80%", margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <th>Blog Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogsData.map(blog =>
                                <tr>
                                    <td>{blog.title}</td>
                                    <td><FcFullTrash style={{cursor: 'pointer'}} onClick={() => handleDelete(blog._id)} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>


            </div>
        </div>
    );
};

export default ManageBlog;