import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';

export const meta = {
  slug: 'obomt',
  title: 'Outside Broadcast Operations Management Tool',
  description:
    'Custom-developed Electron.js app to manage an outside broadcast, providing live notifications and alerts on failure of any monitored devices/entities.',
  date: '2025-05-31',
};

const OBOMT = () => (
  <Container className="py-5 content-wrapper" style={{ maxWidth: '900px', zIndex: 10, position: 'relative' }}>
    <h2 className="mb-4" style={{ fontWeight: '700', fontSize: '2.5rem', color: '#eee' }}>
      {meta.title}
    </h2>

    <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.6 }}>
      {meta.description}
    </p>

    <br />

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      Developed in <strong>2025</strong> during my time as Head of Digital Tech & Streaming at <strong>Nerve Radio</strong>, OBOMT
      was created to support our first full <strong>Outside Broadcast</strong> from The Students' Union at Bournemouth University's <em>Summer Ball</em> —
      one of the largest student-only festivals in the UK.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      OBOMT is a custom <strong>Electron.js</strong> application that provides a live dashboard for our studio team, monitoring the
      status of all remote and on-site devices during live broadcasts. It issues instant alerts if any part of the broadcast chain
      — including audio encoders, stream servers, or hardware — fails or disconnects.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      The tool is built using a combination of <strong>React.js</strong> (frontend), <strong>Express.js</strong> (backend), and <strong>Electron.js</strong> to wrap it all
      into a desktop interface. It is designed for reliability and visibility, reducing the chance of unnoticed OB issues.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      OBOMT is <strong>open source under the MIT license</strong> and tailored to Nerve Radio's infrastructure, but can easily be forked and adapted
      by other student or community radio stations.
    </p>

    <div className="my-4">
      <Button
        variant="primary"
        href="https://github.com/NerveRadio/OBOMT"
        target="_blank"
        rel="noopener noreferrer"
        className="me-2"
      >
        View on GitHub
      </Button>
    </div>

    <Image src="/projects/obomt.PNG" fluid className="mb-4" style={{ borderRadius: '8px' }} />
  </Container>
);

export default OBOMT;
