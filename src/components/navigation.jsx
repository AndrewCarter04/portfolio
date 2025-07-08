import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar 
      variant="dark" 
      expand="lg"
      style={{
        backgroundColor: 'rgba(18, 18, 18, 0.75)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.7)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Andrew Carter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/awards">
              Awards
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;