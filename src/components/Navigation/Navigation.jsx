import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme.context";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);
  const variant = theme === "light" ? "dark" : "light";
  return (
    <Navbar bg={variant} expand="md" variant={variant} className="mb-5">
      <Container>
        <Navbar.Brand>2023 BEST GAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>
            <Link to="/login">
              <Nav.Link as="span">login</Nav.Link>
            </Link>
            <Link to="/signUp">
              <Nav.Link as="span">Sign Up</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
