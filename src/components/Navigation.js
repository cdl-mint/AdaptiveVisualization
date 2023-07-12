import logo from "../assets/CDL.png";
import "./styles.scss";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavigationBar = () => {
  return (
    <Navbar bg="dark navbartheme" variant="dark" fixed="top" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={logo} className="logo"></img>
          <span className="heading"> CDL-MINT Dashboard</span>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/airquality">
            <Nav.Link>AirQuality</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/smartroom">
            <Nav.Link>SmartRoom</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/robot">
            <Nav.Link>Robot</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationBar;
