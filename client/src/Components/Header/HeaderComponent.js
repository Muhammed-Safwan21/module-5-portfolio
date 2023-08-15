import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { ContextValue } from "../../App";
import { BsSun, BsMoon } from "react-icons/bs";
import "./HeaderComponent.css";

const NavBar = () => {
  const { theme, changeTheme, isAuthenticated } = useContext(ContextValue);

  return (
    <div className={theme === false ? "header-dark" : "header-light"}>
      <Navbar
        bg="transparent"
        variant={theme === false ? "dark" : "light"}
        expand="md"
        className="navbar-container"
      >
        <Navbar.Toggle aria-controls="navbar-nav" />
        <div className="switch-container">
          <button onClick={changeTheme} className="theme-toggle-button">
            {theme === false ? (
              <BsSun className="sun-icon" />
            ) : (
              <BsMoon className="moon-icon" />
            )}
          </button>
        </div>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active"
            >
              Contact
            </Nav.Link>

            {!isAuthenticated ? (
              <Nav.Link
                as={RouterLink}
                to="/register"
                duration={500}
                offset={-70}
              >
                Signup/Login
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
