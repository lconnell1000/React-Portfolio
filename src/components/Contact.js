import React from 'react';
import '../index.css';

function Contact () {
    return (
        <section className="contact" id="contact">
        <div className="row">
          <h2>Get in Touch</h2>
          <div className="contact__info">
            <p>
              Are you looking for a fast learner looking to get his teeth sunk in to
              the world of web development? say "Hi 👋" I will aim to respond back to
              all enquiries within 48 hrs. 😊 The quickest way to contact me is via email.
            </p>
            <a href="mailto:lconnell1000@gmail.com" className="btn">lconnell1000@gmail.com</a>
          </div>
        </div>
        <a href="#top" class="back-to-top" title="Back to Top">
       <img src={"./assets/images/arrow-up.svg"} alt="Back to Top" className="back-to-top__image"/>
     </a>
      </section>
    )
}

export default Contact;