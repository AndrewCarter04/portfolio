import React, { useEffect, useRef } from 'react';

const snippets = ['{}', '<>', '()', '/* */', '//', '==', '=>'];
const random = (min, max) => Math.random() * (max - min) + min;

const CodeTrail = () => {
  const canvasRef = useRef();
  const particles = useRef([]);
  const mouse = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000 });
  const NUM_PARTICLES = 70;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize particles
    particles.current = Array(NUM_PARTICLES).fill(0).map(() => {
      const x = random(0, width);
      const y = random(0, height);
      return {
        x,
        y,
        vx: 0,
        vy: 0,
        snippet: snippets[Math.floor(Math.random() * snippets.length)],
        size: random(14, 22),
        opacity: 0.3 + Math.random() * 0.3,
      };
    });

    // Physics constants
    const friction = 0.9;
    const pushRadius = 120;
    const pushStrength = 2;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      particles.current.forEach((p) => {
        // Vector from mouse to particle
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < pushRadius) {
          // Push particle away with strength inversely proportional to distance
          const force = (pushRadius - dist) / pushRadius * pushStrength;
          const angle = Math.atan2(dy, dx);

          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
        }

        // Update velocity with friction
        p.vx *= friction;
        p.vy *= friction;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bound particles inside viewport with bounce effect
        if (p.x < 0) {
          p.x = 0;
          p.vx = -p.vx * 0.5;
        } else if (p.x > width) {
          p.x = width;
          p.vx = -p.vx * 0.5;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy = -p.vy * 0.5;
        } else if (p.y > height) {
          p.y = height;
          p.vy = -p.vy * 0.5;
        }

        // Draw snippet
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#ccc';
        ctx.font = `${p.size}px monospace`;
        ctx.fillText(p.snippet, p.x, p.y);
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    function onMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        backgroundColor: 'transparent',
      }}
    />
  );
};

export default CodeTrail;
