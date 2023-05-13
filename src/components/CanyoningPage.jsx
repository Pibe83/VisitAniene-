import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActivityForm from './ActivityForm';

function CanyoningPage() {
  return (
    <div className="container my-custom-class text-white">
      <h1 className="text-center">Canyoning</h1>
      <p className="text-center">Perché praticare il canyoning a Subiaco, presso il laghetto di San Benedetto ? Ecco la risposta: perché si è destinati a vivere un'emozione indimenticabile in un luogo altrimenti inaccessibile.</p>
      <p className="text-center">Prenota per passare una giornata indimenticabile</p>
      <ActivityForm />
    </div>
  );
}

export default CanyoningPage;
