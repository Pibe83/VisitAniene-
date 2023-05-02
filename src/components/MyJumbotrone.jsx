import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';
import LeftImage from "../immagini/rafting5.jpg";

function MyJumbotron() {
  return (
    
      <Container className='mt-3'>
        <Row>
          <Col md={4}>
            <Image src={LeftImage} fluid style={{ width: '65%', height: '65%' }} />
            <h4 className='lead text-dark'>Centro rafting e attività outdoor</h4>
          </Col>
          <Col md={8} className='text-primary'>
            <h1 className='display-5 text-success mt-2'style={{ fontFamily: 'Shadows Into Light'}}>Benvenuti in VisitAniene</h1>
            <p className='lead text-dark'style={{ fontFamily: 'Shadows Into Light'}}>
              Vivere l'Aniene offre a persone di tutte le età la possibilità di praticare sport a contatto con la natura. Una semplice giornata fuori porta diventerà un'esperienza indimenticabile. Scopri qui sotto le nostre attività.
            </p>
          </Col>
        </Row>
        <Row className="bg-light riga">
          <Col className="py-5 text-center">
           <span> Scegli le nostre attività</span>
          </Col>
        </Row>
      </Container>
    
  );
}

export default MyJumbotron;
