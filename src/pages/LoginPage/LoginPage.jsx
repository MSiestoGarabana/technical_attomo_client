import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Log In!</h1>
          <hr />
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
