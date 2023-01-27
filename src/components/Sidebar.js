import React, { useState }  from 'react';

import '../styles/Sidebar.css'

export default function Sidebar() {

    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    /* Set the width of the sidebar to 250px (show it) */
  function openNav() {
    // document.getElementById("mySidepanel").style.width = "250px";
  }

  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    // document.getElementById("mySidepanel").style.width = "0";
  }

  return (
    <div>
      <div id="mySidepanel" className="sidepanel">
      <button className="closebtn" onClick={handleOpen}></button>
      <button> About</button>
      <button> Services</button>
      <button> Clients</button>
      <button> Contact</button>
    </div>

  </div>
  )
}