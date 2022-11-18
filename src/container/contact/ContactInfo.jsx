import React from "react";
import { ContactInfoStyle } from "./styled/Contact.styled";

const ContactInfo = () => {
  return (
    <ContactInfoStyle>
      <div className="contact-details">
        <h3>Contact Information</h3>
        <div>
          <img src="/assets/images/location-icon.png" alt="location icon" />
          <span>2, Hamilton Avenue, Silicon Valley</span>
        </div>

        <div>
          <img src="/assets/images/call-icon.png" alt="phone call icon" />
          <span>+62 528 124 5600</span>
        </div>

        <div>
          <img src="/assets/images/message-icon.png" alt="message icon" />
          <span>Contact@streetrates.com</span>
        </div>
      </div>

      <div className="social-media">
        <h3>Social Media</h3>
        <p>You can connect with us via social media</p>
        <div className="social-icons-container">
          <a href="/">
            <img src="/assets/images/facebook-icon.png" alt="facebook icon" />
          </a>

          <a href="/">
            <img src="/assets/images/linkedIn-icon.png" alt="linkedIn icon" />
          </a>

          <a href="/">
            <img src="/assets/images/instagram-icon.png" alt="Instagram icon" />
          </a>

          <a href="/">
            <img src="assets/images/twitter-icon.png" alt="Twiter icon" />
          </a>
        </div>
      </div>
    </ContactInfoStyle>
  );
};

export default ContactInfo;
