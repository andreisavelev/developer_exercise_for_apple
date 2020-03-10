import React from 'react';
import { render } from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import App from './App';
import renderWithRouter from "./setupTests";

test('Should render default text for Home page', () => {
  const { getByText } = render(
      <MemoryRouter initalEntries={['/']}>
          <App />
      </MemoryRouter>
  );
  const text = getByText(/Pleas, select the city/i);
  expect(text).toBeInTheDocument();
});
