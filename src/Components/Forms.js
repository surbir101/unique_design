import React from 'react';
import emailjs from 'emailjs-com';

import './Forms.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_rwbrnrt', e.target, 'user_mlknd8h5UPjsixfjiOqNF')
      .then((result) => {
          console.log('Success!!',result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div id = 'form'>
    <h1 id = 'formheader' className = "formheader"> Get in Touch </h1>

             <div className="container">
             <form onSubmit={sendEmail}>
                     <div className="row pt-5 mx-auto">
                         <div className="col-8 form-group mx-auto">
                             <input type="text" className="form-control" placeholder="Name" name="name"/>
                         </div>
                         <div className="col-8 form-group pt-2 mx-auto">
                             <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                         </div>
                         <div className="col-8 form-group pt-2 mx-auto">
                             <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                         </div>
                         <div className="col-8 form-group pt-2 mx-auto">
                             <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                         </div>
                         <div className="col-8 pt-3 mx-auto">
                             <input type="submit" className="btn btn-info" value="Contact Us"></input>
                         </div>
                     </div>
                 </form>
             </div>
         </div>
  );
}
