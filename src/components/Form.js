import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import '../index.css';

 function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
  
      }
  
      
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setName('');
      setMessage('');
      setEmail('');
      setErrorMessage('');
    };

    return (
        <section className="form">
        <div className="row">
        <h2>Send Me a Message</h2>
        <form className="form">
        <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <button type="button" className="btn btn--pink" onClick={handleFormSubmit}>Submit</button>
      
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
      <a href="#top" class="back-to-top" title="Back to Top">
       <img src={"./assets/images/arrow-up.svg"} alt="Back to Top" className="back-to-top__image"/>
     </a>
      </section>
    );
}

export default Form;