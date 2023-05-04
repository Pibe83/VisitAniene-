import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

import tripadv from '../immagini/tripadvisor.jpg'

function Footer() {
  return (
    <footer className='bg-black py-3 mt-5'>
      <Container>
        <Row>
          <Col md={4}>
            <h5 className='text-gray-100'>Contatti</h5>
            <ul className='list-unstyled text-gray'>
              <li>Email: info@visitaniene.it</li>
              <li>Telefono: 06-12345678</li>
              <li>Indirizzo: Via dei Sanniti, 123, Roma</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Chi siamo</h5>
            <p>VisitAniene è un'azienda che si occupa di organizzare attività outdoor per persone di tutte le età.</p>
          </Col>
          <Col md={4}>
          <img src={tripadv} width="100" alt="Logo VisitAniene"  />
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={12} className='text-center'>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='mx-2 text-gray'>
              <FaFacebook size={24} />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='mx-2'>
              <FaInstagram size={24} />
            </a>
            <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' className='mx-2'>
              <FaYoutube size={24} />
            </a>
            <a href='https://www.google.com/' target='_blank' rel='noopener noreferrer' className='mx-2'>
              <FaGoogle size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;