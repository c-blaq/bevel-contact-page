import styled from "styled-components";
import contactBg from "../../../assets/images/contact-bg.png";

export const Container = styled.section`
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const HeroSection = styled.div`
  background: url(${contactBg}) center/cover;
  min-height: 343px;
  min-height: 298px;
  margin: 2rem 0;
  width: 100%;

  @media (min-width: 768px) {
    margin: 0;
    min-height: 331px;
  }

  @media (min-width: 1200px) {
    min-height: 400px;
  }
`;
