import React from 'react';
import './style.css';
import Dashboard from './components/Dashboard';
import MouseTracker from './components/MouseTracker';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Dashboard name={'Allen test component'} />
      <MouseTracker
        render={({ x, y }) => (
          <h1>
            The current mouse position is at X: {x}, Y:{y}
          </h1>
        )}
      />
    </div>
  );
}
