import React from "react";
import { ContactInfoStyle } from "./styled/Contact.styled";
import locationIcon from "../../assets/images/location-icon.png";
import callIcon from "../../assets/images/call-icon.png";
import messageIcon from "../../assets/images/message-icon.png";
import facebookIcon from "../../assets/images/facebook-icon.png";
import linkedinIcon from "../../assets/images/linkedIn-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";
import twitterIcon from "../../assets/images/twitter-icon.png";

const ContactInfo = () => {
  return (
    <ContactInfoStyle>
      <div className="contact-details">
        <h3>Contact Information</h3>
        <div>
          <img src={locationIcon} alt="location icon" />
          <span>2, Hamilton Avenue, Silicon Valley</span>
        </div>

        <div>
          <img src={callIcon} alt="phone call icon" />
          <span>+62 528 124 5600</span>
        </div>

        <div>
          <img src={messageIcon} alt="message icon" />
          <span>Contact@streetrates.com</span>
        </div>
      </div>

      <div className="social-media">
        <h3>Social Media</h3>
        <p>You can connect with us via social media</p>
        <div className="social-icons-container">
          <a href="/">
            <img src={facebookIcon} alt="facebook icon" />
          </a>

          <a href="/">
            <img src={linkedinIcon} alt="linkedIn icon" />
          </a>

          <a href="/">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>

          <a href="/">
            <img src={twitterIcon} alt="Twiter icon" />
          </a>
        </div>
      </div>
    </ContactInfoStyle>
  );
};

export default ContactInfo;
