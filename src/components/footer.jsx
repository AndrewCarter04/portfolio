import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer 
      className="bg-dark text-white py-4 mt-5"
      style={{
        backgroundColor: 'rgba(18, 18, 18, 0.75)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <span>&copy; {new Date().getFullYear()} Andrew Carter</span>
        <a
          href="https://github.com/AndrewCarter04/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
          style={{ textDecoration: 'underline' }}
        >
          View this site on GitHub
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
