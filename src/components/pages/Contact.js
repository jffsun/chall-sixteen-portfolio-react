import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

// Controlled input: Get the name and value of the input that triggered the change
// We set the state of that field TO the input
// The HTML's value equals the state of that field.

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitEnabled = name.length > 0 && email.length > 0 && message.length > 0

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, or message to the corresponding input 
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);

      // After setting the state of the email, validate email input and render error message if fail 
      !validateEmail(email) ? setErrorMessage('Invalid Email') : setErrorMessage('');      
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('')
  };

  return (
    <div>
      <p>Contact Me</p>
      <form className="form">
      <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
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
          type="message"
          placeholder="Write message here..."
        />
        <button type="button" disabled={!submitEnabled} onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}