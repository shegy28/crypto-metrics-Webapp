import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const EachCrypto = ({ coin, arrowClick }) => {
  
  const { id, priceUsd, symbol } = coin;
  
    
  
  return (
    <div className="each-coin">
      <button type="button" className="pointer" onClick={() => (arrowClick(id))} id='icon' title='icon'>
        <BsArrowRightCircle  />
      </button>
      <h3>
        {id}
        {' '}
        <br />
        {' '}
        {symbol}
      </h3>
      <p>{priceUsd}</p>
    </div>
  );
};

EachCrypto.propTypes = {
  coin: PropTypes.oneOfType([PropTypes.object]).isRequired,
  arrowClick: PropTypes.func.isRequired,
};

export default EachCrypto;
