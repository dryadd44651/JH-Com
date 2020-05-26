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
                <NavDropdown title="Additional Menus" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/product">Action</NavDropdown.Item>
                    <NavDropdown.Item href="/action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default navbar;