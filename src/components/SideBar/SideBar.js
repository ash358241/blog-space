import { Link } from 'react-router-dom';
import './SideBar.css';
import { AiFillControl, AiFillFileAdd, AiTwotoneHome } from "react-icons/ai";
import { GoSignOut } from "react-icons/go"
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
const SideBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSignedIn: 'false',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleSignOut = () => {

        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: 'false',
                    email: '',
                    password: '',
                    error: '',
                    photo: ''
                }
                setUser(signOutUser);
                setLoggedInUser({});
                console.log(res);
            })

            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }


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
                <Link to="/" onClick={handleSignOut} className="text-white link fw-bold"><GoSignOut /><span> Logout</span></Link>
            </ul>

        </div>


    );
};

export default SideBar;