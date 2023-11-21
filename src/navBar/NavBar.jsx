import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHeading } from "react-icons/fa6";
import { Link } from "react-router-dom"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={"/sobre"}>Hélio Júnior</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"/sobre"}>Sobre</Nav.Link>
            <Nav.Link href={"/portfolio"}>Portfolio</Nav.Link>
            <NavDropdown title="Contato" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/Helio-junior-ADS" target="_blank">Github</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/h%C3%A9lio-j%C3%BAnior-81aa6612a/" target="_blank">
              Linkedin
              </NavDropdown.Item>
              <NavDropdown.Item href="https://contate.me/helio_junior">Whatsapp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
