import { useState } from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import authService from "../../../../services/auth.services";

const SignUpForm = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    role: undefined,
  });
  console.log(signupData);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    authService
      .signup(signupData)
      .then(({ data }) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Choose your username</Form.Label>
        <Form.Control
          type="text"
          onChange={handleInputChange}
          name="username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Type your password</Form.Label>
        <Form.Control
          type="password"
          onChange={handleInputChange}
          name="password"
        />
      </Form.Group>

      <FormGroup className="mb-3" controlId="role">
        <Form.Label>Select a role</Form.Label>
        <Form.Select
          name="role"
          onChange={handleInputChange}
          aria-label="Default select example"
        >
          <option>Open this select menu</option>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </Form.Select>
      </FormGroup>

      <div className="d-grid">
        <Button variant="dark" type="submit">
          Register
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;
