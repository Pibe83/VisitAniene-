import { Card, Button } from 'react-bootstrap';
import img1 from '../immagini/rafting1.jpg';
import img2 from '../immagini/img2.jpg';
import img3 from '../immagini/canyoningtris.jpg';
import img4 from '../immagini/trast.jpg';
import img5 from '../immagini/trekking2.png';
import img6 from '../immagini/survival2.jpg';
import '../App.css';




function MyActivities() {

  function handleClick(activity) {
    if (activity === "Rafting") {
      window.location.href = "/RaftingPage";

    } else if (activity === "Canoa") {
      window.location.href = "/canoa";
    } else if (activity === "Canyoning") {
      window.location.href = "/canyoning";
    } else if (activity === "Climbing") {
      window.location.href = "/climbing";
    } else if (activity === "Trekking") {
      window.location.href = "/trekking";
    } else if (activity === "Survival") {
      window.location.href = "/survival";
    }


  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <h4 className='esperienze  mb-4'>Esperienze d'acqua</h4>
        
        <div className='col-md-4'>
          <Card className='card'>
            <Card.Img variant="top" src={img1} />
            <Card.Body className='bg-black'>
              <Card.Title className=' fw-bold  esperienze'>Rafting</Card.Title>
              <Button className='button-prenota text-black fw-bold' variant="success" onClick={() => handleClick("Rafting")}>Prenota</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card className='card'>
            <Card.Img variant="top" src={img2} />
            <Card.Body className='bg-black'>
              <Card.Title className='fw-bold esperienze'>Canoa</Card.Title>
              <Button className='button-prenota text-black fw-bold' variant="success" onClick={() => handleClick("Canoa")}>Prenota</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card className='card'>
            <Card.Img variant="top" src={img3} />
            <Card.Body className='bg-black'>
              <Card.Title className='fw-bold esperienze'>Canyoning</Card.Title>
              <Button className='button-prenota text-black fw-bold' variant="success" onClick={() => handleClick("Canyoning")}>Prenota</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <h4 className='mb-4 esperienze mb-0'>Esperienze di montagna</h4>
      
      <div className='row mt-4'>
        <div className='col-md-4'>
          <Card className='card'>
            <Card.Img variant="top" src={img4} />
            <Card.Body className='bg-black'>
              <Card.Title className='fw-bold esperienze'>Arrampicata</Card.Title>
              <Button className='button-prenota text-black fw-bold' variant="success" onClick={() => handleClick("Climbing")}>Prenota</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card className='card'>
            <Card.Img variant="top" src={img5} />
            <Card.Body className='bg-black'>
              <Card.Title className='esperienze fw-bold'>Trekking</Card.Title>
              <Button className='button-prenota text-black fw-bold'  variant="success" onClick={() => handleClick("Trekking")}>Prenota</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card className='card'>
            <Card.Img variant="top" src={img6} />
            <Card.Body className='bg-black'>
              <Card.Title className='fw-bold esperienze'>Survival</Card.Title>
              <Button className='button-prenota text-black fw-bold'  onClick={() => handleClick("Survival")}>Prenota</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
 );
}

export default MyActivities;

