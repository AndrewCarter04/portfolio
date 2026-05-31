import { useState, useEffect } from 'react';

const TypeWriter = ({ strings, speed = 75, deleteSpeed = 40, pause = 2000 }) => {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx(i => (i + 1) % strings.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
        );
      }, deleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, idx, strings, speed, deleteSpeed, pause]);

  return (
    <span>
      {text}
      <span className="typewriter-cursor" />
    </span>
  );
};

export default TypeWriter;