import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { projects } from '../components/projectData';
import FadeIn from '../components/fadeIn';
import AnimatedCard from '../components/animatedCard';

const Projects = () => {
  return (
    <Container className="py-5 text-light">
      <FadeIn direction="up">
        <h2 className="mb-4">Projects</h2>
      </FadeIn>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map(({ slug, title, description }, idx) => (
          <Col key={idx}>
            <FadeIn direction="up" delay={idx * 0.08}>
              <AnimatedCard>
                <Card className="bg-dark text-light" style={{ height: '100%' }}>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button as={Link} to={`/projects/${slug}`} variant="primary">
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </AnimatedCard>
            </FadeIn>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;