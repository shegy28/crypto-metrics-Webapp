import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { BsFillMicFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import CryptoList from '../components/CryptoList';
import { getCoins } from '../redux/cryptoHome/cryptoHome';
import img from '../assets/chart.png';

const Home = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();

  const arrowClick = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="hero-section">
        <div className="hero-head">
          <h2>2023</h2>
          <h4>CryptoCurrencies</h4>
          <div className="hero-icon">
            <BsFillMicFill />
            <AiFillSetting />
          </div>
        </div>
        <div className="chart">
          <img src={img} alt="backgroud chart" />
          <div className="chart-header">
            <h3>
              CRYPTO
              <br />
              {' '}
              CURRENCIES
            </h3>
            <p>
              {coins.length}
              {' '}
              coins
            </p>
          </div>
        </div>
        <div>
          <input
            className="search-bar"
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
      <CryptoList coins={coins} search={search} arrowClick={arrowClick} />
    </div>
  );
};

export default Home;
