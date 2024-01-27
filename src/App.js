import React from 'react';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';
import MouseTracker from './components/MouseTracker';
import Counter from './components/Counter';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Dashboard name={'Allen test component'} />
        <Counter />
        <MouseTracker
          render={({ x, y }) => (
            <h1>
              The current mouse position is at X: {x}, Y:{y}
            </h1>
          )}
        />
      </div>
    </Provider>
  );
}
