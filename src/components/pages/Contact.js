import React, { useState } from 'react';

export default function Contact() {
    // stateVariable 'formStatus' is updated with setFormStatus function
    // Change text of submit button depending on state of form
    const [formStatus, setFormStatus] = useState('Submit');

    // Handles form submission
    const submitHandler = (e) => {

      // Prevents form from being submit immediately so we can deconstruct the form's input] first
      e.preventDefault()

      // Update the formStatus state
      setFormStatus('Submitting')

      // Destructuring assignment to pluck off the form's values
      const { name, email, message } = e.target.elements
      let contactInput = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(contactInput)
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label type="name">
            Name
          </label>
          <input type="text" id="name"></input>
        </div>
        <div>
          <label type="email">
            Email
          </label>
          <input type="email" id="email" placeholder="Write your message here..."></input>
        </div>
        <div>
          <label type="message">
            Message
          </label>
          <input type="text" id="message"></input>
        </div>
        <button className="btn btn-warning" type="submit">{formStatus}</button>
      </form>
    </div>
  );
};