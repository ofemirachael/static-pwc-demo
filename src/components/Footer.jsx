import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="logo-section">
        <div className="footer-logo">
          {/* <img
            src="img/PricewaterhouseCoopers_Logo.png"
            alt=""
            className="logo"
          /> */}
          <h3>Interactive Website</h3>
        </div>

        <p>
          PwC refers to the PwC network and/or one <br />
          or more of its member firms, each of which
          <br />
          is a separate legal entity.
        </p>
      </div>
      <div className="navigation">
        {/* <h4 style="text-align: left">Links</h4> */}
        <nav>
          <a>Home</a>
          <a>About </a>
          <a>Contact</a>
        </nav>
      </div>
      <div
        className="navigation"
        //style="display: flex; justify-content: flex-end; padding-top: 25px"
      >
        <nav>
          <a>Gallery</a>
          <a>Application</a>
          <a>Students Data</a>
        </nav>
      </div>
      <div className="contact">
        <h4>Contact Information</h4>
        <p>
          <b>Email:</b> ng_pwc.enquiry@pwc.com
        </p>
        <p>
          <b>Phone Number:</b> 08084571513
        </p>
        <p>
          <b>Address:</b> 5B Water Corporation Road, Victoria Island
        </p>
      </div>
      <div className="socials">
        <h4>Social Media Links</h4>
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
