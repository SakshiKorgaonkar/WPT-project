import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navigationbar({ isAuthenticated,setIsAuthenticated }) {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Ambulance Booking System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/bookings">
              <Nav.Link>My Bookings</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/new-booking">
              <Nav.Link>Book Ambulance</Nav.Link>
            </LinkContainer>
          </Nav>

          {!isAuthenticated ? (
            <div className="ml-auto">
              <LinkContainer to="/register">
                <div
                  className="btn btn-outline-light m-2"
                  
                  role="button"
                  aria-pressed="true"
                >
                  Register
                </div>
              </LinkContainer>
              <LinkContainer to="/login">
                <div
                  className="btn btn-outline-light btn-m active m-2"
                  role="button"
                  aria-pressed="true"
                >
                  Login
                </div>
              </LinkContainer>
            </div>
          ) : <div>
            <FontAwesomeIcon icon="fa-solid fa-user" size={"xl"}/>
            <div
                  className="btn btn-secondary btn-m active m-2"
                  role="button"
                  aria-pressed="true"
                  onClick={()=>{
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                  }}
                >
                  Log Out
                </div>
            </div>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
