import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <h1>Blog Space</h1>
            <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook fa-2x m-2"></i>
                    <i className="sidebarIcon fab fa-twitter fa-2x m-2"></i>
                    <i className="sidebarIcon fab fa-pinterest fa-2x m-2"></i>
                    <i className="sidebarIcon fab fa-instagram-square fa-2x m-2"></i>  
                </div>
            <h3>All Right reserved | Blog-Website</h3>
        </div>
    );
};

export default Footer;