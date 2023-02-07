import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { BsMic } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import CryptoList from '../components/CryptoList';
import { getCoins } from '../redux/cryptoHome/cryptoHome';
import img from '../assets/chart.png';

const Home = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="hero-section">
        <div className="hero-head">
          <h2>2023</h2>
          <h2>CryptoCurrencies</h2>
          <div className="hero-icon">
            <BsMic />
            <FiSettings />
          </div>
        </div>
        <div className="chart">
          <img src={img} alt="backgroud chart" />
          <div className="chart-header">
            <h3>
              Crypto
              <br />
              {' '}
              Currencies
            </h3>
            <p>
              {coins.length}
              {' '}
              coins
            </p>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for coins e.g : ETH"
            value={search.get('filter') || ''}
            onChange={(e) => {
              const filter = e.target.value;
              if (filter) {
                setSearch({ filter });
              } else {
                setSearch({});
              }
            }}
          />
        </div>
      </div>
      <CryptoList coins={coins} search={search} />
    </div>
  );
};

export default Home;
