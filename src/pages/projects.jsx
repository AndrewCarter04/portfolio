import React from 'react';
import { Row, Col, Card, Button, Image } from 'react-bootstrap';

const Projects = () => {
  return (
    <>
      <h2 className="mb-4">Projects</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src="/images/test"
              alt="Example App"
            />
            <Card.Body>
              <Card.Title>Example App</Card.Title>
              <Card.Text>
                An example app.
              </Card.Text>
              <Button
                href="https://github.com/example"
                target="_blank"
                variant="primary"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more projects here */}
      </Row>
    </>
  );
};

export default Projects;