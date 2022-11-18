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

export const FormSection = styled.div`
  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }

  p {
    color: #4b4b4b;
    font-size: 14px;
  }

  form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 14px;
    width: 100%;

    label {
      font-weight: 500;
      margin-bottom: 4px;
    }

    input,
    textarea {
      padding: 10px 12px;
      border: 1px solid #d1d5db;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 6px;
      width: 100%;
    }

    textarea {
      height: 224px;
    }

    button {
      padding: 1.25rem 0;
      width: 60%;
      color: #94a3b8;
      margin-top: 1rem;
      font-size: 1.125rem;
      font-weight: 600;
      border-radius: 5px;
      border: none;
    }

    button:disabled {
      background: #e2e8f0;
    }
  }

  @media (min-width: 768px) {
    min-width: 470px;

    h2 {
      font-size: 31px;
    }
    p {
      width: 70%;
    }

    form {
      width: 50%;

      textarea {
        height: 195px;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 80%;

    h2 {
      font-size: 40px;
    }
    p {
      font-size: 1rem;
    }

    form {
      max-width: 375px;

      textarea {
        height: 195px;
      }
    }
  }
`;
