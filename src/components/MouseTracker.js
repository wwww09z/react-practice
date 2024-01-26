import React, { useState } from 'react';

const MouseTracker = (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
      {props.render(mousePosition)}
    </div>
  );
};

export default MouseTracker;
