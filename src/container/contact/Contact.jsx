import React from "react";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import ContactForm from "./ContactForm";
import { Container, Flex, HeroSection } from "./styled/Contact.styled";

const Contact = () => {
  return (
    <div>
      <Header />
      <Container>
        <HeroSection />
        <Flex>
          <ContactForm />
        </Flex>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
