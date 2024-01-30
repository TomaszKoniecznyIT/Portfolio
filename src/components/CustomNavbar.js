import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../static/images/logo4.png";
import { Image } from "react-bootstrap";

function CustomNavbar() {
  return (
    <>
      <Navbar
        className="bg-gradient shadow"
        bg="secondary"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image alt="logo" src={logo} width="40" height="40" rounded />{" "}
            Tomasz Konieczny
          </Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
