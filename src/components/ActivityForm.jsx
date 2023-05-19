import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';

function ActivityBookingForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [hasChildren, setHasChildren] = useState(false);
  const [partecipants, setPartecipants] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
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
        setLoading(false);
        alert('Prenotazione effettuata con successo!');
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
        setDate('');
        setHasChildren(false);
        setPartecipants(1);
        setSpecialRequests('');
        fetchBookings();
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        alert('Si è verificato un errore durante la prenotazione.');
      });
  };

  const fetchBookings = () => {
    fetch('https://jsonserver-api.herokuapp.com/activities')
      .then(response => response.json())
      .then(data => {
        console.log('Bookings:', data);
        setBookings(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleEdit = (booking) => {
    setName(booking.name);
    setSurname(booking.surname);
    setEmail(booking.email);
    setPhone(booking.phone);
    setDate(booking.date);
    setHasChildren(booking.hasChildren);
    setPartecipants(booking.partecipants);
    setSpecialRequests(booking.specialRequests);
  };

  const handleDelete = (bookingId) => {
    setLoading(true);
    fetch(`https://jsonserver-api.herokuapp.com/activities/${bookingId}`, {
      method: 'DELETE',
    })
      .then(response => {
        console.log('Success:', response);
        setLoading(false);
        alert('Prenotazione cancellata con successo!');
        fetchBookings();
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        alert('Si è verificato un errore durante la cancellazione della prenotazione.');
      });
  };

  return (
    
    <Container>
    <div className="text-center"> {/* Wrapper del form */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" >
          <Form.Label className='My-custom-class fw-bold'>Nome</Form.Label>
          <Form.Control className='My-custom-form' type="text" placeholder="Inserisci il nome" value={name} onChange={e => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label className='My-custom-class fw-bold'>Cognome</Form.Label>
          <Form.Control className='My-custom-form' type="text" placeholder="Inserisci il cognome" value={surname} onChange={e => setSurname(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label className='My-custom-class fw-bold'>Email</Form.Label>
          <Form.Control className='My-custom-form' type="email" placeholder="Inserisci l'email" value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label className='My-custom-class fw-bold'>Telefono</Form.Label>
          <Form.Control className='My-custom-form' type="text" placeholder="Inserisci il numero di telefono" value={phone} onChange={e => setPhone(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label className='My-custom-class fw-bold'>Data prenotazione</Form.Label>
          <Form.Control className='My-custom-form' type="date" placeholder="Seleziona la data" value={date} onChange={e => setDate(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formHasChildren">
          <Form.Check className='My-custom-class text-start fw-bold' type="checkbox" label="Bambini" checked={hasChildren} onChange={e => setHasChildren(e.target.checked)} />
        </Form.Group>
        <Form.Group controlId="formPartecipants">
          <Form.Label className='My-custom-class fw-bold'>Numero partecipanti</Form.Label>
          <Form.Control className='My-custom-form' type="number" min={1} value={partecipants} onChange={e => setPartecipants(parseInt(e.target.value))} required />
        </Form.Group>
        <Form.Group controlId="formSpecialRequests">
          <Form.Label className='My-custom-class fw-bold'>Richieste speciali</Form.Label>
          <Form.Control className='My-custom-form' as="textarea" rows={3} placeholder="Inserisci eventuali richieste speciali" value={specialRequests} onChange={e => setSpecialRequests(e.target.value)} />
        </Form.Group>
        <Button type="submit" variant="primary" className="mx-auto mt-5 my-custom-class button-prenota">Prenota</Button> {/* Pulsante Prenota */}
      </Form>
    </div>
    <h2 className='text-black fw-bold text-center'>Prenotazioni effettuate</h2>
    <ul className='text-black fw-bold text-center'>
      {bookings.map((booking) => (
        <li key={booking.id}>
          <p className='my-custom-class fw-bold'>{booking.name} {booking.surname} - {booking.date} - {booking.phone} {booking.hasChildren} {booking.partecipants} {booking.specialRequests}</p>
          <Button variant="outline-primary" size="sm" onClick={() => handleEdit(booking)}>Modifica</Button>{' '}
          <Button variant="outline-danger" size="sm" onClick={() => handleDelete(booking.id)}>Cancella</Button>
        </li>
      ))}
    </ul>
  </Container>
    );
    
}

export default ActivityBookingForm;