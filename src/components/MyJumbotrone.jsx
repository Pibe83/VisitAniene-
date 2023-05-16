import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

import Freccia from "../immagini/freccia.png"
import Navigation from './Navbar';


function MyJumbotron() {
  return (
    
    <Container className='mt-3' style={{ maxWidth: 'none' }}>
      
    <Row className='' style={{ position: 'relative', height: '60vh' }} >
    
      <video autoPlay muted loop style={{ position: 'absolute', zIndex: '-1', width: '100%', height: '110%', objectFit: 'cover' }}>
        <source src={require('../immagini/video1.mp4')} type='video/mp4' />
      </video>
      
      <Col md={4}></Col>
      <Col md={8} className='text-center mt-5'>
        
        <p className='lead  fw-bold text-inferiore' style={{ fontSize: '1.5rem', fontFamily: '', textShadow: '1px 1px #000' }}>
          Una semplice giornata fuori porta <br /> diventerà un'esperienza indimenticabile.
        </p>
      </Col>
    </Row>
    <Row className="bg-none d-flex flex-column align-items-center">
      <Col className="py-5 text-center">
        <span className='text-ridotta fw-bold' style={{ fontSize: '2rem', fontFamily: 'Helvetica', color: 'white', textShadow: '1px 1px #000' }}>
          Scopri le nostre attività
        </span>
      </Col>
      <Col xs="auto" className="align-self-center text-start mb-3">
        <img src={Freccia} alt="Freccia" width="50" />
      </Col>
    </Row>
  </Container>
);
}

export default MyJumbotron;
