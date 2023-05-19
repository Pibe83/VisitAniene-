import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

import nfb from "../immagini/nf10.png"
import natg from "../immagini/ng10.png"
import Navigation from './Navbar';


function MyJumbotron() {
  return (
    <Container className='mt-3' style={{ maxWidth: 'none' }}>
      <Row className='position-relative' style={{ height: '60vh' }}>
        <video className='full-width-video' autoPlay muted loop style={{ position: 'absolute', zIndex: '-1', width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={require('../immagini/video1.mp4')} type='video/mp4' />
        </video>
        <Col md={12} className='text-center'>
          <p className='lead fw-bold text-inferiore' style={{ fontSize: '1.5rem', fontFamily: '', textShadow: '1px 1px #000' }}>
            Una semplice giornata fuori porta <br /> diventerà un'esperienza indimenticabile.
          </p>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col md={6} className='text-start'>
          <Image src={nfb} alt="Immagine a sinistra" className="img-fluid" style={{ maxHeight: '30vh', width: 'auto', marginRight: '2rem', display: 'inline-block' }} />
        </Col>
        
        <Col md={6} className='text-end'>
          <Image src={natg} alt="Immagine a destra" className="img-fluid" style={{ maxHeight: '30vh', width: 'auto', marginLeft: '2rem', display: 'inline-block' }} />
        </Col>
        <Col md={12} className='text-center'>
          <h2 className='attività'>Scopri le nostre attività</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default MyJumbotron;
