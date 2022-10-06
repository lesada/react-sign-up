import React from "react";
import { Container, StyledInput, StatusCircle } from "./styles";

const Input = ({ type, placeholder, required }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder}
        type={type ? type : "text"}
        required={required ? required : false}
      />
      <StatusCircle />
    </Container>
  );
};

export default Input;
