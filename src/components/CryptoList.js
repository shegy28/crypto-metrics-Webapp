import React from 'react';
import PropTypes from 'prop-types';
import EachCrypto from './EachCrypto';

const CryptoList = (props) => {
  const { coins, search } = props;
  return (
    <div className="coin-grid">
      {coins.filter((coin) => {
        const filter = search.get('filter');
        if (!filter) return true;
        const name = coin.name.toLowerCase();
        return name.startsWith(filter.toLowerCase());
      }).map((coin) => (
        <EachCrypto key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

CryptoList.propTypes = {
  coins: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

export default CryptoList;
