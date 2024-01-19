import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme.context";
import { AuthContext } from "../../contexts/auth.context";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);
  const variant = theme === "light" ? "dark" : "light";
  const { user, logout } = useContext(AuthContext);
  return (
    <Navbar bg={variant} expand="md" variant={variant} className="mb-5">
      <Container>
        <Navbar.Brand>2023 BEST GAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user && <p>Hi there! {user.username}</p>}
            <Link to="/">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>

            {user ? (
              <>
                <Nav.Link as="span" onClick={logout}>
                  Log Out
                </Nav.Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Nav.Link as="span">Log In</Nav.Link>
                </Link>
                <Link to="/signup">
                  <Nav.Link as="span">Sign Up</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
