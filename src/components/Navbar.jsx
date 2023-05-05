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
            <NavDropdown title="Guide" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.tripadvisor.com/Restaurants-g1137663-Subiaco_Province_of_Rome_Lazio.html">Dove mangiare</NavDropdown.Item>
              <NavDropdown.Item href="https://www.tripadvisor.com/Hotels-g1137663-Subiaco_Province_of_Rome_Lazio-Hotels.html">Dove dormire</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Cultura e Storia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
