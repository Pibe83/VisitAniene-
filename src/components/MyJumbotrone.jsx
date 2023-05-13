
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

import Freccia from "../immagini/freccia.png"


function MyJumbotron() {
  return (

    <Container className='mt-3'>

      <Row className='' style={{ position: 'relative', height: '50vh' }} >
        <video autoPlay muted loop style={{ position: 'absolute', zIndex: '-1', width: '100vw', height: '110%', objectFit: 'cover' }}>
          <source src={require('../immagini/video1.mp4')} type='video/mp4' />
        </video>
        <Col md={4}>


        </Col>
        <Col md={8} className='text-primary text-center mt-5'>
          <h1 className='display-5 text-light mt-2 fw-bold'>VisitAniene </h1>
          <p className='lead text-light'>
             Una semplice giornata fuori porta diventerà un'esperienza indimenticabile.
          </p>
        </Col>
      </Row>
      <Row className="bg-none d-flex flex-column align-items-center">
        <Col className="py-5 text-center">
          <span className='text-ridotta fw-bold'>
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
