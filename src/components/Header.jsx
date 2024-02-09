import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container,Button} from 'react-bootstrap'
import { useTheme } from '../ContextApi/ThemeProvider';
import { Link } from 'react-router-dom';
const Header = () => {
  const { theme, themes, toggleTheme, selectTheme ,currentTheme} = useTheme();
  
  return (
    <Navbar expand="lg"  style={{zIndex: 1,}} >
      <Container fluid className=" glasscss w-100 mt-2 mb-2 ms-4 me-4">
        <Navbar.Brand as={Link} to='/'>Beat Binder</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Song list" >
              <NavDropdown.Item as={Link} to='/'>All songs</NavDropdown.Item>
              <NavDropdown.Item>Tamil</NavDropdown.Item>
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>Malayalam</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/addsong'>Add Song</Nav.Link>
            <Nav.Link as={Link} to='/contactus'>Contact us</Nav.Link>
            <Nav.Link as={Link} to='/profile'>profile</Nav.Link>
            <NavDropdown title="Themes" >
              <NavDropdown.Item onClick={()=>selectTheme("light")}>Light</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>selectTheme("dark")}>Dark</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>selectTheme("custom")}>custom</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
