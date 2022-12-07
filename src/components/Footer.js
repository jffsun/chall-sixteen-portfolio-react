import React from 'react';

// If the component being imported isn't specified, import this component
// Props is being being passed down from parent component in app.js 
export default function Footer(props) {

  return (
  // <!-- Footer -->
  <footer class="bg-light text-center ">
    {/* <!-- Grid container --> */}
    <div class="container p-4">

      {/* <!-- Section: Social media --> */}
      <section class="mb-4">
        {/* <!-- Facebook --> */}
        <a class="btn btn-primary btn-floating m-1" style="background-color: #3b5998" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

        {/* <!-- Twitter --> */}
        <a class="btn btn-primary btn-floating m-1" style="background-color: #55acee" href="#!" role="button"><i class="fab fa-twitter"></i></a>

        {/* <!-- Google --> */}
        <a class="btn btn-primary btn-floating m-1" style="background-color: #dd4b39" href="#!" role="button"><i class="fab fa-google"></i></a>

        {/* <!-- Instagram --> */}
        <a class="btn btn-primary btn-floating m-1" style="background-color: #ac2bac" href="#!" role="button"><i class="fab fa-instagram"></i></a>

        {/* <!-- Linkedin --> */}
        <a class="btn btn-primary btn-floating m-1" style="background-color: #0082ca" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
        {/* <!-- Github --> */}
        <a class="btn btn-primary btn-floating m-1" style="background-color: #333333" href="#!" role="button"><i class="fab fa-github"></i></a>
      </section>
    </div>
  </footer>
 );
}