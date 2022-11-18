import React from "react";
import Footer from "../../component/footer/Footer";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { Container, Flex, HeroSection } from "./styled/Contact.styled";
import NavComponent from "../../component/header/Header";

const Contact = () => {
  return (
    <div>
      <NavComponent />
      <Container>
        <HeroSection>
          <h1>Contact us</h1>
        </HeroSection>
        <Flex>
          <ContactForm />
          <ContactInfo />
        </Flex>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
