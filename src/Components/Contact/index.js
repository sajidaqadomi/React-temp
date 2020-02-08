import React from 'react';
import './style.css';
import Footer from '../Footer';



function Contact() {
  return (
    <React.Fragment>
       <div className="Contact h-100vh text-center text-capitalize">
      <h2 className='h1 mb-4'> drop me a line</h2>
      <div className='container'>
      <form>
        <div className="form-row no-gutters justify-content-between">
          <div className="col">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Your Email" />
          </div>
         </div>
         <div className="row no-gutters my-2">
            <input type="text" className="form-control" placeholder="Your Subject" />
         </div>

         <div className="row no-gutters mb-2">
            <textarea  placeholder="Your Message" className='w-100' />
         </div>
         <div className="row no-gutters">
            <input type='submit' value="send"/>
         </div>
       </form>
      </div>
        
    </div>
    <Footer />
    </React.Fragment>
   
  );
}

export default Contact;
