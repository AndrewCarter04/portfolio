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
    title: "Letter of Commendation - Level 4 & 5",
    year: 2024,
    description:
      'Throughout Level 4 and 5 of my undergraduate degree, I was awarded a letter of commendation for my high grades',
  },
  {
    title: "Platinum SUBU Volunteering Award",
    year: 2024,
    description:
      'I recieved this award for completing over 100 hours of volunteering and showing over 10 employability skills I gained from this during the 2023/2024 academic year.',
  },
  {
    title: "Teamwork Award - ClickASnap Hackathon",
    year: 2023,
    description:
      'Teamwork Award winners in the Bournemouth University X ClickASnap Hackathon in March 2023',
  },
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