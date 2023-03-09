import { render, screen } from '@testing-library/react';
import App from './App';
import ReservationSection from './components/ReservationSection'

test('Renders the Reservation Secion heading', () => {
  render(<ReservationSection />);
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
})