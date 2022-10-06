import React from "react";
import { Container, Form } from "./styles";
import Input from "../Input";

const SideBar = () => {
  return (
    <Container>
      <h1>
        Lesada <span>Codes</span>
      </h1>
      <Form>
        <h2>Sign Up</h2>
        <Input placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Input type="password" placeholder="Confirm Password" required />
      </Form>
    </Container>
  );
};

export default SideBar;
