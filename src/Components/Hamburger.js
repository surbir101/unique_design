import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import  './Hamburger.css'

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu  right>
        <a id="home" className="menu-item" href="#top">Home</a>
        <a id="about" className="menu-item" href="#h1tran">About</a>
        <a id="contact" className="menu-item" href="#formheader">Contact</a>
        
      </Menu>
    );
  }
}

export default Example ;
