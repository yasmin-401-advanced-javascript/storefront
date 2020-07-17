import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.scss';
import {connect} from 'react-redux';
function Header (props){
    return (

        <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="#home" >Front Store</Nav.Link>
          <Nav.Link href="#pricing">CART({props.cart.cart.length})</Nav.Link>
        </Nav>
      </Navbar>
    )
}

const mapStateToProps = (state) =>{
  return {cart : state.Cart}
} 

export default connect(mapStateToProps  )(Header); 

