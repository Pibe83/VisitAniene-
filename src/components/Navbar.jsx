import React from 'react';
import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import { FaUtensils, FaBed, FaLandmark, FaFacebook, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";

function Navigation() {
  return (
    <Navbar sticky="top" bg="black" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/">
          <span className='display-5 fw-bold ml-3 visit-aniene'>VisitAniene</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto sticky-top">
            <Nav.Link href="/" style={{ color: 'FFA500' }}>Home</Nav.Link>
            <NavDropdown title="Guide" id="basic-nav-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="https://www.tripadvisor.com/Restaurants-g1137663-Subiaco_Province_of_Rome_Lazio.html">
                <FaUtensils className="me-2 text-white" />
               <span className='text-white'> Dove mangiare</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.tripadvisor.com/Hotels-g1137663-Subiaco_Province_of_Rome_Lazio-Hotels.html">
                <FaBed className="me-2 text-white" />
                <span className='text-white'>Dove dormire</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Subiaco,_Lazio">
                <FaLandmark className="me-2 text-white" />
                <span className='text-white'>Cultura e Storia</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav className="ml-auto">
              <Nav.Link href="https://www.facebook.com/"><FaFacebook className="me-3" /></Nav.Link>
              <Nav.Link href="https://www.instagram.com/"><FaInstagram className="me-3" /></Nav.Link>
              <Nav.Link href="https://www.youtube.com/"><FaYoutube className="me-3" /></Nav.Link>
              <Nav.Link href="https://www.google.com/"><FaGoogle className="me-3" /></Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

