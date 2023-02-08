import { useEffect } from 'react';
// import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { BsFillMicFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { FaLessThan } from 'react-icons/fa';
import { getDetails } from '../redux/cryptoDetails/cryptoDetails';
import img from '../assets/chart.png';

const Details = () => {
  const detail = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { coinId } = useParams();

  useEffect(() => {
    dispatch(getDetails(coinId));
  }, [dispatch, coinId]);

  return (
    <div className="App">
      <div className="hero-section">

        <div className="hero-head">
          <div className="nav">
            <NavLink to="/">
              {' '}
              <FaLessThan />
              {' '}
            </NavLink>
          </div>
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
              {detail.id}
              <br />
              {' '}
              {detail.symbol}
            </h3>
            <p>
              {`${parseFloat(detail.changePercent24Hr || 0).toFixed(8)} %`}
            </p>
          </div>
        </div>

        <div className="coin-bar">
          <h5>Coin Description</h5>
        </div>
      </div>
      <div className="detail-container">
        <div className="each-detail">
          <h4>Name :</h4>
          <h4>{detail.id}</h4>
        </div>
        <div className="each-detail">
          <h4>Symbol :</h4>
          <h4>{detail.symbol}</h4>
        </div>
        <div className="each-detail">
          <h4>Rank :</h4>
          <h4>{detail.rank}</h4>
        </div>
        <div className="each-detail">
          <h4>Supply :</h4>
          <h4>{detail.supply}</h4>
        </div>
        <div className="each-detail">
          <h4>MarketCap(Usd) :</h4>
          <h4>{detail.marketCapUsd}</h4>
        </div>
        <div className="each-detail">
          <h4>Volume(USD) 24Hrs :</h4>
          <h4>{detail.volumeUsd24Hr}</h4>
        </div>
        <div className="each-detail">
          <h4>Price(USD) :</h4>
          <h4>{detail.priceUsd}</h4>
        </div>
        <div className="each-detail">
          <h4>Change Percent(24Hr) :</h4>
          <h4>{detail.changePercent24Hr}</h4>
        </div>
        <div className="each-detail">
          <h4>VWAP(24Hr) :</h4>
          <h4>{detail.vwap24Hr}</h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
