import React from "react";
import { fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import MouseTracker from "./MouseTracker";

describe('MouseTracker', () => {
  it('track mouse move', () => {
    const renderMock = jest.fn(({ x, y }) => <div>Mouse position is {x}, {y}</div>);

    const { container } = render(<MouseTracker render={renderMock} />);
    fireEvent.mouseMove(container.firstChild, { clientX: 100, clientY: 200 });

    expect(renderMock).toHaveBeenCalledWith({ x: 100, y: 200 });
    expect(container.textContent).toBe('Mouse position is 100, 200');
  });

  test('check snapshot', () => {
    const renderMock = jest.fn(() => <div>Mouse position is 100, 200</div>);
    const tree = renderer.create(<MouseTracker render={renderMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});