import React, {useState} from 'react';
import { Document, Page } from 'react-pdf'

import '../../styles/Resume.css'

export default function Resume() {

  const onButtonClick = () => {
      
      fetch('Jeffrey_Sun_Resume.pdf').then(response => {

          // Blob is raw data that the file interface is based on
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Jeffrey_Sun_Resume.pdf';
              alink.click();
          })
      })
  }

  return (
    <div>
      <h1>Resume</h1>
      <div className="resume-container">
        <h3>Click to download</h3>
        <button onClick={onButtonClick}>
          Download
        </button>
      </div>
    </div>
  );
}
