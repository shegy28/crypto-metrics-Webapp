import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.coincap.io/v2/assets';

const GET_DETAILS = 'GET_DETAILS';

const getDetails = createAsyncThunk(
  GET_DETAILS,
  async (id, { dispatch }) => {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    const details = data.data;
    dispatch({
      type: GET_DETAILS,
      payload: details,
    });
  },
);

const detailsreducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...action.payload,
        priceUsd: parseFloat(action.payload.priceUsd || 0).toFixed(8),
        supply: parseFloat(action.payload.supply || 0).toFixed(4),
        marketCapUsd: parseFloat(action.payload.marketCapUsd || 0).toFixed(4),
        volumeUsd24Hr: parseFloat(action.payload.volumeUsd24Hr || 0).toFixed(4),
        changePercent24Hr: parseFloat(action.payload.changePercent24Hr || 0).toFixed(8),
        vwap24Hr: parseFloat(action.payload.vwap24Hr || 0).toFixed(8),
      };
    default: return state;
  }
};

export { getDetails };
export default detailsreducer;
