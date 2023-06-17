import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from './Details';

const mockCountry = {
  country: 'Test Country',
  population: '1000000',
  continent: 'Test Continent',
  recovered: '200000',
  deaths: '5000',
  tests: '10000',
  active: '100000',
  critical: '1000',
};

it('should render the country details', () => {
  render(<Details country={mockCountry} />);

  const countryTitle = screen.getByRole('heading', { Name: 'Test Country' });
  expect(countryTitle).toBeInTheDocument();
});
