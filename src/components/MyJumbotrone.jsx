
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';
import LeftImage from "../immagini/trip.jpg";
import Freccia from "../immagini/freccia.png"


function MyJumbotron() {
  return (

    <Container className='mt-3'>

      <Row className='' style={{ position: 'relative', height: '50vh' }} >
        <video autoPlay muted loop style={{ position: 'absolute', zIndex: '-1', width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={require('../immagini/video1.mp4')} type='video/mp4' />
        </video>
        <Col md={4}>


        </Col>
        <Col md={8} className='text-primary text-center mt-5'>
          <h1 className='display-5 text-white mt-2' style={{ fontFamily: 'cursive', fontStyle: 'Shadows Into Light' }}> </h1>
          <p className='lead text-white' style={{ fontFamily: 'cursive', fontStyle: 'Vina Sans' }}>
            VisitAniene offre a persone di tutte le età la possibilità di praticare sport a contatto con la natura. Una semplice giornata fuori porta diventerà un'esperienza indimenticabile.
          </p>
        </Col>
      </Row>
      <Row className="bg-none d-flex flex-column align-items-center">
        <Col className="py-5 text-center">
          <span style={{ fontFamily: 'cursive', fontStyle: 'Vina Sans' }} className='text-ridotta'>
            Scegli le nostre attività
          </span>
        </Col>
        <Col xs="auto" className="align-self-center text-start">
          <img src={Freccia} alt="Freccia" width="50" />
        </Col>
      </Row>


    </Container>

  );
}

export default MyJumbotron;
