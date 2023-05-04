import React from 'react';
import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap';
import logo from '../immagini/logo3.jpg';
import '../App.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar sticky="top" bg="white" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top logo"
            alt="Logo"
          />
          <span className='text-success display-5 font-weight-bold ml-3'style={{ fontFamily: 'cursive', fontStyle:'Shadows Into Light'}}>VisitAniene</span>
         
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
