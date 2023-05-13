import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ActivityBookingForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [hasChildren, setHasChildren] = useState(false);
  const [partecipants, setPartecipants] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingData = {
      name,
      surname,
      email,
      phone,
      date,
      hasChildren,
      partecipants,
      specialRequests,
    };
    fetch('https://jsonserver-api.herokuapp.com/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Prenotazione effettuata con successo!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Si è verificato un errore durante la prenotazione.');
      });
  };

  return (
    <Container className="mt-5">
      <h4 className="text-center mb-4">Prenota la tua esperienza</h4>
  <Row className="justify-content-center">
    <Col xs={12} sm={10} md={8}>
      <Form onSubmit={handleSubmit} className="bg-white my-custom-class p-4">
        <Form.Group>
          <Form.Label className='fw-bold'>Nome</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className='fw-bold'>Cognome</Form.Label>
          <Form.Control type="text" value={surname} onChange={e => setSurname(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className='fw-bold'>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className='fw-bold'>Telefono</Form.Label>
          <Form.Control type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className='fw-bold'>Data</Form.Label>
          <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Check className='fw-bold' type="checkbox" label="Presenza di bambini" checked={hasChildren} onChange={e => setHasChildren(e.target.checked)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className='fw-bold'>Numero di partecipanti</Form.Label>
          <Form.Control type="number" min="1" value={partecipants} onChange={e => setPartecipants(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className='fw-bold'>Richieste speciali</Form.Label>
          <Form.Control as="textarea" value={specialRequests} onChange={e => setSpecialRequests(e.target.value)} />
        </Form.Group>
        <div className="text-center">
          <Button type="submit" className="w-50 mt-5">Prenota</Button>
        </div>
      </Form>
    </Col>
  </Row>
</Container>

 


  );
}

export default ActivityBookingForm;