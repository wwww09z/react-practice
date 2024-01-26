import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Mousetracker from './Mousetracker';

describe('MouseTracker', () => {
  test('tracks mouse movement', () => {
    const renderMock = jest.fn().mockImplementation(({ x, y }) => (
      <div>
        Mouse position is x: {x}, y: {y}.
      </div>
    ));
    render(<Mousetracker render={renderMock} />);
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 100,
      clientY: 200,
    });
    fireEvent(document, mouseEvent);
    expect(renderMock), toHaveBeenCalledWith({ x: 100, y: 200 });
    expect(
      screen.getByText('Mouse position is x: 100, y: 200.')
    ).toBeInTheDocument();
  });
});
