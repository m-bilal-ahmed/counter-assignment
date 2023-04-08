import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter message', () => {
  render(<Counter />);
  const messageElement = screen.getByText(/count/i);
  expect(messageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('-1');
});
