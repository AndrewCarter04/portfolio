import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const awardsList = [
  {
    title: "SUBU 'Start of the Year'",
    year: 2025,
    description:
      'For all my work across various roles within the Student Union for the academic year 24/25',
  },
  {
    title: "Teamwork Award - ClickASnap Hackathon",
    year: 2023,
    description:
      'Teamwork Award winners in the Bournemouth University X ClickASnap Hackathon in March 2023',
  }
  // add more
];

const Awards = () => {
  return (
    <Container className="py-5 text-light">
      <h2 className="mb-4" style={{ fontWeight: '700' }}>
        Achievements & Awards
      </h2>

      <Row xs={1} md={2} lg={3} className="g-4">
        {awardsList.map((award, idx) => (
          <Col key={idx}>
            <Card className="bg-dark text-light h-100 shadow-sm">
              <Card.Body>
                <Card.Title>
                  {award.title}{' '}
                  <small className="mb-2" style={{ color: '#aaa', fontSize: '0.95rem' }}>
                    ({award.year})
                  </small>
                </Card.Title>
                <Card.Text style={{ color: '#ccc' }}>{award.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Awards;