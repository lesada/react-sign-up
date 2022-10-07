import React from "react";
import { Container, Form, Terms } from "./styles";
import Input from "../Input";

const SideBar = () => {
  return (
    <Container>
      <h1>
        &lt; Lesada / &gt; <span>Codes</span>
      </h1>
      <Form>
        <h2>Sign Up</h2>
        <Input placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Input type="password" placeholder="Confirm Password" required />
        <button>Sign Up</button>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <p>
          Already have an account? <a href="#">Sign In</a>
        </p>
      </Form>
    </Container>
  );
};

export default SideBar;
