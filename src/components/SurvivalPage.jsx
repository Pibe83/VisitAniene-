import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActivityForm from './ActivityForm';

function SurvivalPage() {
  return (
    <div className="container my-custom-class  fw-bold">
      <h1 className="text-center">Survival</h1>
      <p className="text-center">Acquisirai familiarità con le tecniche di sopravvivenza e bushcraft in diversi ambienti con il supporto dei nostri Survival Instructor CSEN-CONI nazionali. In questo modo stabilirai uno stretto contatto con la natura e la fauna selvatica.</p>
      <p className="text-center">Prenota per passare una giornata indimenticabile</p>
      <ActivityForm />
    </div>
  );
}

export default SurvivalPage;
