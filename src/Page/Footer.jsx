import React from 'react'
import './style.css'
function Footer() {
  return (
    <>
     <footer>
    <section  className="bg-light text-wrap p-5  pb-1 pt-1">
    <div className="container-fluid justify-content-center m-5 mt-0 mb-0 " >
      <div className="row list-unstyled h-25 ">
        <div className="col-lg-3 p-1">
        <h6>Contact</h6>
        <ul className=" list-unstyled">
          <li>Building No. 1, 3rd Floor, Office No.132, Solitaire Corporate Park, Guru Hargovindji Marg, Chakala, Andheri (East), Mumbai 400093, Maharashtra, India.</li>
          <li><i className="bi bi-phone text-primary" aria-hidden="true"></i>&nbsp;9619024039 / 9167991134 / 9619822135</li>
          <li><i className="bi bi-envelope text-primary"></i> info@thevivitsu.com</li>
        </ul>
      </div>
      <div className="col-md-3  p-2">
          <h6>Explore</h6>
           <li className="p1"> About Vivitsu</li>
           <li className="p1"> Registration</li>
            <li className="p1">  Contact Us</li>
              <li className="p1">  Sitemap</li>
        
      </div>
      <div className="col-md-3  p-1">
        <h6>Information</h6>
        <span>
          <li className="p1">Terms & Conditions</li>
            <li className="p1"> Privacy Policy</li>
              <li className="p1">Feedback</li>
                <li className="p1">FAQs</li>
      </span>
      </div>
      <div className="col-md-3  p-1">
        <div className="col p-1">
          <p className="h6">Follow us on</p>
          <i className="bi bi-facebook text-primary p-1"></i> 
          <i className="bi bi-instagram text-primary p-1"></i>
          <i className="bi bi-twitter text-primary p-1"></i>
          <i className="bi bi-linkedin text-primary p-1"></i>
        </div>
        <div className="col p-1">
          <p className="h6">Contact us on</p>
          <i className="bi bi-whatsapp text-primary p-1"></i> 
          <i className="bi bi-telegram text-primary p-1"></i>
          <i className="bi bi-envelope text-primary p-1"></i>
          <i className="bi bi-telephone-fill text-primary p-1"></i>
        </div>
      </div>
    </div>
    </div>
      <p className="text-center text-dark">Copyright ©2022.All rights reserved.</p>
    </section>
    </footer>

    
    </>
  )
}

export default Footer