import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Footer (){
    return (
        <footer>

            <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
            <p> &copy; reserved for store Front   </p>
        <p> contact us : <br/>
        osamamousa204@gmail.com <br/>
        yas.adaileh1@gmail.com
          </p>
        </Nav>
      </Navbar>
        </footer>
  
    )
}
export default Footer;