import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navigationbar.css' ;
import logo from './da601aff-c7c7-4237-8f25-9cd4785893af_200x200.png';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Example from './Hamburger.js' ;




function Navigationbar(){
  return (
    <Navbar id = 'navbar1'  >
      <Navbar.Brand className ='logo' href="#home">
        <img
          src={logo}
          width= "auto"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
    </Navbar.Brand>
    <Example className = 'hamburger'/>
  </Navbar>
  );
}

export default Navigationbar;
