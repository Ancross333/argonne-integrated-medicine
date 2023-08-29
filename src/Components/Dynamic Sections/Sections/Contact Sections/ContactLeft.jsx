import React from 'react';
import emailjs from 'emailjs-com';
import '../../../../CSS/Main Content/Contact/Contact.css';

export default function ContactLeft() {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              alert('Message sent, we will get back to you shortly', result.text);
          }, (error) => {
              alert('An error occurred, Please try again',error.text);
          });
    }

    return (
        <div className="contact-form-container">
            <h1 className="company-name">Argonne Integrative Medicine</h1>
            <h2 className="address">826 N Mullan Rd, Spokane Valley, WA 99206</h2>
            <h2 className="phone-number">(509) 928-8550</h2>
            
            <form className="contact-form" onSubmit={sendEmail}>
                <h3>Contact Us</h3>
                
                <div className="input-row">
                  <div className="input-column">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                  </div>
                  
                  <div className="input-column">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>

                <p className="disclaimer">Your contact information will not be shared with third parties.</p>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}
