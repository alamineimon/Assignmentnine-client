import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SiTeamspeak } from "react-icons/si";

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <SiTeamspeak className=" fs-2" />{" "}
          <span className="ms-2 fs-4"> P TEAM</span>
        </Link>
        {/* <Navbar.Brand>P TEAM</Navbar.Brand>/ */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            <Link to="/">
              <Button variant="light">Home</Button>
            </Link>
            <Link to="/allproduct">
              <Button variant="light">Corses</Button>
            </Link>
            <Link to="/faq">
              <Button variant="light">FaQ</Button>
            </Link>
          </Nav>
          <Link to="/login">
            <Button variant="light">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="light">Register</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;