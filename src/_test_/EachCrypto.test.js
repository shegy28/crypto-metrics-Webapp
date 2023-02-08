import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EachCrypto from '../components/EachCrypto';


test('expect home component to match snapshot', () => {
    const arrowClick = jest.fn();
    const coin = {
      id: 2,
      priceUsd: 200, 
      symbol: "usd"
    };
    const {queryByTitle} = render(<EachCrypto arrowClick={arrowClick} coin={coin}/>);
    const button = queryByTitle("icon");
    fireEvent.click(button);
    expect(arrowClick).toHaveBeenCalledTimes(1)

  });