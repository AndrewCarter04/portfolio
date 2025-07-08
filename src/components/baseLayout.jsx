import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import CodeTrail from './codeTrail';
import { Container } from 'react-bootstrap';

const BaseLayout = ({ children }) => {
  return (
    <>
      <CodeTrail />
      <Navigation />
      <Container className="my-5" style={{ minHeight: '80vh' }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default BaseLayout;