import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePosition } from '../redux/slices/mousePositionSlice';

const MouseTracker = (props) => {
  const dispatch = useDispatch();
  const handleMouseMove = (event) => {
    dispatch(updatePosition({ x: event.clientX, y: event.clientY }));
  };
  const position = useSelector(state => state.mousePosition)


  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
      {props.render(position)}
    </div>
  );
};

export default MouseTracker;
