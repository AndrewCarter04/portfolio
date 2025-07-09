import React from 'react';
import { Container, Image } from 'react-bootstrap';

export const meta = {
  slug: 'clickasnap-hackathon',
  title: 'ClickASnap Hackathon',
  description: 'Week long hackathon project completed in a team, where we won the Teamwork award!',
  date: '2023-03-01',
};

const ClickASnapHackathon = () => (
  <Container className="py-5" style={{ maxWidth: '900px' }}>
    <h2 className="mb-4" style={{ fontWeight: '600', color: '#eee' }}>
      {meta.title}
    </h2>
    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>{meta.description}</p>

    <p style={{ marginTop: '2rem', color: '#ccc', lineHeight: 1.6 }}>
      I participated in the <strong>Bournemouth University X ClickASnap Hackathon</strong> in March 2023 with a group of friends. We were given a week to create a new feature idea for the ClickASnap website.
      <br /><br />
      We created a reels feature, which would use an algorithm to suggest photos based on which photos the user has liked. This would also have allowed easy implementation into a mobile app. Part of our idea was also to introduce QR codes to images, as the platform is based on views, so shareability is key.
      <br /><br />
      We used <strong>Replit</strong> to create a demo web page, and so we could all seamlessly collaborate. We presented our work at the end of the week to ClickASnap and the university staff.
      <br /><br />
      <strong>We won the Teamwork award for this project.</strong>
      <br /><br />
      <em>
        Group members: Andrew Carter, Ryan Palmer, Joey Payne, Brennan Richmond & Katie O’Connor
      </em>
    </p>

    <div className="mt-5">
      <Image
        src="/projects/clickasnap-hackathon1.jpg"
        fluid
        rounded
        className="mb-4 shadow"
        style={{ borderRadius: '8px', zIndex: 10, position: 'relative' }}
      />
      <Image
        src="/projects/clickasnap-hackathon2.jpg"
        fluid
        rounded
        className="mb-4 shadow"
        style={{ borderRadius: '8px', zIndex: 10, position: 'relative' }}
      />
      <Image
        src="/projects/clickasnap-hackathon3.jpg"
        fluid
        rounded
        className="mb-4 shadow"
        style={{ borderRadius: '8px', zIndex: 10, position: 'relative' }}
      />
    </div>
  </Container>
);

export default ClickASnapHackathon;