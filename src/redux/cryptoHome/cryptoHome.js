import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.coincap.io/v2/assets';

const GET_COINS = 'GET_COINS';

const getCoins = createAsyncThunk(
    GET_COINS,
    async (post, { dispatch }) => {
      const response = await fetch(URL);
      const data = await response.json();
      const coins = data.data;
      dispatch({
        type: GET_COINS,
        payload: coins,
      });
    },
);

const coinsreducer = (state = [], action = {}) => {
    switch (action.type) {
      case GET_COINS:
        return action.payload.map((el) => ({
            ...el,
            priceUsd: parseFloat(el.priceUsd || 0).toFixed(8),
            supply: parseFloat(el.supply || 0).toFixed(4),
            marketCapUsd: parseFloat(el.marketCapUsd || 0).toFixed(4),
            volumeUsd24Hr: parseFloat(el.volumeUsd24Hr || 0).toFixed(4),
            changePercent24Hr: parseFloat(el.changePercent24Hr || 0).toFixed(8),
            vwap24Hr: parseFloat(el.vwap24Hr || 0).toFixed(8),
          }));
      default: return state;
    }
};

export {getCoins};
export default coinsreducer