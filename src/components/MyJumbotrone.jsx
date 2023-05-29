import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

import nfb from "../immagini/nf10.png"

import pol from "../immagini/poler-removebg-preview.png"

function MyJumbotron() {
  return (
    <Container className='mt-3 my-jumbotron'>
      <Row className='position-relative jumbotron-row'>
        <video className='full-width-video video-container' autoPlay muted loop>
          <source src={require('../immagini/video1.mp4')} type='video/mp4' />
        </video>
        <Col md={12} className='text-center'>
          <p className='lead fw-bold text-inferiore'>
            Una semplice giornata fuori porta <br /> diventerà un'esperienza indimenticabile.
          </p>
        </Col>
      </Row>
      <Row className='mt-3 align-items-center'>
        <Col md={4} className='d-flex justify-content-end'>
          <Image src={nfb} alt="Immagine a sinistra" className="img-fluid custom-image" />
        </Col>
        <Col md={4} className='text-center'>
          <h2 className='attività'>Scopri le nostre attività</h2>
        </Col>
        <Col md={4} className='d-flex justify-content-start'>
          <Image src={pol} alt="Immagine a destra" className="img-fluid custom-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default MyJumbotron;




