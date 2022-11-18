import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 1.25rem 0;
  width: 60%;
  color: #94a3b8;
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 5px;
  border: none;

  button:disabled {
    background: #e2e8f0;
  }
`;

const Button = ({ text, disabled }) => {
  return (
    <ButtonStyle data-testid="button" disabled={disabled}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
