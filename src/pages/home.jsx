import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="text-center">
      <h1>Hi, I'm Andrew Carter</h1>
      <p className="lead">
        A Software Developer and Cyber Security graduate based in the UK.
      </p>
      <p>
        <Button href="/projects" variant="primary" className="me-2">
          View Projects
        </Button>
        <Button href="/about" variant="secondary">
          About Me
        </Button>
      </p>
    </div>
  );
};

export default Home;