import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActivityForm from './ActivityForm';

function CanoaPage() {
  return (
    <div className="container my-custom-class fw-bold">
      <h1 className="text-center">Canoa</h1>
      <p className="text-center">Ti piace il fiume? Vieni a scoprire i suoi segreti, le sue correnti, le migliori tecniche per domarne le cascate: partecipa a un corso di canoa e kayak.
Le lezioni di canoa possono essere individuali o in gruppo con lo stesso livello di esperienza e capacità.</p>
      <p className="text-center">Prenota per passare una giornata indimenticabile</p>
      <ActivityForm />
    </div>
  );
}

export default CanoaPage;
