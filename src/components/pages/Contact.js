import React, { useState } from 'react';

// Here we import a helper regex function that checks if email format is valid
import { validateEmail } from '../../utils/helpers';

// Import CSS styling for Contact page
import '../../styles/Contact.css'

// Controlled input: Get the name and value from the fields that triggered the change
// Set the state of that field TO the given input
// The HTML's value equals the state of that field.

export default function Contact() {
  // Create state variables for the fields in the form, setting initial values to empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Enable submit button if no fields are blank
  const submitEnabled = name.length > 0 && email.length > 0 && message.length > 0

  // Gets name & value of the input field that user targets for a controlled component
  const handleInputChange = (e) => {

    // Reassign event to the deconstructed target property (the input field)
    // const "target", or the input tag, is nested in a div and must be deconstructed
    const { target } = e;

    // const "inputType" represents the name property of the targeted input field
    const inputType = target.name;

    // const "inputValue" represents the value inside the targeted input field
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, or message to the corresponding input 
    // If the input that was changed was the "name" field, then set name state to value given inside the name field
    if (inputType === 'name') {
      setName(inputValue);

     // If the input that was changed was the "email" field, then set email state to value given inside the email field
    } else if (inputType === 'email') {
      setEmail(inputValue);

      // If email invalid, set error message. If valid, render only blank error message
      !validateEmail(email) ? setErrorMessage('Invalid Email') : setErrorMessage('');      
    // If the input that was changed was the "message" field, then set message state to value given inside the message field
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Clear out the input after a successful contact message sent
    // TO DO: Email pop up to send real email
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('')
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div>
        <form className="fields-container">
          <div className="input-field">
            <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
              />
           </div>
           <div className="input-field">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
            />
           </div>
           <div className="input-field">
              <textarea cols="70" rows="10"  
                value={message}
                name="message"
                onChange={handleInputChange}
                type="message"
                placeholder="Write message here...">
              </textarea>
            </div>
          <button type="button" disabled={!submitEnabled} onClick={handleFormSubmit}>Submit</button>
        </form>
        </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}