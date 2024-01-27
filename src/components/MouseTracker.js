import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MouseTracker = (props) => {
  const dispatch = useDispatch();
  const updatePosition = ({ x, y }) => {
    return {
      type: 'UPDATE',
      value: { x, y }
    }
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    dispatch(updatePosition({ x: event.clientX, y: event.clientY }));
  };
  const position = useSelector(state => state.mousePositionReducer.position)


  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
      {props.render(position)}
    </div>
  );
};

export default MouseTracker;
