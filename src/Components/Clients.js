import './Clients.css'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'


function Clients(){
  return (

    <Container id='containers' fluid >

    <Figure>
      <Image id='image1'
       width={500}
       height={600}
       src="https://media.gettyimages.com/photos/carlos-eduardo-rocha-of-brazil-weighs-in-at-170-lbs-at-the-ufc-122-picture-id106785592?s=612x612" roundedCircle
       fluid />
    <Figure.Caption id= 'caption1'>
      Spark Martial Arts
    </Figure.Caption>
    </Figure>
    <Figure>
      <Image id='image2'
        width={500}
        height={600}

        src="https://expertphotography.com/wp-content/uploads/2018/11/pizza-photography-dough.jpg" roundedCircle
        fluid/>
        <Figure.Caption id = 'caption2' >
        The Pizza House
        </Figure.Caption>
      </Figure>
      </Container>


  );
}

export default Clients ;
