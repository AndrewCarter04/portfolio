import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';

export const meta = {
  slug: 'summerball-ob-2025',
  title: 'SUBU Summer Ball Outside Broadcast',
  description:
    'First ever live outside broadcast from the SUBU Summer Ball, the largest student-only festival in the UK.',
  date: '2025-05-31',
};

const SummerballOB = () => (
  <Container className="py-5 content-wrapper" style={{ maxWidth: '900px', zIndex: 10, position: 'relative' }}>
    <h2 className="mb-4" style={{ fontWeight: '700', fontSize: '2.5rem', color: '#eee' }}>
      {meta.title}
    </h2>

    <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.6 }}>
      In 2025, I engineered and operated Nerve Radio’s first ever live outside broadcast from the SUBU Summer Ball — the largest student-only festival in the UK.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      This ambitious project involved building a robust broadcast setup streaming from the main stage with ambient mics, incorporating live and pre-recorded links, interviews, and jingles.
      I established a high-speed, secure network connection between the festival site and our main studio five miles away, working closely with university IT teams to obtain all necessary approvals.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      To ensure smooth live operations, I developed a custom Electron.js application called OBOMT (Outside Broadcast Operations Management Tool).
      This tool monitored every part of the broadcast chain in real time and provided instant alerts for any issues, allowing me to quickly resolve problems during the 11-hour live event and minimise downtime.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      The entire broadcast was planned, engineered, and run in-house using existing station and Students’ Union equipment, demonstrating technical skill, problem-solving, and resourcefulness on a tight budget.
      The success of this project has laid a strong foundation for future outside broadcasts at Nerve Radio.
    </p>

    <div className="my-4">
      <Button
        variant="primary"
        size="lg"
        href="https://www.linkedin.com/posts/andrewcarter04_last-weekend-i-had-the-pleasure-of-leading-activity-7337438219908640768-aVvM"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Post on LinkedIn
      </Button>
    </div>

    {/* Images */}
    <div className="my-4 d-flex flex-wrap justify-content-center gap-3">
      <Image
        src="/projects/summerball1.jpg"
        alt="SUBU Summer Ball Broadcast 1"
        style={{ maxWidth: 'calc(50% - 1rem)', borderRadius: '12px', boxShadow: '0 0 12px rgba(0,0,0,0.4)' }}
        fluid
      />
      <Image
        src="/projects/summerball2.jpg"
        alt="SUBU Summer Ball Broadcast 2"
        style={{ maxWidth: 'calc(50% - 1rem)', borderRadius: '12px', boxShadow: '0 0 12px rgba(0,0,0,0.4)' }}
        fluid
      />
      <Image
        src="/projects/summerball3.jpg"
        alt="SUBU Summer Ball Broadcast 3"
        style={{ maxWidth: 'calc(50% - 1rem)', borderRadius: '12px', boxShadow: '0 0 12px rgba(0,0,0,0.4)' }}
        fluid
      />
      <Image
        src="/projects/summerball4.png"
        alt="SUBU Summer Ball Broadcast 4"
        style={{ maxWidth: 'calc(50% - 1rem)', borderRadius: '12px', boxShadow: '0 0 12px rgba(0,0,0,0.4)' }}
        fluid
      />
    </div>

    <div className="d-flex gap-3 mt-4">
      <Button
        variant="primary"
        size="lg"
        href="https://github.com/NerveRadio/OBOMT"
        target="_blank"
        rel="noopener noreferrer"
      >
        View OBOMT on GitHub
      </Button>
    </div>
  </Container>
);

export default SummerballOB;
