import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './Landing.css'
import Typical from 'react-typical'
import Navigationbar from './Navigationbar.js' ;
import Button from 'react-bootstrap/Button'


function Landing(){
  return (
    <Jumbotron fluid >
      <Container>
        <p className = "p1">We are Unique Design Studio:</p>
        <h1 className = "h1">Design your
        <Typical
            steps={['Dream', 2000, 'Brands', 1000, 'Social Media',1000 , 'Contents', 1000, 'Contents', 1000, 'Websites', 1000, 'FUTURE', 5000]}
            loop={Infinity}
            wrapper="p"
            /></h1>
            <hr className = 'hr'/>



        <p className = "p"> A multi-disciplinary design studio poised in the modern world  </p>

    <Button href= "#h1tran"  variant="primary">Learn more about us</Button>{' '}
    <Button href= "#form" variant="outline-secondary">Get in touch</Button>{' '}





      </Container>
    </Jumbotron>

  );


}

export default Landing;
