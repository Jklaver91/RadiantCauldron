//Email imports
import React from "react";
//Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Dividerclear from '.././Assets/Logos/Dividerclear.png';

import Email from "../Components/Contact/Email";
import FacebookCommunity from "../Components/Contact/FacebookCommunity";


const Contact = () => {
  
  return (
    <div>
      
      <img className='divider' src={Dividerclear} alt="Divider" />
      <h1 className="text">Contact us!</h1>

      <div>
        {/* all form section for sending an email from the page with emailjs */}
        
        <Email></Email>

        <img className='divider' src={Dividerclear} alt="Divider" />
        {/* facebook community */}
        
        <FacebookCommunity></FacebookCommunity>
      </div>
      <img className='divider' src={Dividerclear} alt="Divider" />
    </div >
  );
}

export default Contact;