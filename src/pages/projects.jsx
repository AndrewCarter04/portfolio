import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { projects } from '../components/projectData';

const Projects = () => {
  return (
    <Container className="py-5 text-light">
      <h2 className="mb-4">Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map(({ slug, title, description }, idx) => (
          <Col key={idx}>
            <Card className="bg-dark text-light h-100">
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button as={Link} to={`/projects/${slug}`} variant="primary">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;