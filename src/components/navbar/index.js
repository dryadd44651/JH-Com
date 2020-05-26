import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { Link } from 'react-router-dom';
var style = {
    backgroundColor: "#F8F8F8",
    
}


const navbar = () => {
    return (
        <Navbar style={style} variant="light">
            <Navbar.Brand as={Link} to="/">鈞翔實業有限公司</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <NavDropdown title="Product" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/product">產品</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/product/industry">工業應用</NavDropdown.Item>
                    <NavDropdown.Item href="/product/medical">醫療科技</NavDropdown.Item>
                    <NavDropdown.Item href="/product/life">生活科技</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default navbar;