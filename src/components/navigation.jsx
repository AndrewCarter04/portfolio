import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Left side nav links */}
          <Nav className="me-auto">
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

          {/* Right side social icons */}
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/AndrewCarter04" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={22} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/andrewcarter04/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </Nav.Link>
            <Nav.Link href="https://instagram.com/andrew.carter04" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={22} />
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;