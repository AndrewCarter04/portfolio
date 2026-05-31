import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FadeIn from '../components/fadeIn';
import AnimatedCard from '../components/animatedCard';

const About = () => {
  return (
    <Container className="py-5 text-light">
      <FadeIn direction="up">
        <h2 className="mb-4" style={{ fontWeight: '700', fontSize: '2.5rem' }}>
          About Me
        </h2>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
          I'm a recent graduate from Bournemouth University with a BSc (Hons) in Forensic Computing & Security.
          Alongside my studies, I've worked in student support, led award-nominated societies, and managed the technical backbone of a student radio station — all while building a strong foundation in software development, automation, and accessibility-focused tech.
        </p>
      </FadeIn>

      {/* Education */}
      <FadeIn direction="up" delay={0.15}>
        <h3 className="mt-5 mb-3" style={{ fontWeight: '600' }}>Education</h3>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <AnimatedCard className="mb-4">
          <Card className="bg-dark text-light mb-0" style={{ height: '100%' }}>
            <Card.Body>
              <Card.Title>Master's by Research</Card.Title>
              <Card.Subtitle className="mb-2 d-flex align-items-center gap-2" style={{ color: '#aaa', fontSize: '0.95rem' }}>
                <img src="/logos/bu.png" alt="BU Logo" style={{ height: '24px' }} />
                Bournemouth University — Sep 2025 to Aug 2026
              </Card.Subtitle>
              <Card.Text>
                Thesis Title: Secure, Multi-Platform Credential Management System for Community Driven Digital Infrastructure
              </Card.Text>
            </Card.Body>
          </Card>
        </AnimatedCard>
      </FadeIn>

      <FadeIn direction="up" delay={0.25}>
        <AnimatedCard className="mb-4">
          <Card className="bg-dark text-light mb-0" style={{ height: '100%' }}>
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
        </AnimatedCard>
      </FadeIn>

      {/* Experience & Roles */}
      <FadeIn direction="up" delay={0.1}>
        <h3 className="mt-4 mb-3" style={{ fontWeight: '600' }}>Experience & Roles</h3>
      </FadeIn>

      <Row xs={1} md={2} className="g-4">
        {[
          {
            title: 'Student Ambassador',
            logo: '/logos/bu.png',
            logoAlt: 'BU Logo',
            tenure: 'Bournemouth University — Jun 2023 to Present',
            body: 'Supporting university open days by delivering campus tours, answering questions from prospective students, and helping them feel confident and welcomed.',
          },
          {
            title: 'Customer Assistant',
            logo: '/logos/tesco.jpg',
            logoAlt: 'Tesco Logo',
            tenure: 'Tesco Stores Ltd — Aug 2021 to Present',
            body: 'Seasonal and part-time role at a large store with over 300 employees. Developed strong communication, organisation, and time management in a busy retail setting.',
          },
          {
            title: 'Disabilities, Accessibility and Neuro Diverse Officer',
            logo: '/logos/subu.jfif',
            logoAlt: 'SUBU Logo',
            tenure: 'SUBU — Jul 2024 to Jun 2026',
            bodyJsx: (
              <>
                Elected Part-Time Officer representing disabled and neurodivergent students.
                I led the campus-wide rollout of the <strong>Sunflower Lanyard Scheme</strong>, coordinated with learning support and society leaders, and organised a <strong>March 2025 trip to Google's Accessibility Discovery Centre</strong>.
                Proud to have been re-elected for a second year!
              </>
            ),
          },
          {
            title: 'Gaming Society President',
            logo: '/logos/gamingsoc.png',
            logoAlt: 'Gaming Society Logo',
            tenure: 'SUBU — Nov 2023 to Jul 2026',
            bodyJsx: (
              <>
                Founder and current President of BU's Gaming Society with over <strong>100 members</strong>.
                Organised weekly events and the <strong>annual Go Karting event</strong> covered by Nerve TV & Photography.
                I also maintain a <strong>Minecraft server</strong> for the community.
                Shortlisted for <strong>Best Newcomer Society</strong> 2023/24.
              </>
            ),
          },
          {
            title: 'Head of Digital Tech & Streaming',
            logo: '/logos/nerve.jpg',
            logoAlt: 'Nerve Radio Logo',
            tenure: 'Nerve Radio — Aug 2024 to Jul 2026',
            bodyJsx: (
              <>
                Managing the station's technical infrastructure, including <strong>DigitalOcean servers, DNS, networking, automation scripts</strong>, and streaming services.
                Built and open-sourced the <a href="https://github.com/NerveRadio/OBOMT" target="_blank" rel="noopener noreferrer" style={{ color: '#aad' }}>OBOMT tool</a> to streamline outside broadcasts.
                Oversaw and planned major live events at the <strong>SUBU Summer Ball</strong> and <strong>Nerve FM's Dylan's Takeover</strong>.
              </>
            ),
          },
        ].map(({ title, logo, logoAlt, tenure, body, bodyJsx }, idx) => (
          <Col key={idx}>
            <FadeIn direction="up" delay={0.1 + idx * 0.08}>
              <AnimatedCard>
                <Card className="bg-dark text-light" style={{ height: '100%' }}>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 d-flex align-items-center gap-2" style={{ color: '#aaa', fontSize: '0.95rem' }}>
                      <img src={logo} alt={logoAlt} style={{ height: '24px' }} />
                      {tenure}
                    </Card.Subtitle>
                    <Card.Text as="div">{bodyJsx ?? body}</Card.Text>
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

export default About;