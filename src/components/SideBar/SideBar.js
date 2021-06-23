import { Link } from 'react-router-dom';
import './SideBar.css';
import { AiFillControl, AiFillFileAdd, AiTwotoneHome } from "react-icons/ai";
import { GoSignOut } from "react-icons/go"
const SideBar = () => {


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" >
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-white link">
                        <AiTwotoneHome /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addBlog" className="text-white link">
                        <AiFillFileAdd /> <span>Add Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageBlogs" className="text-white link">
                        <AiFillControl /> <span>Manage Blogs</span>
                    </Link>
                </li>



                <Link to="/" className="text-white link fw-bold"><GoSignOut /><span> Logout</span></Link>
            </ul>

        </div>


    );
};

export default SideBar;