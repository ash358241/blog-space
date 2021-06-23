import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Blog-Space</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link><Link to="/home" className="link">Home</Link></Nav.Link>
                <Nav.Link><Link to="/admin" className="link">Admin</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default Header;