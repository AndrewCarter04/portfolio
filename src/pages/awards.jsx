import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const awardsList = [
  {
    title: 'SUBU \'Start of the Year\'',
    year: 2025,
    description: 'For all my work across various roles within the Student Union for the academic year 24/25',
  },
  // add more
];

const Awards = () => {
  return (
    <Container>
      <h2 className="mb-4">Achievements & Awards</h2>
      <ListGroup>
        {awardsList.map((award, idx) => (
          <ListGroup.Item key={idx}>
            <h5>{award.title} <small className="text-muted">({award.year})</small></h5>
            <p>{award.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Awards;