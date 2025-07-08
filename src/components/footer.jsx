import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container className="text-center">
        &copy; {new Date().getFullYear()} Andrew Carter
      </Container>
    </footer>
  );
}

export default Footer;