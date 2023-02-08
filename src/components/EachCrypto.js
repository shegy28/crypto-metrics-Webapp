import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const EachCrypto = (props) => {
  const { coin, arrowClick } = props;
  const { id, priceUsd, symbol } = coin;
  return (
    <div className="each-coin">
      <button type="button" className='pointer'>
        <BsArrowRightCircle onClick={() => (arrowClick(id))} />
      </button>
      <h3>
        {id.toUpperCase()}
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
