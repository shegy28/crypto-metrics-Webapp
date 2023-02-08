import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Details from '../pages/Details';

Details
test("To test for Detailspage render", () => {
    render(
        <MemoryRouter>
        <Provider store={store}>
            <Details />
        </Provider>
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Coin Description/i);
    expect(linkElement).toBeInTheDocument();
    
})

test('expect Details component to match snapshot', () => {
    const view = renderer.create(
        <MemoryRouter>
        <Provider store={store}>
            <Details />
        </Provider>
        </MemoryRouter>).toJSON();
    expect(view).toMatchSnapshot();
});