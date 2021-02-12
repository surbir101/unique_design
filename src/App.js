import React from 'react'
import './App.css';
import Navigationbar from './Components/Navigationbar.js' ;
import Landing from './Components/Landing.js' ;
import Cards from './Components/Cards.js';
import Clients from './Components/Clients.js';
import ContactUs from './Components/Forms.js';
import {FaFacebook} from "react-icons/fa" ;
import {FaTwitterSquare} from "react-icons/fa" ;
import {FaInstagram} from "react-icons/fa" ;
import {FaLinkedin} from "react-icons/fa" ;





function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Landing/>
      <h1 id = 'h1tran'  className = 'h1tran'> WHAT WE DO  </h1>
      <Cards/>
      <h1 id = 'secondH1' className = 'secondH1'> Clients  </h1>
      <Clients/>
      <ContactUs className = 'contact'/>
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Uniqie Design Studio <i>DESIGN WANTS TO BE SIMPLE </i> is the inititative needed to help upcoming business owners to understand the process. Unique Design focuses on providing you with the most up to date and practiced techniques in developing your business. Vertically integrating all aspects of digitally building
            and scaling abusiness, including Photography,Web Development,and Marketing. </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Specialties</h6>
            <ul class="footer-links">
              <li><a >Photography</a></li>
              <li><a >UI Design</a></li>
              <li><a >Website Development</a></li>
              <li><a >SEO Optimization</a></li>
              <li><a >Social Media</a></li>
              <li><a >Digital Marketing</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#top">Home</a></li>
              <li><a href="#h1tran">About Us</a></li>
              <li><a href="#formheader">Contact Us</a></li>
              <li><a href= "https://www.state.gov/privacy-policy/">Privacy Policy</a></li>

            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
         <a href="#"> Unique Design Studio</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/"><i class="fa fa-facebook"></i> <FaFacebook/></a></li>
              <li><a class="twitter" href="https://www.twitter.com/"><i class="fa fa-twitter"></i><FaTwitterSquare/></a></li>
              <li><a class="instagram" href="https://www.instagram.com/1uniquesession/"><i class="fa fa-instagram"></i><FaInstagram/></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i><FaLinkedin/></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  );
}

export default App;
