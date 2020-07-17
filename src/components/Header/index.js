import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.scss';
function Header (){
    return (

        <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="#home" >Front Store</Nav.Link>
          <Nav.Link href="#pricing">CART</Nav.Link>
        </Nav>
      </Navbar>
        // <header>
        //     <h1>Front Store</h1>
        // </header>
    )
}
export default Header;