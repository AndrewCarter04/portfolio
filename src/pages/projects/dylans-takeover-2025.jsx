import React from 'react';
import { Container, Button } from 'react-bootstrap';

export const meta = {
  slug: 'dylans-ob-2025',
  title: 'FM Week Dylans Takeover Outside Broadcast',
  description:
    'Live broadcast with Nerve Radio as part of FM week from Dylans Bar on campus, with local musician Archie Ray!',
  date: '2025-02-07',
};

const DylansOB = () => (
  <Container className="py-5 content-wrapper" style={{ maxWidth: '900px', zIndex: 10, position: 'relative' }}>
    <h2 className="mb-4" style={{ fontWeight: '700', fontSize: '2.5rem', color: '#eee' }}>
      {meta.title}
    </h2>

    <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.6 }}>
      {meta.description}
    </p>

    <br />

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      As part of Nerve Radio’s annual <strong>FM Week</strong> and in celebration of <strong>30 years of student radio at BU</strong>,
      I led the technical operation for our live <strong>Outside Broadcast</strong> event from Dylans Bar on campus.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      The event featured a live performance from local musician <strong>Archie Ray</strong> and was broadcast live on campus, online, and on <strong>87.9FM</strong> in the Bournemouth, Christchurch and Poole area.
      I was responsible for coordinating all the live audio links, managing audio routing, and ensuring the stream was transmitted securely across the wider university fabric network without interruption.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      Events like this show how I combine <strong>technical expertise</strong> with <strong>live operations</strong> under pressure —
      ensuring smooth delivery for a live audience, while keeping the station’s technical standards high.
    </p>

    <div className="my-4">
      <Button
        variant="primary"
        size="lg"
        href="https://www.linkedin.com/posts/andrewcarter04_it-was-a-pleasure-to-be-part-of-the-nerve-activity-7294326910887604224-KVuu"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Post on LinkedIn
      </Button>
    </div>
  </Container>
);

export default DylansOB;
