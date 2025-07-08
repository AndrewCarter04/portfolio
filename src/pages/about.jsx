import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5 text-light">
      <h2 className="mb-4" style={{ fontWeight: '700', fontSize: '2.5rem' }}>
        About Me
      </h2>

      <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
        I'm a recent graduate from Bournemouth University with a BSc (Hons) in Forensic Computing & Security. 
        Alongside my studies, I’ve worked in student support, led award-nominated societies, and managed the technical backbone of a student radio station — all while building a strong foundation in software development, automation, and accessibility-focused tech.
      </p>

      {/* Education */}
      <h3 className="mt-5 mb-3" style={{ fontWeight: '600' }}>Education</h3>
      <Card className="bg-dark text-light mb-4">
        <Card.Body>
          <Card.Title>BSc (Hons) Forensic Computing & Security</Card.Title>
          <Card.Subtitle className="mb-2 d-flex align-items-center gap-2" style={{ color: '#aaa', fontSize: '0.95rem' }}>
            <img src="/logos/bu.png" alt="BU Logo" style={{ height: '24px' }} />
            Bournemouth University — Sep 2022 to Jul 2025
          </Card.Subtitle>
          <Card.Text>
            Focused on cyber security, digital forensics, and software development. 
            (See <a href="/awards" style={{ color: '#aad' }}>Awards</a>)
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Experience & Roles */}
      <h3 className="mt-4 mb-3" style={{ fontWeight: '600' }}>Experience & Roles</h3>
      <Row xs={1} md={2} className="g-4">

        {/* Student Ambassador */}
        <Col>
          <Card className="bg-dark text-light h-100">
            <Card.Body>
              <Card.Title>Student Ambassador</Card.Title>
              <Card.Subtitle className="mb-2 d-flex align-items-center gap-2" style={{ color: '#aaa', fontSize: '0.95rem' }}>
                <img src="/logos/bu.png" alt="BU Logo" style={{ height: '24px' }} />
                Bournemouth University — Jun 2023 to Present
              </Card.Subtitle>
              <Card.Text>
                Supporting university open days by delivering campus tours, answering questions from prospective students, and helping them feel confident and welcomed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tesco */}
        <Col>
          <Card className="bg-dark text-light h-100">
            <Card.Body>
              <Card.Title>Customer Assistant</Card.Title>
              <Card.Subtitle className="mb-2 d-flex align-items-center gap-2" style={{ color: '#aaa', fontSize: '0.95rem' }}>
                <img src="/logos/tesco.jpg" alt="Tesco Logo" style={{ height: '24px' }} />
                Tesco Stores Ltd — Aug 2021 to Present
              </Card.Subtitle>
              <Card.Text>
                Seasonal and part-time role at a large store with over 300 employees. 
                Developed strong communication, organisation, and time management in a busy retail setting.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* DAND Officer */}
        <Col>
          <Card className="bg-dark text-light h-100">
            <Card.Body>
              <Card.Title>Disabilities, Accessibility and Neuro Diverse Officer</Card.Title>
              <Card.Subtitle className="mb-2 d-flex align-items-center gap-2" style={{ color: '#aaa', fontSize: '0.95rem' }}>
                <img src="/logos/subu.jfif" alt="SUBU Logo" style={{ height: '24px' }} />
                SUBU — Jul 2024 to Jun 2026
              </Card.Subtitle>
              <Card.Text>
                Elected Part-Time Officer representing disabled and neurodivergent students. 
                I led the campus-wide rollout of the <strong>Sunflower Lanyard Scheme</strong>, coordinated with learning support and society leaders, and organised a <strong>March 2025 trip to Google’s Accessibility Discovery Centre</strong>. 
                Proud to have been re-elected for a second year!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Gaming Society */}
        <Col>
          <Card className="bg-dark text-light h-100">
            <Card.Body>
              <Card.Title>Gaming Society President</Card.Title>
              <Card.Subtitle className="mb-2 d-flex align-items-center gap-2" style={{ color: '#aaa', fontSize: '0.95rem' }}>
                <img src="/logos/gamingsoc.png" alt="Gaming Society Logo" style={{ height: '24px' }} />
                SUBU — Nov 2023 to Jul 2026
              </Card.Subtitle>
              <Card.Text>
                Founder and current President of BU’s Gaming Society with over <strong>100 members</strong>. 
                Organised weekly events and the <strong>annual Go Karting event</strong> covered by Nerve TV & Photography. 
                I also maintain a <strong>Minecraft server</strong> for the community. 
                Shortlisted for <strong>Best Newcomer Society</strong> 2023/24.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Nerve Radio */}
        <Col>
          <Card className="bg-dark text-light h-100">
            <Card.Body>
              <Card.Title>Head of Digital Tech & Streaming</Card.Title>
              <Card.Subtitle className="mb-2 d-flex align-items-center gap-2" style={{ color: '#aaa', fontSize: '0.95rem' }}>
                <img src="/logos/nerve.jpg" alt="Nerve Radio Logo" style={{ height: '24px' }} />
                Nerve Radio — Aug 2024 to Jul 2026
              </Card.Subtitle>
              <Card.Text>
                Managing the station’s technical infrastructure, including <strong>DigitalOcean servers, DNS, networking, automation scripts</strong>, and streaming services. 
                Built and open-sourced the <a href="https://github.com/NerveRadio/OBOMT" target="_blank" rel="noopener noreferrer" style={{ color: '#aad' }}>
                OBOMT tool</a> to streamline outside broadcasts. 
                Oversaw and planned major live events at the <strong>SUBU Summer Ball</strong> and <strong>Nerve FM's Dylan’s Takeover</strong>.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
