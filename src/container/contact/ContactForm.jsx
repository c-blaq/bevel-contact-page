import React, { useState } from "react";
import { FormSection } from "./styled/Contact.styled";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <FormSection>
      <h2>
        We would love to hear from you,
        <br /> Get in touch with us
      </h2>
      <p>
        To make inquiries about our services, you can leave us a message. We
        promise to send you a response as soon as possible.
      </p>
      <form>
        <div>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Flourish Ralph"
          />
        </div>

        <div>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Flo@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message">message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi, I would like to know more about your services."
          />
        </div>
        <button disabled={!name || !email || !message}>Submit</button>
      </form>
    </FormSection>
  );
};

export default ContactForm;
