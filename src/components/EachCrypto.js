import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle} from 'react-icons/bs';

const EachCrypto = (props) => {
  const { coin, arrowClick } = props;
  const {id, priceUsd, symbol}= coin
  return (
    <div className="each-coin">
        <button type='button'>
        <BsArrowRightCircle  onClick={() => (arrowClick(id))}/>
        </button> 
        <h3>{id} <br /> {symbol}</h3>
        <p>{priceUsd}</p>
    </div>
  );
};

EachCrypto.propTypes = {
  coin: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default EachCrypto;
