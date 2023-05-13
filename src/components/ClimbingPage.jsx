import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActivityForm from './ActivityForm';

function ClimbingPage() {
  return (
    <div className="container my-custom-class text-white">
      <h1 className="text-center">Climbing</h1>
      <p className="text-center">Sulle vette più selvagge nasce l'arrampicata , uno degli sport più istintivi e coinvolgenti</p>
      <p className="text-center">Prenota per passare una giornata indimenticabile</p>
      <ActivityForm />
    </div>
    
  );
}

export default ClimbingPage;
