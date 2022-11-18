import React from "react";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import { Container, HeroSection } from "./styled/Contact.styled";

const Contact = () => {
  return (
    <div>
      <Header />
      <Container>
        <HeroSection />
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
