
import { Carousel } from 'react-bootstrap';
import img1 from '../immagini/rafting1.jpg';
import img2 from '../immagini/packraft.jpg';
import img3 from '../immagini/img3.jpg';
import img4 from '../immagini/arrampicata.jpg';
import img5 from '../immagini/trekking2.png';
import img6 from '../immagini/survival2.jpg';




function MyCarousel() {

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
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="d-flex justify-content-center mt-5">
          <Carousel pauseOnHover={true} indicators={false} slideToShow={2} slideToScroll={1}>
            <Carousel.Item>
              <img className="d-block w-30" src={img1} alt="First slide"  />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill" onClick={() => handleClick("Rafting")}>Rafting</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-30" src={img2} alt="Second slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill" onClick={() => handleClick("Canoa")}>Canoa</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-30" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill" onClick={() => handleClick("Canyoning")}>Canyoning</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-30" src={img4} alt="Fourth slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill" onClick={() => handleClick("Climbing")}>Climbing</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-30" src={img5} alt="Fifth slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill" onClick={() => handleClick("Trekking")}>Trekking</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-30" src={img6} alt="Sixth slide" />
              <Carousel.Caption>
                <button className="btn btn-success rounded-pill" onClick={() => handleClick("Survival")}>Survival</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default MyCarousel;