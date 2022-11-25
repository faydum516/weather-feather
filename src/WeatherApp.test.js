import { render, screen } from '@testing-library/react';
import WeatherApp from './WeatherApp';

test('renders learn react link', () => {
  render(<WeatherApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
