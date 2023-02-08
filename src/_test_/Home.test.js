import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';
import store from '../redux/configureStore';

test('To test for Homepage render', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </MemoryRouter>,
  );
  const linkElement = screen.getByText(/CryptoCurrencies/i);
  expect(linkElement).toBeInTheDocument();
});

test('expect home component to match snapshot', () => {
  const view = renderer.create(
    <MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </MemoryRouter>,
  ).toJSON();
  expect(view).toMatchSnapshot();
});
