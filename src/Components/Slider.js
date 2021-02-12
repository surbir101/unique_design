import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'



function Slider(){
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://inspirationfeed.com/wp-content/uploads/2019/01/pawel-czerwinski-1090406-unsplash-800x533.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Unique Design Studio</h3>
          <p>A modern multi-service agency specializing in all areas online.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.gettyimages.com/photos/carlos-eduardo-rocha-of-brazil-weighs-in-at-170-lbs-at-the-ufc-122-picture-id106785592?s=612x612"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Spark Martial Arts</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://expertphotography.com/wp-content/uploads/2018/11/pizza-photography-dough.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>The Pizza House</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>


  );
}

export default Slider;
