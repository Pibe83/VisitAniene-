import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActivityForm from './ActivityForm';

function RaftingPage() {
  return (
    <div className="container my-custom-class text-white">
      <h1 className="text-center">Rafting</h1>
      <p className="text-center">Se desideri trascorrere una giornata diversa a pochi chilometri da Roma con i tuoi amici o la tua famiglia, salta semplicemente su uno dei nostri gommoni, lasciati alle spalle lo stress quotidiano e lasciati trasportare a valle</p>
      <p className="text-center">Prenota per passare una giornata indimenticabile</p>
      <ActivityForm />
    </div>
  );
}

export default RaftingPage;
