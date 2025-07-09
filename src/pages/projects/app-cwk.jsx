import React from 'react';
import { Button, Container } from 'react-bootstrap';

export const meta = {
  slug: 'app-cwk',
  title: 'Applications of Programming Principles – Level 4 Coursework',
  description: 'Flask web application – a coursework submission from Level 4 of my degree, which was marked at 97%.',
  date: '2025-10-05',
};

const AppCwk = () => (
  <Container className="py-5 content-wrapper" style={{ maxWidth: '900px', zIndex: 10, position: 'relative' }}>
    <h2 className="mb-4" style={{ fontWeight: '700', fontSize: '2.5rem', color: '#eee' }}>
      {meta.title}
    </h2>

    <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.6 }}>
      {meta.description}
    </p>

    <br />

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      This project was a <strong>Flask-based web application</strong> created for a coursework module in my first year at Bournemouth University.
      It featured a dynamic and responsive frontend with <strong>JavaScript-heavy logic</strong> to support live interaction,
      record editing, and state updates within a to-do list style interface. This could then be saved via backend API routes.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      A key component of the project was a <strong>custom complex sorting algorithm</strong> that allowed users to sort
      tasks based on priority, due date, and tag relevance.
      The project was awarded an impressive <strong>97% mark</strong>, one of the highest scores in the cohort.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      The backend was written in Python using Flask for routing and template rendering, while the frontend used
      W3 CSS and vanilla JavaScript to maintain responsiveness and interactivity.
    </p>

    <div className="my-4">
      <Button
        variant="primary"
        href="https://github.com/AndrewCarter04/AppCoursework"
        target="_blank"
        rel="noopener noreferrer"
        className="me-2"
      >
        View on GitHub
      </Button>
    </div>

  </Container>
);

export default AppCwk;
