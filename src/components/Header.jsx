import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SiTeamspeak } from "react-icons/si";
import { AuthContext } from '../contexts/AuthProvider';
import Tippy from '@tippyjs/react';
import { ThemeContext } from "../App";
import ReactSwitch from "react-switch";


const Header = (props) => {

const { theme, toggleTheme } = useContext(ThemeContext);

  const { user, logOut, setUser } = useContext(AuthContext);
  const logoutHandle = () => {
    logOut()
    .then(setUser({}))
     .catch((error) => {
        console.log("error:", error);
      })
  }

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
            <Link to="/blogs">
              <Button variant="light">Blogs</Button>
            </Link>
          </Nav>
          <Nav.Link>
            {user?.uid ? (
              <>
                <div>
                  <Tippy content={user?.displayName}>
                    <Image
                      style={{ height: "45px" }}
                      className="me-2"
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  </Tippy>

                  <Link to="/login">
                    <Button onClick={logoutHandle} variant="light">
                      Logout
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="light">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="light">Register</Button>
                </Link>
              </>
            )}
          </Nav.Link>
          <Nav.Link>
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
            ></ReactSwitch>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;