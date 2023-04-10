// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count == 0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  fireEvent.click(screen.getByText('+'))
  const count2 = screen.getByTestId('count');
  expect(count2 == (count + 1))
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const count = screen.getByTestId('count');
    fireEvent.click(screen.getByText('-'))
    const count2 = screen.getByTestId('count')
    expect(count2 == (count - 1))
});
