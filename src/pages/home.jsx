import React from 'react';
import { Button, Row, Col, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="px-3 px-md-5 py-5" style={{ maxWidth: '1200px', margin: 'auto', width: '100%' }}>
      <Row className="align-items-start">
        {/* Text */}
        <Col
          xs={12}
          md={8}
          className="text-center text-md-start"
          style={{ paddingRight: '2rem' }} // some breathing room on right for photo
        >
          <h1 style={{ fontWeight: 700, fontSize: '3.5rem', marginBottom: '1rem', color: '#eee' }}>
            Hi, I'm Andrew Carter
          </h1>

          <p
            className="lead"
            style={{ fontWeight: 600, fontSize: '1.35rem', color: '#ddd', lineHeight: 1.5 }}
          >
            I'm a Software Developer and Cyber Security graduate based in the UK,
            passionate about creating web applications and automation tools that
            make computing accessible to everyone, even without specialist knowledge.
          </p>

          <br />

          <p style={{ fontWeight: 500, fontSize: '1.2rem', color: '#ccc', lineHeight: 1.5 }}>
            I specialize in <strong>React.js</strong> and <strong>Express.js</strong>, and I also have experience in
            <strong> Python</strong>, <strong>Java</strong>, and <strong>JavaScript</strong>. My projects often focus on breaking down
            complex tech barriers and helping users through intuitive design and
            automation.
          </p>

          <br />

          <p style={{ fontWeight: 500, fontSize: '1.2rem', color: '#ccc', lineHeight: 1.5 }}>
            I've been recognized with multiple hackathon awards, including the
            <strong> Teamwork Award</strong> at the BU X ClickASnap Hackathon (March 2023) and the
            <strong> Development Award</strong> at the Bournemouth University X Teemill & ClickASnap
            Hackathon (November 2023).
          </p>

          <br />

          <p style={{ fontWeight: 500, fontSize: '1.2rem', color: '#ccc', lineHeight: 1.5 }}>
            Outside coding, I’m an active open source contributor and involved with
            student radio. I also enjoy gaming and hosting a weekly show on <a href="https://player.nervemedia.org.uk" target="_blank" rel="noreferrer" style={{ color: '#aad' }}>
              Nerve Radio
            </a>.
          </p>

          <br />

          <p style={{ fontWeight: 500, fontSize: '1.2rem', color: '#ccc', lineHeight: 1.5 }}>
            As part of my commitment to advocacy and inclusivity, I serve as the Disabilities, Accessibility and Neuro Diverse
            Part Time Officer within the Students' Union at Bournemouth University, working to create a more inclusive environment for all students.
          </p>

          <br />

          <p style={{ fontWeight: 500, fontSize: '1.2rem', color: '#ccc', lineHeight: 1.5 }}>
            This September 2025, I’ll be starting my Masters by Research at
            Bournemouth University to deepen my expertise in cyber security.
          </p>

          <p className="mt-4">
            <Button href="/projects" variant="primary" size="lg" className="me-3 px-4">
              View Projects
            </Button>
            <Button href="/about" variant="secondary" size="lg" className="me-3 px-4">
              About Me
            </Button>
            <Button href="/awards" variant="primary" size="lg" className="me-3 px-4">
              View Awards
            </Button>
          </p>
        </Col>

        {/* Photo */}
        <Col
          xs={12}
          md={4}
          className="text-center mt-4 mt-md-0"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', zIndex: '10' }}
        >
          <Image
            src="/nerve-pfp.jpg" // update this!
            alt="Andrew Carter"
            fluid
            style={{
              maxWidth: '100%',
              maxHeight: '400px',
              border: '5px solid #aad',
              boxShadow: '0 0 20px rgba(170, 170, 221, 0.7)',
              borderRadius: 0,
              objectFit: 'cover',
              width: 'auto',
              height: 'auto',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
