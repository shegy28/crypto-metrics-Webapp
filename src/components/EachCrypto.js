import React from 'react';
import PropTypes from 'prop-types';

const EachCrypto = ({ coin }) => {
  const { id } = coin;
  return (
    <div className="each-coin">{id}</div>
  );
};

EachCrypto.propTypes = {
  coin: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default EachCrypto;
