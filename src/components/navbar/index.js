import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// import { Link } from 'react-router-dom';
// var style = {
//     backgroundColor: "#F8F8F8",
// }
// var style1={
//     background:"green",
//     position: "relative",
//     float: "right",
// }

const navbar = () => {
    
    // const big = 
    //     <Navbar style={style} variant="light" >
    //                 <Navbar.Brand as={Link} to="/">鈞翔實業有限公司</Navbar.Brand>
    //                 <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
    //                 <Nav className="ml-auto">
    //                     <Nav.Link as={Link} to="/">Home</Nav.Link>
    //                     <Nav.Link as={Link} to="/services">Services</Nav.Link>
    //                     <NavDropdown title="Product" id="collasible-nav-dropdown">
    //                         <NavDropdown.Item href="/product">產品</NavDropdown.Item>
    //                         <NavDropdown.Divider />
    //                         <NavDropdown.Item href="/product/industry">工業應用</NavDropdown.Item>
    //                         <NavDropdown.Item href="/product/medical">醫療科技</NavDropdown.Item>
    //                         <NavDropdown.Item href="/product/life">生活科技</NavDropdown.Item>
    //                     </NavDropdown>
    //                     <Nav.Link as={Link} to="/about">About</Nav.Link>
    //                     <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
    //                 </Nav>
    //             </Navbar>
    const right=
    //id="navbarNavDropdown" for small size dropdown
        <div class="collapse navbar-collapse navbar-header pl-100" id="navbarNavDropdown" >
            <ul class="navbar-nav " >
                <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/services">Services</a>
                </li>
                
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    產品
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="/product/industry">工業應用</a>
                    <a class="dropdown-item" href="/product/medical">醫療科技</a>
                    <a class="dropdown-item" href="/product/life">生活科技</a>
                </div>
                </li>

            

                <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href="/contact">Contact Us</a>
                </li>
            </ul>
            </div>
    const header=
        <nav class="navbar navbar-expand-md navbar-light bg-light ">
        <div class="collapse navbar-collapse navbar-header pl-100"  >
            <a class="navbar-brand" href="/">鈞翔實業</a>
        </div>
        
        <form class="form-inline my-2 my-lg-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        {right}
        </form>
        
        </nav>
        


        
        
    
    //alert(window.innerHeight);
    //alert(window.innerWidth);
    // if(window.innerWidth<700)
    //     return big
    // else
    //     return small
    return header
    
}



export default navbar;