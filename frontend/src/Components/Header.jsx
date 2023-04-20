import React from 'react'
import { Navbar,Nav,Container} from "react-bootstrap";

const Header = () => {
  return (
    <>
     
      
      
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
          <Nav className="me-left">
            <Nav.Link href="#home">
            &nbsp;cart
            <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
            <Nav.Link href="#features"> &nbsp; Singin
            <i className="fa-regular fa-user"></i>
           
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header