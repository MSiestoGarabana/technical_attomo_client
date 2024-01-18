import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="md" variant="dark" className="mb-5">
      <Container>
        <Navbar.Brand>2023 BEST GAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>
            <Link to="/createGame">
              <Nav.Link as="span">Create New Game</Nav.Link>
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
