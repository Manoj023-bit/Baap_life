
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Strawberry English Medium School/i);
  expect(linkElement).toBeInTheDocument();
});
