import React from 'react';
import { Button, Container } from 'react-bootstrap';

export const meta = {
  slug: 'discord-bots',
  title: 'Custom Discord Bots',
  description: 'Several Discord bots made in Java using library \'JDA\', released open source.',
  date: '2025-11-25',
};

const DiscordBots = () => (
  <Container className="py-5 content-wrapper" style={{ maxWidth: '900px', zIndex: 10, position: 'relative' }}>
    <h2 className="mb-4" style={{ fontWeight: '700', fontSize: '2.5rem', color: '#eee' }}>
      {meta.title}
    </h2>

    <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.6 }}>
      {meta.description}
    </p>

    <br />

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      I've created a number of custom Discord bots using <strong>Java</strong> and the <strong>JDA</strong> (Java Discord API) library to enhance server engagement and automation.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      One of my favourite bots is <strong>BucketBot</strong>, built for a university hackathon. It's a helpful, friendly bot who gave random sustainability quotes at a scheduled time.
    </p>

    <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
      I also built a <strong>Secret Santa Bot</strong> for Discord — a fully automatic system where participants find out in DMs who they have for Secret Santa!
    </p>

    <div className="my-4">
      <Button
        variant="primary"
        href="https://github.com/AndrewCarter04/SecretSantaBot"
        target="_blank"
        rel="noopener noreferrer"
        className="me-2"
      >
        View Secret Santa Bot on GitHub
      </Button>
    </div>
  </Container>
);

export default DiscordBots;
