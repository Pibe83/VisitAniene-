import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActivityForm from './ActivityForm';

function TrekkingPage() {
  return (
    <div className="container my-custom-class text-white">
      <h1 className="text-center">Trekking</h1>
      <p className="text-center">I percorsi di trekking variano a seconda della lunghezza e del livello di difficoltà, possono durare anche alcuni giorni. L'attrezzatura adeguata nello zaino e la familiarità con il territorio riporteranno sempre il trekker a casa.</p>
      <p className="text-center">Prenota per passare una giornata indimenticabile</p>
      <ActivityForm />
    </div>
  );
}

export default TrekkingPage;
